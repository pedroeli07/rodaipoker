import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, FAQ, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Navbar */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>

        {/* Hero Section with its own 3D context */}
        <div className='relative z-0'>
          <Hero />
        </div>

        {/* Main Content with shared StarsCanvas */}
        <div className='relative z-0'>
          <div className='relative z-0'>
            <About />
            <Experience />
            <Tech />
            <Works />
          </div>
          <StarsCanvas />
        </div>

        {/* Testimonials and Contact with separate StarsCanvas */}
        <div className='relative z-0'>
          <div className='relative z-0'>
            <Feedbacks />
            <FAQ />
            <Contact />
          </div>
          <StarsCanvas />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;