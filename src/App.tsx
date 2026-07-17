// import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { TechMatrix } from './components/TechMatrix';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-28">
        <section id="about"><Hero /></section>
        <section id="projects"><ProjectsGrid /></section>
        <section id="skills"><TechMatrix /></section>
      </main>
      <Footer />
    </div>
  );
}