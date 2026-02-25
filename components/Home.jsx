import {CowbellCard, FeederAceCard} from "./ProjectCard";


export default function Home() {
    return <div className="flex flex-row justify-between p-10 min-h-screen">
        <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl font-bold">About me</h1>
            <p className="text-2xl">I am a second-year Computer Engineering studying at the South Dakota
                School of Mines and Technology. Confident in app development with frameworks
                such as Flutter as well as embedded systems.</p>
        </div>

        <div className="flex flex-col gap-4 w-1/3">
            <CowbellCard/>
            <FeederAceCard/>
        </div>

    </div>
}