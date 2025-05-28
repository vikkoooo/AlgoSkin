export default function LandingPage() {
	return (
		<div className="min-h-screen bg-[#0a0a20] text-white overflow-hidden relative">
			{/* Main content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
				<div className="text-center max-w-4xl mx-auto">
					{/* Company name */}
					<h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
						<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ALGOSKIN</span>
					</h1>
					<div className="text-xl md:text-2xl font-light tracking-[0.3em] text-gray-300 mb-12">SOLUTION</div>

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

				{/* Contact section - moved up with fixed alignment */}
				<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
					<a
						href="mailto:viktor@lundberg.ai"
						className="text-sm tracking-wider text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-mono"
					>
						viktor@lundberg.ai
					</a>
				</div>
			</div>

			{/* World Map Visualization */}
			<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
				<WorldMap />
			</div>

			{/* Neural Network Visualization */}
			<div className="absolute inset-0 opacity-15 pointer-events-none">
				<NeuralNetwork />
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

function NeuralNetwork() {
	const nodes = [
		// Left column (input layer)
		{ x: 15, y: 20, size: 4 },
		{ x: 15, y: 35, size: 4 },
		{ x: 15, y: 50, size: 4 },
		{ x: 15, y: 65, size: 4 },
		{ x: 15, y: 80, size: 4 },

		// Middle-left column (hidden layer 1)
		{ x: 35, y: 25, size: 5 },
		{ x: 35, y: 40, size: 5 },
		{ x: 35, y: 55, size: 5 },
		{ x: 35, y: 70, size: 5 },

		// Middle-right column (hidden layer 2)
		{ x: 65, y: 30, size: 5 },
		{ x: 65, y: 45, size: 5 },
		{ x: 65, y: 60, size: 5 },

		// Right column (output layer)
		{ x: 85, y: 40, size: 6 },
		{ x: 85, y: 55, size: 6 },
	]

	const connections = [
		// Input to hidden layer 1
		{ from: 0, to: 5 },
		{ from: 0, to: 6 },
		{ from: 0, to: 7 },
		{ from: 1, to: 5 },
		{ from: 1, to: 6 },
		{ from: 1, to: 7 },
		{ from: 1, to: 8 },
		{ from: 2, to: 5 },
		{ from: 2, to: 6 },
		{ from: 2, to: 7 },
		{ from: 2, to: 8 },
		{ from: 3, to: 6 },
		{ from: 3, to: 7 },
		{ from: 3, to: 8 },
		{ from: 4, to: 7 },
		{ from: 4, to: 8 },

		// Hidden layer 1 to hidden layer 2
		{ from: 5, to: 9 },
		{ from: 5, to: 10 },
		{ from: 6, to: 9 },
		{ from: 6, to: 10 },
		{ from: 6, to: 11 },
		{ from: 7, to: 9 },
		{ from: 7, to: 10 },
		{ from: 7, to: 11 },
		{ from: 8, to: 10 },
		{ from: 8, to: 11 },

		// Hidden layer 2 to output
		{ from: 9, to: 12 },
		{ from: 9, to: 13 },
		{ from: 10, to: 12 },
		{ from: 10, to: 13 },
		{ from: 11, to: 12 },
		{ from: 11, to: 13 },
	]

	return (
		<div className="w-full h-full relative">
			<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
				{/* Render connections first (behind nodes) */}
				{connections.map((connection, i) => {
					const fromNode = nodes[connection.from]
					const toNode = nodes[connection.to]
					const opacity = Math.random() * 0.3 + 0.1

					return (
						<line
							key={i}
							x1={fromNode.x}
							y1={fromNode.y}
							x2={toNode.x}
							y2={toNode.y}
							stroke="cyan"
							strokeWidth="0.2"
							opacity={opacity}
							className="animate-pulse"
							style={{
								animationDelay: `${Math.random() * 3}s`,
								animationDuration: `${2 + Math.random() * 2}s`,
							}}
						/>
					)
				})}

				{/* Render nodes */}
				{nodes.map((node, i) => (
					<circle
						key={i}
						cx={node.x}
						cy={node.y}
						r={node.size / 4}
						fill="cyan"
						opacity={0.6}
						className="animate-pulse"
						style={{
							animationDelay: `${Math.random() * 2}s`,
							animationDuration: `${1.5 + Math.random() * 1.5}s`,
						}}
					/>
				))}

				{/* Add some data flow particles */}
				{Array.from({ length: 8 }).map((_, i) => (
					<circle
						key={`particle-${i}`}
						r="0.5"
						fill="purple"
						opacity="0.8"
						className="animate-pulse"
						style={{
							animationDelay: `${i * 0.5}s`,
							animationDuration: "2s",
						}}
					>
						<animateMotion dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" begin={`${i * 0.3}s`}>
							<path
								d={`M ${15 + Math.random() * 5} ${20 + Math.random() * 60} L ${80 + Math.random() * 5} ${40 + Math.random() * 20}`}
							/>
						</animateMotion>
					</circle>
				))}
			</svg>
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
