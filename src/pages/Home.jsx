import ToggleTheme from "../components/ToggleTheme";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
    return (
        <div className="min-h-screen bg-background-dark text-foreground">
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