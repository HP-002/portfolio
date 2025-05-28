import { useState } from "react"
// import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import '../styles/app.css'

function App() {
    const [isOpen, setIsOpen] = useState(false)

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
                />
                <Body 
                    isOpen={isOpen}
                />
            </section>
        </>
    )
}

export default App