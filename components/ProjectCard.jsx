import {Card, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

export default function AppProjectCard({ icon, title, description, delayClass, iosLink, androidLink }) {
    return (
        <Card className={`w-full max-w-md animate-in fade-in ease-in-out fill-mode-[both] duration-1000 ${delayClass}`}>
            <CardHeader>
                <div className="flex flex-row items-center gap-4 mb-2">
                    <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={64}
                        height={64}
                        className="rounded-xl"
                    />
                    <CardTitle className="text-xl">{title}</CardTitle>
                </div>

                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col items-start gap-3">
                <div className="text-xs font-extrabold text-white uppercase tracking-wide">
                    Available on iOS & Android
                </div>

                <div className="flex flex-row gap-3">
                    <Link
                        href={iosLink}
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
                        href={androidLink}
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