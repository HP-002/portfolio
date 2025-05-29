import { useEffect, useState } from "react"
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import '../styles/app.css'

function App() {
    const sections = ["about", "education", "skills", "experiences", "projects", "contact"]
    const [activeSection, setActiveSection] = useState("about")

    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const aboutSection = document.getElementById("about");

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) observer.unobserve(aboutSection);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let current = sections[0];

            for (const id of sections) {
                const section = document.getElementById(id);
                const rect = section.getBoundingClientRect();

                if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= 0) {
                    current = id;
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    function toggleSidebar() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header isVisible={isVisible}/>
            <section className='flex bg-black'>
                <Sidebar
                    isOpen={isOpen}
                    toggleSidebar={toggleSidebar}
                    activeSection={activeSection}
                />
                <Body
                    isOpen={isOpen}
                />
            </section>
        </>
    )
}

export default App