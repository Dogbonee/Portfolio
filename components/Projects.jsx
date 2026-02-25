"use client"

import {motion} from "framer-motion";
import {Card, CardContent, CardHeader} from "./ui/card";
import Link from "next/link";
import GithubIcon from "./Icons/GithubIcon"

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.4, ease: "easeOut"}
    }
};

export default function Projects() {
    return (
        <div className="container mx-auto mb-20 py-16 bg-muted/40">
            <h1 className="text-5xl font-bold p-10">Projects</h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
            >

                <motion.div variants={cardVariants}>
                    <Card className="max-w-full bg-transparent m-10">
                        <CardHeader className="text-2xl">
                            FeederAce
                        </CardHeader>
                        <CardContent>
                            FeederAce is a multi-device ecosystem comprising of both the FeederAce unit and the
                            FeederAce controller. The unit is used for controlling agricultural equipment through Bluetooth Low-Energy mode,
                            and is secure boot and flash encryption enabled, with signed OTA updates installable to the device
                            through the controller. The controller is a cross-platform Flutter application that connects to the
                            device and sends commands and updates to the unit.
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <div className="flex flex-col lg:flex-row items-center gap-30 m-10">
                        <div className="flex flex-col lg:flex-row items-center gap-5 m-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full lg:w-1/2 rounded-lg"
                            >
                                <source src="/videos/cowbell_demo_1.mp4" type="video/mp4" />
                            </video>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full lg:w-1/2 rounded-lg"
                            >
                                <source src="/videos/cowbell_demo_2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <Card className="max-w-full bg-transparent m-0">
                            <CardHeader className="text-2xl">
                                Cowbell
                            </CardHeader>
                            <CardContent>
                                Cowbell is a cross-flatform herd management tool built with Flutter. It utilizes Firebase as
                                a backend to perform secure authentication of users as well as act as a database to store
                                information needed for synchronization of data across devices. It also features a voice tool, which
                                leverages speech recognition as well as an LLM to process user queries to a serialized form to be
                                processed by the app. This allows for efficient and intuitive usage of app features.
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>


                <motion.div variants={cardVariants}>
                    <div className="flex flex-col lg:flex-row items-center gap-30 m-10">
                        <Card className="w-full lg:w-2/3 bg-transparent m-0">
                            <CardHeader className="text-2xl flex flex-row justify-between items-center">
                                <span>Dualie</span>
                                <Link
                                    href="https://github.com/Dogbonee/Dualie"
                                    target="_blank"
                                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors flex items-center justify-center"
                                >
                                    <GithubIcon className="w-5 h-5"/>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                Dualie is a 3DS homebrew library that serves as an abstraction from the native C libraries.
                                It utilizes OOP with RAII to take some of the complexity out of developing
                                3DS homebrew software, allowing those new to programming to start creating on the 3DS.
                            </CardContent>
                        </Card>

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full lg:w-1/3 rounded-lg"
                        >
                            <source src="/videos/dualie_demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>

                <motion.div variants={cardVariants}>
                    <div className="flex flex-col lg:flex-row items-center gap-30 m-10">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full lg:w-1/3 rounded-lg"
                        >
                            <source src="/videos/cmat_demo.mp4" type="video/mp4" />
                        </video>

                        <Card className="w-full lg:w-2/3 bg-transparent m-0">
                            <CardHeader className="text-2xl flex flex-row justify-between items-center">
                                <span>CMAT</span>
                                <Link
                                    href="https://github.com/Dogbonee/CMAT"
                                    target="_blank"
                                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors flex items-center justify-center"
                                >
                                    <GithubIcon className="w-5 h-5"/>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                CMAT is a tool for performing Reduced Row Echelon Form on complex matrices on the Ti84-Plus
                                CE. Since the Ti84-Plus CE only supports real matrices and there is little to no third party
                                software addressing this problem, this software was created to implement a crucial feature to the
                                calculator in a simple user interface.
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}