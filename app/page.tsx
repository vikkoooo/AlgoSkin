import { Mail } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a20] text-white overflow-hidden relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border border-cyan-400 rotate-45 transform"></div>
          <span className="text-sm tracking-widest">LUNDBERG AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">
            SOLUTIONS
          </a>
          <a href="#" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Company name */}
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">LUNDBERG</span>
          </h1>
          <div className="text-xl md:text-2xl font-light tracking-[0.3em] text-gray-300 mb-12">AI SOLUTIONS</div>

          {/* Updated tagline */}
          <p className="text-lg md:text-xl font-light text-gray-300 tracking-wide mb-16">
            Automated. Intelligent. Profitable.
          </p>

          {/* Money symbols */}
          <div className="flex justify-center items-center space-x-8 mb-16 text-4xl md:text-6xl">
            <span className="text-cyan-400 animate-pulse">$</span>
            <span className="text-purple-400 animate-pulse delay-500">$</span>
            <span className="text-cyan-400 animate-pulse delay-1000">$</span>
          </div>
        </div>

        {/* Contact section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:viktor@lundberg.ai"
              className="text-sm tracking-wider hover:text-cyan-400 transition-colors duration-300"
            >
              VIKTOR@LUNDBERG.AI
            </a>
          </div>
        </div>
      </div>

      {/* World Map Visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <WorldMap />
      </div>

      {/* Geometric Diamond Element */}
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none">
        <Diamond />
      </div>
    </div>
  )
}

function WorldMap() {
  return (
    <div className="w-full h-full absolute inset-0">
      {/* Generate dots for world map that cover the entire screen */}
      {Array.from({ length: 800 }).map((_, i) => {
        const size = Math.random() * 3 + 0.5
        const top = Math.random() * 100
        const left = Math.random() * 100

        // Create natural fading based on distance from center
        const centerX = 50
        const centerY = 50
        const distanceFromCenter = Math.sqrt(Math.pow(left - centerX, 2) + Math.pow(top - centerY, 2))
        const maxDistance = Math.sqrt(Math.pow(50, 2) + Math.pow(50, 2))
        const fadeOpacity = Math.max(0.1, 1 - (distanceFromCenter / maxDistance) * 1.5)

        const finalOpacity = fadeOpacity * (Math.random() * 0.6 + 0.2)

        return (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              opacity: finalOpacity,
            }}
          />
        )
      })}
    </div>
  )
}

function Diamond() {
  return (
    <div className="relative w-full h-full">
      {/* Diamond wireframe */}
      <div className="absolute inset-0 border-2 border-yellow-500 transform rotate-45"></div>
      <div className="absolute inset-0 border-2 border-yellow-500 transform rotate-[135deg]"></div>
      <div className="absolute inset-0 border-2 border-yellow-500 transform rotate-[225deg]"></div>
      <div className="absolute inset-0 border-2 border-yellow-500 transform rotate-[315deg]"></div>

      {/* Holographic accents */}
      <div className="absolute top-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 opacity-50 transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-1/4 right-1/4 h-1/4 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 opacity-50 transform skew-x-12"></div>
    </div>
  )
}
