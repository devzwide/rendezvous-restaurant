import { Button } from "@headlessui/react";

const Hero = () => {
  return (
   <section className="relative w-screen h-[90vh] max-h-[800px] min-h-[500px] overflow-hidden flex flex-col lg:flex-row">
      <div className="flex flex-1 items-center justify-center px-6 py-12 lg:py-0 bg-white/60 lg:bg-transparent z-10">
        <div className="max-w-2xl space-y-6 text-center lg:text-left text-gray-900">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl drop-shadow-lg">
            Welcome to Rendezvous Restaurant
          </h1>
          <p className="text-xl sm:text-2xl drop-shadow">
            A student-run dining experience at DUT's Steve Biko Campus
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Button
              as="a"
              href="/menu"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View This Week's Menu
            </Button>
            <a 
                href="/auth" 
                className="hidden md:inline-flex items-center text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600 focus:outline-none focus:text-gray-600" 
            >
                Join Us Today
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex-1 h-64 lg:h-auto">
        <img
          src="/restaurant-interior.jpg"
          alt="Rendezvous Restaurant interior"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Optional overlay for better text contrast on small screens */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
      </div>
    </section>
  )
}

export default Hero