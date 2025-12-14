import ToggleTheme from "../components/ToggleTheme";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background-dark text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ToggleTheme />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />

            {/* Footer */}
            <Footer />

        </div>
    );
};