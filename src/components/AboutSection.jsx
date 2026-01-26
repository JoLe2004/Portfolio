import ResumeViewer from "./ResumeViewer"

export default function AboutSection() {
    return (
        <section id="about" className="relative my-24 mx-4 fadeInUp">
            <div className="relative mx-auto max-w-5xl border-4 rounded-2xl bg-container-bg overflow-hidden">
                <div className="relative h-64">
                    <img src="/pictures/banner.png" alt="Banner" className="w-full h-full bg-cover" />
                    <div className="absolute -bottom-px w-full h-12 bg-gradient-to-t from-container-bg to-transparent"></div>
                </div>
                <div className="flex items-center px-6 py-4">
                    <div className="mr-4 w-20 shrink-0 rounded-[50%] border-2 overflow-hidden">
                        <img src="/pictures/profile.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-[24px] px-4">
                        <span>Hey, I'm John.👋</span>
                        <p className="text-[16px]">Software and Game Developer</p>
                    </h2>
                </div>
                <div className="flex flex-col gap-4 p-6">
                    <p>
                        I am currently a student at Grand Valley State University majoring in Computer Science with a minor in Math.
                        I am most familiar with frontend development with some experience in backend development.

                    </p>
                    <p>
                        My short-term goals include graduating and getting an internship/job in the software or web development field.
                        In the long-term, I hope to continue learning new skills that will help me in my career. I also hope
                        to make release my own videogame one day. My hobbies include cooking, playing videogames, and developing!
                    </p>
                    <p>
                        Currently working on this portfolio and making it more interactive, the website for Wayfarers, and the Wayfarers game itself!
                    </p>
                    <div className="m-auto"><ResumeViewer /></div>
                </div>
            </div>
        </section>
    )
}