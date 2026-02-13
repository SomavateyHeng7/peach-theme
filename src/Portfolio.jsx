import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function AnimatedBackground() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" wireframe />
      </mesh>
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

const projects = [
  {
    title: "3D Portfolio",
    description: "A personal portfolio with interactive 3D elements.",
    link: "#",
  },
  {
    title: "React Game",
    description: "A fun browser game built with React and Three.js.",
    link: "#",
  },
  {
    title: "Visualizer",
    description: "A data visualizer using Three.js and D3.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <AnimatedBackground />
        </Canvas>
      </div>
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur flex justify-center py-4 gap-8 text-lg font-semibold">
        <a href="#home" className="hover:text-blue-400 transition">Home</a>
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </nav>
      {/* Landing Section */}
      <header id="home" className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">Creative Developer & 3D Enthusiast</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </header>
      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-blue-100">
          Hi! I'm a passionate developer who loves building interactive web experiences with React and Three.js. I enjoy blending creativity and technology to make engaging digital products.
        </p>
      </section>
      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-100 mb-4">{project.description}</p>
              <a href={project.link} className="mt-auto text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded bg-gray-700 text-white placeholder:text-blue-100"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded bg-gray-700 text-white placeholder:text-blue-100"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded bg-gray-700 text-white placeholder:text-blue-100"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded mt-2"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="text-center py-8 text-blue-100">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
} 