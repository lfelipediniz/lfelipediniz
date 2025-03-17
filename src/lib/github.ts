
export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  language: string;
  topics: string[];
  pushed_at: string;
}

export async function fetchUserRepos(username: string): Promise<Repository[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data: Repository[] = await response.json();
    
    // Filter out forked repositories and sort by last update
    return data
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6);
      
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

export async function fetchOrgRepos(username: string): Promise<Repository[]> {
  try {
    // First, get the organizations the user belongs to
    const orgsResponse = await fetch(`https://api.github.com/users/${username}/orgs`);
    
    if (!orgsResponse.ok) {
      throw new Error(`GitHub API error: ${orgsResponse.status}`);
    }
    
    const orgs = await orgsResponse.json();
    
    // If the user doesn't belong to any organizations, return an empty array
    if (!orgs.length) {
      return [];
    }
    
    // Get repositories from the first 2 organizations (to limit API calls)
    const orgReposPromises = orgs.slice(0, 2).map(async (org: any) => {
      // Get all repos for this organization
      const reposResponse = await fetch(`https://api.github.com/orgs/${org.login}/repos?sort=updated&per_page=10`);
      
      if (!reposResponse.ok) {
        console.warn(`Error fetching repos for org ${org.login}: ${reposResponse.status}`);
        return [];
      }
      
      const repos = await reposResponse.json();
      
      // For each repo, check if the user has contributed to it
      const reposWithContributions = await Promise.all(
        repos.map(async (repo: any) => {
          try {
            // Check if user is in contributors list
            const contributorsResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/contributors`);
            
            if (!contributorsResponse.ok) {
              return null; // Skip this repo if we can't get contributors
            }
            
            const contributors = await contributorsResponse.json();
            const hasContributed = contributors.some((contributor: any) => 
              contributor.login.toLowerCase() === username.toLowerCase()
            );
            
            return hasContributed ? repo : null;
          } catch (error) {
            console.warn(`Error checking contributors for ${repo.full_name}:`, error);
            return null;
          }
        })
      );
      
      // Filter out null values (repos without user contributions)
      return reposWithContributions.filter(Boolean);
    });
    
    const orgReposArrays = await Promise.all(orgReposPromises);
    
    // Flatten the arrays of repositories
    const allOrgRepos: Repository[] = ([] as Repository[]).concat(...orgReposArrays);
    
    // Filter, sort and limit the results
    return allOrgRepos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6);
      
  } catch (error) {
    console.error('Error fetching GitHub organization repositories:', error);
    throw error;
  }
}
