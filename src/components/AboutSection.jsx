
export default function AboutSection() {
    return (
        <section id="about" className="relative py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[min(10vw,70px)] font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Software Developer</h3>
                        <p>Stuff about stuff</p>
                        <p>More stuff</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg:primary/10 transition-all duration-300">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}