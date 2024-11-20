import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Aiden's Portfolio</title>
        <meta name="description" content="Welcome to Aiden's portfolio. Discover projects, learn about Aiden, and get in touch!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Content */}
      <div className="bg-primary text-textLight min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
          <div className="text-lg font-bold">LOGO</div>
          <div className="flex gap-4">
            <a href="#projects" className="hover:text-accent transition-colors">
              My Projects
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About Me
            </a>
          </div>
          <button className="border border-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-black transition">
            Contact
          </button>
        </nav>

        {/* Hero Section */}
        <header className="text-center mt-12 px-4">
          <h1 className="text-4xl font-bold">Hallo, I'm Aiden.</h1>
          <p className="mt-4 text-lg">
            A front-end web designer with experience in React and Tailwind. Want to know more about me?
          </p>
          <button className="mt-6 px-6 py-2 bg-accent text-black font-semibold rounded-lg hover:bg-opacity-80 transition">
            Say Hello
          </button>
        </header>
        
        <section id="projects" className="px-6 mt-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-flow-col grid-rows-2 gap-4 h-40">
            <div className="row-span-1 col-span-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white">
              See My Projects
            </div>
            <div className="row-span-1 col-span-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white">
              See My Projects
            </div>
            <div className="row-span-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white">
              See My Projects
            </div>
            <div className=" row-span-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white">
            See My Projects
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-4 bg-gray-900 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Aiden's Portfolio. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Home;
