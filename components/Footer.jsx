import { Mail } from "lucide-react"
import GlowIcon from "./GlowIcon"

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 py-8 px-4 md:px-8 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-center md:text-left">
                    <p className="text-sm text-foreground font-medium">
                        © 2026 Caleb Rickenbach. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Building secure embedded systems and modern applications.
                    </p>
                </div>

                <GlowIcon href="mailto:ccbach57@gmail.com" baseScale={0.9} hoverScale={1.1}>
                    <Mail className="w-8 h-8" />
                </GlowIcon>

            </div>
        </footer>
    )
}