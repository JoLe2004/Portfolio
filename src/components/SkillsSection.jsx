import { useState } from "react";
import { cn } from "../lib/utils"

const skills = [
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind", category: "frontend" },

    { name: "Python", category: "backend" },
    { name: "GDScript", category: "backend" },
    { name: "C", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "SQLite", category: "backend" },

    { name: "Git/Github", category: "tools" },
    { name: "Aseprite", category: "tools" },
    { name: "Figma", category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    const categoryButtonElements = categories.map((category, i) => (
        <button key={i} onClick={() => setActiveCategory(category)}
            className={cn("px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-primary/20"
            )}>
            {category}
        </button>
    ))

    const skillElements = filteredSkills.map((skill, key) => (
        <div key={key} className="w-[120px] p-4 rounded-[8px] shadow-xs text-center bg-card">
            <div className="">
                <span className="font-semibold text-lg">{skill.name}</span>
            </div>
        </div>
    ))

    return (
        <section id="skills" className="relative my-24 mx-4">
            <div className="relative mx-auto max-w-5xl border-4 rounded-2xl bg-container-bg overflow-hidden">
                <h2 className="text-[50px] lg:text-[70px] text-center">
                    Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4 m-8">
                    {categoryButtonElements}
                </div>

                <div className="flex flex-wrap justify-center p-6 gap-4">
                    {skillElements}
                </div>
            </div>
        </section>
    )
}