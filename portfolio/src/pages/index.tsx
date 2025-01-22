import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/navbar/index';
import Footer from '../components/footer';
import Button from '../components/button';
import codeSnippet from "../../public/images/code.png";
import socialProject from "../../public/images/aidenAppProject.png";
import logo from "../../public/images/Nocturnal Byte.png";
import appProjectGif from "../../public/images/Clans.gif";

const Home = () => {
  const greetings = [
    "Super secret greeting! I'm", //supersecret message
    "Hallo, ich bin", // German
    "Hallo, ik ben", //dutch
    "Hello, I'm", // English
    "Bonjour, je suis", // French
    "Hola, soy", // Spanish
    "Ciao, sono", // Italian
    "こんにちは、", // Japanese
    "안녕하세요, 저는", // Korean
    "你好，我是", // Chinese
    "Olá, eu sou", // Portuguese
    "Привет, я", // Russian
  ];

  const [randomGreeting, setRandomGreeting] = useState(greetings[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random()*greetings.length);
    setRandomGreeting(greetings[randomIndex])
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(randomGreeting)

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Aiden&apos;s Portfolio</title>
        <meta name="description" content="Welcome to Aiden's portfolio. Discover projects, learn about Aiden, and get in touch!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');
        </style>
      </Head>

      {/* Main Content */}
      <div className="bg-primary text-textLight min-h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <header className="flex justify-center mt-12 px-6">
          <div className='px-4'>
            <h1 className="text-4xl font-bold">{randomGreeting} Aiden.</h1>
            <p className="mt-4 text-lg">
              A front-end web designer with experience in React and Tailwind-
            </p>
            <p>Want to know more about me?</p>
            <Button
              variant="primary font-semibold mt-6" 
              label="Say hello" 
              type="button" 
              large= {false}
              fullWidth= {false}
              onClick= {() => window.location.href = '/contact'}
              disabled= {false}
              small = {false}
            />
          
          </div>
          <div className='px-4'>
          <Image className="border-2 border-white rounded-lg"
              src="http://placeholder.com/400"
              alt="selfportrait"
              width={300}
              height={300}
            />
          </div>
        </header>
        <div className='bg-slate-600' style={{color: 'blue',  padding:'4px', marginTop:'4px'}}></div>
        <section id="projects" className="px-6 mt-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="lg:h-[32rem] h-full flex flex-col lg:flex-row justify-center">
            <div className='flex flex-col justify-center lg:h-full w-full h-96 lg:w-4/12'>
              <div className="group w-full h-3/6 mt-3 lg:mt-0 lg:my-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white"
              onClick={() => window.location.href = '/projects'}
              style={{ cursor: 'pointer' }}
              >
                  <Image className="transition duration-700 peer group-hover:blur-sm object-cover rounded-lg"
                    src={appProjectGif}
                    alt="MissingImg"
                    style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                  />
                  <h1 className='absolute select-none opacity-0 group-hover:opacity-100 transition duration-700'>SEE MY PROJECTS</h1>
                  
              </div>
              <div className="group w-full h-3/6 mt-3 lg:mt-0 lg:my-2 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white"
              onClick={() => window.location.href = '/projects'}
              style={{ cursor: 'pointer' }}
              >
              <Image className="transition duration-700 group-hover:blur-sm  object-fill rounded-lg"
                    src={logo}
                    alt="MissingImg"
                    style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                  />
                  <h1 className='absolute select-none opacity-0 group-hover:opacity-100 transition duration-700'>SEE MY PROJECTS</h1>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center h-full w-full lg:w-6/12'>
              <div className="group w-full h-3/5 lg:w-3/6 lg:h-full mt-3 lg:mt-0 lg:mx-3 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white"
              onClick={() => window.location.href = '/projects'}
              style={{ cursor: 'pointer' }}
              >
              <Image className="transition duration-700 group-hover:blur-sm object-cover rounded-lg"
                    src={codeSnippet}
                    alt="MissingImg"
                    style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                  />
                  <h1 className='absolute select-none opacity-0 group-hover:opacity-100 transition duration-700'>SEE MY PROJECTS</h1>
              </div>
              <div className="group w-full h-3/5 lg:w-3/6 lg:h-full mt-3 lg:mt-0 lg:mx-3 bg-slate-950 rounded-lg flex items-center justify-center text-accent font-bold border-2 border-white"
              onClick={() => window.location.href = '/projects'}
              style={{ cursor: 'pointer' }}
              >
                <Image className="transition duration-700 group-hover:blur-sm object-cover rounded-lg"
                    src={socialProject}
                    alt="MissingImg"
                    style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                  />
                  <h1 className='absolute select-none opacity-0 group-hover:opacity-100 transition duration-700'>SEE MY PROJECTS</h1>
              </div>
            </div>
          </div>
        </section>

       
        <Footer />
      </div>
    </>
  );
};

export default Home;
