import React from "react";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/navbar";
import contactImg from "../../public/images/ContactLaptop.jpg"

export default function Contact(){

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
            <div className="bg-primary text-textLight h-svh">
                <NavBar />
                <div className="flex h-dvh mt-1 justify-end h-full">
                    <div className="h-3/4 w-full lg:w-9/12 xl:w-5/12 flex bg-slate-900 h-full p-2 lg:rounded-r-lg border-8 border-slate-900 absolute left-0 flex-col justify-center items-center">

                        <div className="flex flex-col justify-center text-center bg-slate-900 w-5/6 h-2/6 mt-1">
                            <div className="flex flex-col">
                                <h1>CONTACT ME</h1>
                            </div>
                            <div className="flex flex-col text-start w-full">
                                <div className="mt-4">
                                    <p className="ml-2">First Name</p>
                                    <input className="w-full lg:w-4/6 rounded-full bg-slate-300 text-black px-2 py-1"></input>
                                </div>
                                <div className="mt-4">
                                    <p className="ml-2">Last Name</p>
                                    <input className="w-full lg:w-4/6 rounded-full bg-slate-300 text-black px-2 py-1"></input>
                                </div>
                                <div className="mt-4">
                                    <p className="ml-2">Your Email</p>
                                    <input className="w-full rounded-full bg-slate-300 text-black px-2 py-1"></input>
                                </div>
                            </div>
                        </div>

                        <div className="flex bg-slate-900 border-t-slate-800 border-4 border-slate-900 h-4/6 w-full mt-3 justify-center items-center">
                            <div className="flex flex-col justify-center text-start bg-slate-900 h-full w-5/6 mt-1">
                                <div>
                                    <p className="ml-2">Subject</p>
                                    <input className="w-full rounded-full bg-slate-300 text-black px-2 py-1"></input>
                                </div>
                                <div className="h-4/6 mt-4">
                                    <p className="ml-2">Body</p>
                                    <input className="w-full rounded-lg bg-slate-300 text-black px-2 h-5/6"></input>
                                </div>
                                <div className="text-center">
                                    <button className="rounded-full bg-sky-500 w-4/6 px-3 py-3">SUBMIT</button>
                                </div>
                            </div>    
                        </div>

                    </div>
                    <div className=" flex rounded-2xl h-0 lg:h-full w-0 lg:w-4/12 xl:w-8/12">
                        <Image 
                        className="object-cover"
                        src={contactImg} 
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