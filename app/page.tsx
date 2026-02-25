"use client"

import { motion } from "framer-motion";
import Navbar from "@/components/Mainbar";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer"
import {Element as ScrollElement} from "react-scroll";

export default function Page() {
    return (
        <>
            <Navbar />
            <ScrollElement name="home">
            <motion.section
                id="home"
                className="scroll-mt-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Home/>
            </motion.section>
            </ScrollElement>

            <ScrollElement name="projects">
            <motion.section
                id="projects"
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Projects/>
            </motion.section>
                </ScrollElement>

            <ScrollElement name="skills">
                <motion.section
                    id="skills"
                    className="scroll-mt-24"
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Skills/>
                </motion.section>
            </ScrollElement>
            <Footer/>
        </>
    );
}