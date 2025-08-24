const projects = [
    {
        id: 1,
        title: "Color Generator",
        description: "A color generator app using Express.js, HTML/CSS, Javascript, and MongoDB",
        image: "/projects/project1.png",
        tags: ["Express.js", "HTML/CSS", "Javascript", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export default function ProjectsSection() {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-[min(10vw,70px)] font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                Check out some of my projects!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full">{tag}</span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-center gap-4">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        Github
                                    </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="" target="_blank" className="cosmic-button w-fit flex  mx-auto items-center gap-2">
                    Check My Github
                </a>
            </div>
        </div>
    </section>
}