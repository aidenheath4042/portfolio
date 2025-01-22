import React from "react";
import Button from "@/components/button";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/images/CoffeeLaptop.jpg"
import happyLaptop from "../../public/images/happyLaptop.png"
import clipartServer from "../../public/images/server.png"
import paintBrush from "../../public/images/paintbrush.png"

export default function About(){
    return(
        <>
            <Head>
                <title>Aiden&apos;s Portfolio</title>
                <meta name="description" content="Welcome to Aiden's portfolio. Discover projects, learn about Aiden, and get in touch!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');
                </style>
            </Head>
            <div className="bg-primary text-textLight min-h-screen">
                <NavBar />
                <header className="flex flex-col lg:flex-row justify-center mt-2 p-6 bg-slate-900">
                    <div className='w-full lg:px-4 lg:w-2/5'>
                        <h1 className="text-4xl font-bold">Hallo, <br /> I&apos;m Aiden.</h1>
                        <div className="mt-4 text-sm">
                            <p className="mt-2">
                            Junior front-end developer with a strong foundation in computing science and practical experience in web
                            development.
                            </p>

                            <p className="mt-2">
                            Over a year of professional experience in a junior role, focusing on front-end technologies
                            and delivering high-quality projects for clients. 
                            </p>

                            <p className="mt-2">
                            Proficient in HTML, SCSS, React/JavaScript and design in
                            Figma with a keen interest in expanding expertise in React/TypeScript and modern web development practices. 
                            </p>

                            <p className="mt-2">
                            Proven
                            ability to lead projects and maintain high standards of quality and collaboration. 
                            Eager to contribute my
                            skills and grow within a dynamic tech environment.
                            </p>
                        </div>
                        
                    </div>
                    <div className=" flex rounded-2xl h-auto w-7/12 lg:w-2/12 aspect-square">
                        <Image 
                        className="object-cover"
                        src={profileImage} 
                        alt="Why aint there an image here?"
                        style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                        ></Image>
                    </div>
                </header>
                <div className="flex flex-col flex-wrap h-full lg:h-[36rem]  items-start content-center mt-2 p-6 bg-slate-900">
                    <div className="w-full lg:w-10/12 h-full flex justify-center lg:justify-between flex-col">
                        <h1 className="text-orange-700 text-2xl font-bold text-center lg:text-start">
                            Skills
                        </h1>
                        <div className="h-5/6 flex lg:flex-row flex-col">
                            <div className="flex flex-col lg:flex-row h-full flex-wrap justify-evenly content-center">
                                <div className="mb-3 lg:mb-0 border-2 rounded-md border-green-600 w-5/6 lg:w-1/4 h-full flex lg:flex-row flex-col flex-wrap items-start justify-between content-center text-center">
                                    <div className="w-full h-auto">
                                        <div className="flex w-full justify-center">
                                            <div className="flex  aspect-[20/8]">
                                                <Image 
                                                className="object-contain"
                                                src={happyLaptop} 
                                                alt="Why aint there an image here?"
                                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                                ></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-orange-700 text-2xl font-bold">
                                                Front-end
                                            </h1>
                                            <p>
                                                React/TypeScript <br />
                                                Figma <br />
                                                JavaScript <br />
                                                SCSS <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-4"> 
                                            I have alot of experience with creating a functional website
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3 lg:mb-0 border-2 rounded-md border-orange-600 h-[90%] flex w-5/6 lg:w-1/4 h-full flex lg:flex-row flex-col flex-wrap justify-between items-start content-center text-center">
                                    <div className="w-full h-auto">
                                        <div className="flex w-full justify-center">
                                            <div className="flex p-3 aspect-[20/8]">
                                                <Image 
                                                className="object-contain"
                                                src={clipartServer} 
                                                alt="Why aint there an image here?"
                                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                                ></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-orange-700 text-2xl font-bold">
                                                Back-end
                                            </h1>
                                            <p>
                                                PostGres <br />
                                                PGAdmin4 <br />
                                                JavaScript <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-4"> 
                                            A pain in the ass but I know how to set one up and create end points
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3 lg:mb-0 border-2 rounded-md border-red-600 h-[80%] flex w-5/6 lg:w-1/4 h-full flex lg:flex-row flex-col flex-wrap justify-between items-start content-center text-center">
                                    <div className="w-full h-auto">
                                        <div className="flex w-full justify-center">
                                            <div className="flex p-3 aspect-[20/8]">
                                                <Image 
                                                className="object-contain"
                                                src={paintBrush} 
                                                alt="Why aint there an image here?"
                                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                                ></Image>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-orange-700 text-2xl font-bold">
                                                Other Skills
                                            </h1>
                                            <p>
                                            Figma <br />
                                            MSPaint <br />
                                            Pen and Paper <br />
                                            Whiteboard and post-it notes <br />
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-4">
                                            Design like a toddler and a bucket of paint, I can do functional though
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Want to see my skills in action Head over to:    <a href="/projects" className="text-purple-700 font-bold">My Projects</a></p>
                
                    </div>
                    
                </div>
                <div className="flex justify-center mt-2 p-6 bg-slate-900">
                    <div className="w-full lg:w-10/12 h-auto flex flex-col lg:flex-row justify-evenly">
                        <div className="flex flex-col justify-center text-center lg:text-start lg:justify-between w-full lg:w-6/12">
                            <h1 className="text-orange-700 text-2xl font-bold">
                                Outside Work
                            </h1>
                            
                            <p>
                                When I clock off I enjoy staying active, whether fishing, rock climbing, swimming, or just socialising with friends
                            </p>
                            <p>
                                When I am relaxing you&apos;ll find me researching new subjects to better my understanding of a programming language or learning new skills such as stitching, carpentry, cooking etc. 
                                </p>
                        </div>
                        
                            <div className="flex rounded-2xl w-7/12 lg:w-1/12 h-auto aspect-square">
                                <Image 
                                    className="object-cover"
                                    src={profileImage} 
                                    alt="Why aint there an image here?"
                                    style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                    >
                                </Image>
                           
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
                <Footer />
            </div>
        </>
    )
}