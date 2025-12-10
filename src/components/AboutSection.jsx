import ResumeViewer from "./ResumeViewer"

export default function AboutSection() {
    return (
        <section id="about" className="relative py-24 px-4">
            <div className="container mx-auto py-8 max-w-5xl border-4 rounded-2xl bg-container-bg">
                <h2 className="text-[min(10vw,70px)] font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Software/Web Developer</h3>
                        <p>
                            I am currently a student at Grand Valley State University majoring in Computer Science with a minor in Math, and I'm expected to graduate in Fall of 2026.
                            Some of the classes I have taken include Web Application Programming, Mobile Application Development, and Secure Software Engineering, giving me the tools
                            and skills I need to succeed as software developer. My hobbies include cooking, playing videogames, and traveling. 
                        </p>
                        <p>
                            My short-term goals include graduating and getting an internship/job in the software or web development field. In the long-term, however, I hope to continue learning
                            new skills that will help me in my career. I also hope to dabble in videogame development and maybe make my own game one day.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                            <a href="#contact" className="special-button w-36">Get In Touch</a>
                            <ResumeViewer />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
