const projects = [
    {
        id: 1,
        title: "Color Generator",
        description: "A color generator app using Express.js, HTML/CSS, Javascript, and MongoDB",
        image: "/projects/color-generator.png",
        tags: ["Express.js", "HTML/CSS", "JavaScript", "MongoDB"],
        link: "https://palettable.onrender.com/",
        githubUrl: "https://github.com/JoLe2004/Color-Generator"
    },
    {
        id: 2,
        title: "Weather Widget",
        description: "A weather widget desktop app using ElectronJS, React, and Tailwind",
        image: "/projects/weather-widget.png",
        tags: ["ElectronJS", "HTML/CSS", "React", "Tailwind"],
        link: "",
        githubUrl: "https://github.com/JoLe2004/Weather-Widget"
    },
    {
        id: 3,
        title: "Wayfarers Website",
        description: "A website for my game, Wayfarers. Currently in development.",
        image: "/projects/wayfarers-website.png",
        tags: ["JavaScript", "HTML/CSS"],
        link: "https://wayfarers-game.netlify.app/",
        githubUrl: "https://github.com/JoLe2004/Wayfarers-Website"
    },
    {
        id: 4,
        title: "Wayfarers",
        description: "My game, Wayfarers. Currently in development. Public repository (for now).",
        image: "/projects/wayfarers.png",
        tags: ["Godot", "GDScript", "Aseprite", "Blender"],
        link: "",
        githubUrl: "https://github.com/JoLe2004/Wayfarers"
    },
    {
        id: 5,
        title: "Showdown Statistics",
        description: "Usage statistics from popular Pokémon battle simulator Showdown, cleanly formatted!",
        image: "/projects/showdown-stats.png",
        tags: ["React", "Tailwind", "Vite", "Python"],
        link: "https://showdownstats.netlify.app/",
        githubUrl: "https://github.com/JoLe2004/ShowdownStats"
    }
]

export default function ProjectsSection() {
    const projectElements = projects.map((project, i) => (
        <div key={i} className="bg-card rounded-lg border-2 overflow-hidden shadow-xs group">
            <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
                <div className="h-18">
                    <div className="grid grid-cols-3 gap-2">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="p-1 text-xs text-center font-medium border rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="h-32">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex justify-center gap-4">
                    {project.link &&
                        <div className="w-20 p-1 text-center border rounded-full bg-background/60 hover:bg-background/80 transition-colors duration-300">
                            <a href={project.link} target="_blank" className="text-foreground/80">
                                Link
                            </a>
                        </div>
                    }
                    {project.githubUrl &&
                        <div className="w-20 p-1 text-center border rounded-full bg-background/60 hover:bg-background/80 transition-colors duration-300">
                            <a href={project.githubUrl} target="_blank" className="text-foreground/80">
                                Github
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    ))

    return <section id="projects" className="relative my-24 mx-4 fadeInUp">
        <div className="relative mx-auto max-w-5xl border-4 rounded-2xl bg-container-bg overflow-hidden">
            <h2 className="text-[50px] lg:text-[70px] font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-foreground text-2xl font-semibold max-w-2xl m-auto">
                Check out some of my projects!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
                {projectElements}
            </div>
            <div className="w-36 m-auto px-6 py-2 mb-6 rounded-full border border-primary text-primary text-center cursor-pointer">
                <a href="https://github.com/JoLe2004" target="_blank">
                    My Github
                </a>
            </div>
        </div>
    </section>
}