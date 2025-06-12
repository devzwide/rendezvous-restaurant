import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const keyLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-4">
                <div className="flex items-center">
                <img 
                    src="/rendezvous_logo.png" 
                    alt="Rendezvous Restaurant" 
                    className="h-10 w-auto"
                />
                <span className="ml-4 text-lg font-semibold text-gray-800">Rendezvous Restaurant</span>
                </div>
                <p className="text-sm text-gray-600">
                A student-run training restaurant providing hands-on hospitality education at Durban University of Technology.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Quick Links
                </h3>
                <ul className="space-y-2">
                {keyLinks.map((link) => (
                    <li key={link.name}>
                    <a 
                        href={link.href} 
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Contact Us
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"></path>
                        </svg>
                        <p>S9, Level 4 Steve Biko Campus, Steve Biko Road, Durban, 4001</p>
                    </div>

                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                        </svg>
                        <a href="mailto:info@rendezvous.dut.ac.za" className="hover:text-gray-900 transition-colors">
                        info@rendezvous.dut.ac.za
                        </a>
                    </div>

                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                        </svg>
                        <a href="tel:+27311234567" className="hover:text-gray-900 transition-colors">
                        +27 31 373 2000
                        </a>
                    </div>
                </div>

                <div className="flex space-x-4 pt-2">
                <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-gray-700">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
                    <FaInstagram />
                </a>
                </div>
            </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            &copy; {currentYear} Durban University of Technology - Rendezvous Restaurant. All rights reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;