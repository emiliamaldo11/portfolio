import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div
        className="h-8 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #FE6225 0px, #FE6225 32px, #FFB7DD 32px, #FFB7DD 64px)',
        }}
      />
      <HowIWork />
      <FeaturedProject />
      <div
        className="h-8 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #FE6225 0px, #FE6225 32px, #FFB7DD 32px, #FFB7DD 64px)',
        }}
      />
      <Projects />
      <Skills />
      <About />
       <div
        className="h-8 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #FE6225 0px, #FE6225 32px, #FFB7DD 32px, #FFB7DD 64px)',
        }}
      />
      <Contact />
      <Footer />
    </div>
  )
}
