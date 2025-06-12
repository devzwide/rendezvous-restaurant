import { Popover, PopoverButton, PopoverPanel, Button, Dialog } from "@headlessui/react";
import { useState } from "react";

const navLinks = [
    { 
        id: 1,
        name: "Home", 
        href: "/", 
        description: "Go back to the homepage and see what we're about." 
    },
    { 
        id: 2,
        name: "About", 
        href: "#", 
        description: "Learn more about us, our journey, and the people behind it.",
        dropdown: [
        { 
            id: 21,
            name: "Our Story", 
            href: "/about", 
            description: "Discover how we started and what drives us forward." 
        },
        { 
            id: 22,
            name: "Meet the Team", 
            href: "/team", 
            description: "Get to know the amazing people behind the scenes." 
        },
        { 
            id: 23,
            name: "Student Experience", 
            href: "/experience", 
            description: "See what life is like for the students who are part of our community." 
        }
        ]
    },
    { 
        id: 3,
        name: "Menu", 
        href: "/menu", 
        description: "Check out what's on our menu – food, drinks, and more." 
    },
    { 
        id: 4,
        name: "Events", 
        href: "/events", 
        description: "Stay in the loop with our latest and upcoming events." 
    },
    { 
        id: 5,
        name: "Gallery", 
        href: "/gallery", 
        description: "Browse through photos and memories from our community." 
    },
    { 
        id: 6,
        name: "Contact", 
        href: "/contact", 
        description: "Have questions or feedback? Reach out to us here." 
    }
];

const Header = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="/" className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded">
                            <img 
                                src="/rendezvous_logo.png" 
                                alt="Rendezvous Restaurant" 
                                className="h-12 w-auto"
                                width="auto" 
                                height="48"
                            />
                        </a>
                    </div>

                    <nav className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        <ul className="hidden md:flex items-center gap-6">
                            {
                                navLinks.map((link) => {
                                    if (link.name == "About") {
                                        return (
                                            <Popover key={link.name} className="relative">
                                                <PopoverButton className={`flex items-center gap-1 text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600 focus:outline-none ${open ? 'text-gray-600' : ''}`}>{link.name}</PopoverButton>
                                                <PopoverPanel transition anchor="button" className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0">
                                                    {
                                                        link.dropdown.map((item) => (
                                                            <div key={item.name} className="p-3 bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                                                                <a href={item.href} className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" >
                                                                    <p className="font-semibold">{item.name}</p>
                                                                    <p className="text-gray-500">{item.description}</p>
                                                                </a>
                                                            </div>
                                                        ))
                                                    }
                                                </PopoverPanel>
                                            </Popover> 
                                        )
                                    } else {
                                        return (
                                            <li key={link.name}>
                                                <a href={link.href} className="text-sm/6 font-semibold text-gray-900">{link.name}</a>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>

                        <div className="flex items-center gap-4">
                            <Button onClick={() => setPopupOpen(true)} className="hidden md:inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Book A Table</Button>
                            <Dialog  open={isPopupOpen} onClose={() => setPopupOpen(false)} className="relative divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 z-50">
                                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                                <div className="fixed inset-0 flex items-center justify-center p-4">
                                    <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
                                        <Dialog.Title className="text-lg font-bold mb-4">Book A Table</Dialog.Title>
                                        {/* <Reservation /> */}
                                        <Button onClick={() => setPopupOpen(false)} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Close</Button>
                                    </Dialog.Panel>
                                </div>
                            </Dialog>
                            <a href="/auth" className="hidden md:inline-flex items-center text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600 focus:outline-none focus:text-gray-600">
                                Log in
                                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;