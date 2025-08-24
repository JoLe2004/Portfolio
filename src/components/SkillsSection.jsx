import { useState } from "react";
import { cn } from "../lib/utils"

const skills = [
    {name: "HTML/CSS", category: "frontend"},
    {name: "Javascript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},

    {name: "Python", category: "backend"},
    {name: "C", category: "backend"},
    {name: "Express.js", category: "backend"},
    {name: "MongoDB", category: "backend"},
    {name: "SQLite", category: "backend"},

    {name: "Git/Github", category: "tools"},
    {name: "Figma", category: "tools"}
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection(){
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[min(10vw,70px)] font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            onClick={() => setActiveCategory(category)}
                            key={key} 
                            className={cn("px-5 py-2 rounded-full transition-all duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-primary/20"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}