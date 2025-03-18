import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/Logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1C84C6] relative z-50">

      {/* Angled Logo Section */}
      <div className="absolute left-0 top-0 h-full w-64 bg-white clip-path-custom flex items-center pl-4 z-10">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="w-32 h-14 object-contain" 
        />
      </div>

      <div className="flex flex-1 justify-center items-center ml-64 z-20">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-medium items-center">
          {['Home', 'About us', 'Products', 'Solution'].map((item, idx) => (
            <li 
              key={idx} 
              className="relative cursor-pointer group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#1CC1F2] transition-all duration-300 ease-in-out group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex items-center z-20">
        <button className="bg-[#1CC1F2] text-white px-4 py-2 rounded hover:bg-[#17b1e0]">Contact us</button>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden z-50 ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-white shadow-md w-48 p-4 rounded-lg md:hidden space-y-4 z-30">
          {['Home', 'About us', 'Products', 'Solution'].map((item, idx) => (
            <li 
              key={idx} 
              className="list-none text-blue-800 hover:text-blue-500 cursor-pointer"
            >
              {item}
            </li>
          ))}
          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Contact us</button>
        </div>
      )}
    </nav>
  );
}
