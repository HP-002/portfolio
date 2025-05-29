import { useEffect, useState } from "react"
// import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import '../styles/app.css'

function App() {
    const sections = ["about", "education", "skills", "experiences", "projects", "contact"]
    const [activeSection, setActiveSection] = useState("about")

    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
    const handleScroll = () => {
      let current = sections[0];

      for (const id of sections) {
        const section = document.getElementById(id);
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
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
            {/* <Header /> */}
            <section className='flex'>
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