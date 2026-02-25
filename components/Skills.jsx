import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Skills() {
    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Card className="hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md border-border/50">
                        <CardHeader className="pb-3 border-b border-border/50 mb-4">
                            <CardTitle className="text-lg text-primary">Embedded & Hardware</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                                <li>C++ & Rust</li>
                                <li>Firmware Development</li>
                                <li>Secure Systems</li>
                                <li>Real-Time Operating Systems</li>
                                <li></li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md border-border/50">
                        <CardHeader className="pb-3 border-b border-border/50 mb-4">
                            <CardTitle className="text-lg text-primary">Mobile & App</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                                <li>Dart & Flutter</li>
                                <li>Firebase</li>
                                <li>Cross-Platform Development</li>
                                <li>IoT Integration</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md border-border/50">
                        <CardHeader className="pb-3 border-b border-border/50 mb-4">
                            <CardTitle className="text-lg text-primary">Web & Backend</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                                <li>JavaScript & Node.js</li>
                                <li>React & Angular</li>
                                <li>MongoDB</li>
                                <li>Python, Java, C#</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:-translate-y-1 transition-transform duration-200 shadow-sm hover:shadow-md border-border/50">
                        <CardHeader className="pb-3 border-b border-border/50 mb-4">
                            <CardTitle className="text-lg text-primary">Security & Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                                <li>Hardware Vulnerability Mitigation</li>
                                <li>Memory Corruption Mitigation</li>
                                <li>Cryptography</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}