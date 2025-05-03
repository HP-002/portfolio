import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import '../styles/app.css'

function App() {
    return (
        <>
            <Header />
            <section className="main">
                <Sidebar />
                <Body />
            </section>
        </>
    )
}

export default App
