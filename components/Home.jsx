import AppProjectCard from "./ProjectCard";
import CowbellIcon from "../assets/cowbell_rounded.png"
import FeederAceIcon from "../assets/feederace_rounded.png"

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-between p-6 md:px-16 min-h-screen gap-10 md:gap-0">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About me</h1>
                <p className="text-xl md:text-2xl">
                    I am a second-year Computer Engineering student studying at the South Dakota
                    School of Mines and Technology. Confident in app development with frameworks
                    such as Flutter as well as embedded systems.
                </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-1/3 items-center md:items-end justify-center">
                <AppProjectCard
                    icon={CowbellIcon}
                    title="Cowbell"
                    description="An easy to use tool that makes herd management and task tracking easy for ranchers and others in the agricultural field."
                    delayClass="delay-250"
                    iosLink="https://apps.apple.com/ca/app/cowbell-herd-management/id6757620220"
                    androidLink="https://play.google.com/store/apps/details?id=com.dogbonee.cowbell&hl=en_US"
                />
                <AppProjectCard
                    icon={FeederAceIcon}
                    title="FeederAce"
                    description="A better way to control agricultural equipment such as feeders though the use of an intuitive controller, built with ease-of-use and affordability in mind."
                    delayClass="delay-750"
                    iosLink="https://apps.apple.com/us/app/feederace/id6757622878"
                    androidLink="https://play.google.com/store/apps/details?id=com.dogbonee.feederace&hl=en_US"
                />
            </div>
        </div>
    );
}