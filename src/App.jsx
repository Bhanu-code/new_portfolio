
import Navbar from "./components/Navbar"
import Heropage from "./components/Heropage"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Expsection from "./components/Expsection"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Heropage />
      <Experience />
      <Projects />
      <Expsection />
      <Footer />
    </div>
  )
}

export default App
