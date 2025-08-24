import { ArrowDown } from "lucide-react"

export default function HeroSection() {
    return (
    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="gap-6">
                <h1 className="text-[min(10vw,70px)] font-bold tracking-tight">
                    <span>Hi, I'm</span>
                    <span className="text-primary"> John</span>
                    <span className="ml-2"> Le</span>
                </h1>

                <p className="text-[min(5vw,30px)] mx-auto">
                    I make stuff.
                </p>

                <div className="pt-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm opacity-85 mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
        </div>
    </section>
    )
}