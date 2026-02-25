import CowbellIcon from "../assets/cowbell_rounded.png"
import FeederAceIcon from "../assets/feederace_rounded.png"
import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";


export function CowbellCard() {
    return (
        <Card className="w-full max-w-md animate-in fade-in duration-1000 delay-250 ease-in-out fill-mode-[both]">
            <CardHeader>
                <div className="flex flex-row items-center gap-4 mb-2">
                    <Image
                        src={CowbellIcon}
                        alt="Cowbell icon"
                        width={64}
                        height={64}
                        className="rounded-xl"
                    />
                    <CardTitle className="text-xl">Cowbell</CardTitle>
                </div>

                <CardDescription>
                    An easy to use tool that makes herd management and task tracking easy for ranchers and others in
                    the agricultural field.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col items-start gap-3">
                <div className="text-xs font-extrabold text-white uppercase tracking-wide">
                    Available on iOS & Android
                </div>

                <div className="flex flex-row gap-3">
                    <Link
                        href="https://apps.apple.com/ca/app/cowbell-herd-management/id6757620220"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                            alt="Download on the App Store"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.dogbonee.cowbell&hl=en_US"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            width={135}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}


export function FeederAceCard() {
    return (
        <Card className="w-full max-w-md animate-in fade-in duration-1000 delay-750 ease-in-out fill-mode-[both]">
            <CardHeader>
                <div className="flex flex-row items-center gap-4 mb-2">
                    <Image
                        src={FeederAceIcon}
                        alt="FeederAce icon"
                        width={64}
                        height={64}
                        className="rounded-xl"
                    />
                    <CardTitle className="text-xl">FeederAce</CardTitle>
                </div>
                <CardDescription>
                    A better way to control agricultural equipment such as feeders though the use of an
                    intuitive controller, built with ease-of-use and affordability in mind.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col items-start gap-3">
                <div className="text-xs font-extrabold text-white uppercase tracking-wide">
                    Available on iOS & Android
                </div>

                <div className="flex flex-row gap-3">
                    <Link
                        href="https://apps.apple.com/us/app/feederace/id6757622878"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                            alt="Download on the App Store"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <Link
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            width={135}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}