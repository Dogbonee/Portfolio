import Image from "next/image";
import {Link as ScrollLink} from "react-scroll"
import Socials from "@/components/Socials";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-xl font-bold font-mono tracking-tight flex items-center gap-0 text-foreground cursor-pointer"
                >
                    <Image
                        src="/dogbonee_logo.svg"
                        alt="Dogbonee Icon"
                        width={128}
                        height={128}
                        className="rounded-xl"
                    />
                    <span>Caleb Rickenbach</span>
                </ScrollLink>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <nav>
                        <ul className="flex gap-8 text-sm font-medium text-muted-foreground ">
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <ScrollLink to="home" smooth={true} duration={500} offset={-80}>Home</ScrollLink>
                            </li>
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <ScrollLink to="projects" smooth={true} duration={500}
                                            offset={-80}>Projects</ScrollLink>
                            </li>
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <ScrollLink to="skills" smooth={true} duration={500}
                                            offset={-80}>Skills</ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Socials/>
            </div>
        </header>
    )
}