"use client"
import ResumeIcon from "@/components/Icons/ResumeIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon"
import GlowIcon from "@/components/GlowIcon";



export default function Socials() {
    return (
        <div className="flex gap-8 p-8 justify-center">
            <GlowIcon href="/resume.pdf">
                <ResumeIcon className="w-8 h-8" />
            </GlowIcon>

            <GlowIcon href="https://github.com/Dogbonee">
                <GithubIcon className="w-8 h-8" />
            </GlowIcon>

            <GlowIcon href="https://www.linkedin.com/in/caleb-rickenbach-b78b0532a">
                <LinkedinIcon className="w-8 h-8" />
            </GlowIcon>

        </div>
    )
}