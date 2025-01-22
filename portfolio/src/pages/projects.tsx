import { useEffect } from "react";
import Button from "@/components/button";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Head from "next/head";
import React from "react";
import profileImage from "../../public/images/CoffeeLaptop.jpg"
import Image from "next/image";

export default function Projects(){

    return(
        
        <>
            <Head><title>Aiden&apos;s Portfolio</title>
                <meta name="description" content="Welcome to Aiden's portfolio. Discover projects, learn about Aiden, and get in touch!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');
                </style>
            </Head>
            
            <div className="bg-primary text-textLight min-h-screen">
                <NavBar />
                <div className="bg-slate-900 mt-2 flex flex-col lg:flex-row p-6 h-fit lg:h-[900px]">
                    <div className="flex flex-col justify-between h-auto w-full lg:w-2/3">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex w-5/6 lg:w-2/4 aspect-[20/8]">
                                <Image 
                                className="object-cover"
                                src={profileImage} 
                                alt="Why aint there an image here?"
                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                ></Image>
                            </div>
                            <div className="flex flex-col justify-between p-2">
                                <h1 className="text-2xl font-bold">AidenApp Project - Designed for gamers and streamers</h1>
                                <a className=" font-bold">git: aidenapp.git</a>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/4 justify-evenly mt-6 lg:mt-2">
                            <p className="text-sm ">Designed with React.js, Bootstrap, SCSS, Yarn, with a functional database signup/login, and other data storage with encrypted passwords and JWSToken system and functional endpoints. The backend server built with PostgreSQL and PGAdmin4 for easy data viewing and better control</p>
                            <p className="text-sm mt-4 lg:mt-1 ">This projects end goal is to bring gamers and streamers alike together, promote new friendships, grow fanbases for upcoming streamers and help introverts to join events with people with similar interests.</p>
                        </div>
                        <div className="flex w-3/4 h-96">
                            <Image 
                            className="object-cover"
                            src={profileImage} 
                            alt="Why aint there an image here?"
                            style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:flex hidden w-1/3 aspect-[13/16]">
                    <Image 
                        className="object-cover"
                        src={profileImage} 
                        alt="Why aint there an image here?"
                        style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                        ></Image>
                    </div>
                </div>
                <div className="bg-slate-900 mt-2 flex flex-col lg:flex-row p-6 h-fit lg:h-[900px]">
                    <div className="flex flex-col justify-between h-auto w-full lg:w-2/3">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex w-5/6 lg:w-2/4 aspect-[20/8]">
                                <Image 
                                className="object-cover"
                                src={profileImage} 
                                alt="Why aint there an image here?"
                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                ></Image>
                            </div>
                            <div className="flex flex-col justify-between p-2">
                                <h1 className="text-2xl font-bold">This portfolio page!</h1>
                                <a className=" font-bold">git: aidenportfolio.git</a>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/4 justify-evenly mt-6 lg:mt-2">
                            <p className="text-sm ">Designed with React.js, TailWind, SCSS, Next.js, a simple page promoting my skills and ability to learn new languages</p>
                            <p className="text-sm mt-4 lg:mt-1 ">This projects end goal is to get me hired, it also showcases and promotes my other projects (while being a reminder to myself that I have other tasks in development)</p>
                        </div>
                        <div className="flex w-3/4 h-96">
                            <Image 
                            className="object-cover"
                            src={profileImage} 
                            alt="Why aint there an image here?"
                            style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:flex hidden w-1/3 aspect-[13/16]">
                    <Image 
                        className="object-cover"
                        src={profileImage} 
                        alt="Why aint there an image here?"
                        style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                        ></Image>
                    </div>
                </div>
                <div className="bg-slate-900 mt-2 flex flex-row p-6 h-fit lg:h-[900px]">
                    <div className="flex flex-col justify-between h-auto w-full lg:w-2/3">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex w-5/6 lg:w-2/4 aspect-[20/8]">
                                <Image 
                                className="object-cover"
                                src={profileImage} 
                                alt="Why aint there an image here?"
                                style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                                ></Image>
                            </div>
                            <div className="flex flex-col justify-between p-2">
                                <h1 className="text-2xl font-bold">Some Unity Project</h1>
                                <a className=" font-bold">Not Started</a>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/4 justify-evenly mt-6 lg:mt-2">
                            <p className="text-sm ">Still in the planning stage, the game will feature multiple game modes, third/first person, stickmen, and a lot of funny buisness</p>
                            <p className="text-sm mt-4 lg:mt-1 ">I just want to make people laugh really</p>
                        </div>
                        <div className="flex w-3/4 h-96">
                            <Image 
                            className="object-cover"
                            src={profileImage} 
                            alt="Why aint there an image here?"
                            style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:flex hidden w-1/3 aspect-[13/16]">
                    <Image 
                        className="object-cover"
                        src={profileImage} 
                        alt="Why aint there an image here?"
                        style={{maxWidth:"100%", maxHeight:"100%", display:"flex"}}
                        ></Image>
                    </div>
                </div>
                

                <Footer />
            </div>
        </>
    )
}