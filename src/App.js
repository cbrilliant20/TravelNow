import "./App.css"
import Feature from "./Components/Feature"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Services from "./Components/Services"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Services />
      <Footer />
    </div>
  )
}

export default App
