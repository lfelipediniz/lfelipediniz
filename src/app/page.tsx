import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <Image
          src="https://avatars.githubusercontent.com/u/61145881?v=4"
          alt="Luiz Felipe"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">Luiz Felipe Diniz Costa</h1>
        <p className="text-lg">Graduando em Ciência da Computação na USP</p>
        <p className="text-lg">Técnico em Desenvolvimento de Sistemas</p>
        
        <div className="py-4">
          <a href="https://www.icmc.usp.br/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ICMC - USP</a>
        </div>

        <div className="py-4">
          <a href="https://discord.gg/UeutKXCBpG" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PermaCache Community</a>
        </div>

        <h2 className="text-2xl font-semibold">Tecnologias Principais</h2>
        <p className="flex justify-center gap-4 py-2">
          <span className="bg-blue-500 p-2 rounded">TypeScript</span>
          <span className="bg-blue-700 p-2 rounded">React</span>
          <span className="bg-blue-600 p-2 rounded">C++</span>
          <span className="bg-blue-500 p-2 rounded">Python</span>
        </p>
      </div>
    </main>
  );
}
