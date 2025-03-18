import AboutSection from "./components/AboutSection";
import IndustriesSection from "./components/IndustriesSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import bgImage from './assets/image.jpg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Background sec starts */}
      <section 
        className="block md:hidden bg-cover bg-center py-6"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        <div className="grid grid-cols-2 gap-4 px-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">15,000+</h3>
            <p className="text-sm text-gray-600">Transaction Handheld Terminals Deployed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">4,000+</h3>
            <p className="text-sm text-gray-600">Clients Served</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">2,100+</h3>
            <p className="text-sm text-gray-600">Crore Money Securely Transacted</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">19+</h3>
            <p className="text-sm text-gray-600">Industry Specific Solutions Developed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">20+</h3>
            <p className="text-sm text-gray-600">Years of Rich Industry Experience</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-blue-700">4,000+</h3>
            <p className="text-sm text-gray-600">State-of-the-Art Facilities</p>
          </div>
        </div>
      </section>
      {/* Background sec ends */}

      <AboutSection />
      <IndustriesSection />
      <Footer />
    </>
  );
}

export default App;
