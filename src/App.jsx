import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { ProjectList } from "./pages/ProjectsList"

function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/projects" element={<ProjectList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
