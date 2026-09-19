import React from "react";
import Footer from "./common/Footer";
import P1 from "../assets/bulk mail.jpg";
import P2 from "../assets/car database.jpg"
import P3 from "../assets/netflix clone.jpg"

const projects = [
  {
    title: "BulkMail",
    type: "Full Stack",
    description: "A bulk email application built with React, Tailwind CSS, Node.js, Express, MongoDB and Nodemailer.",
    stack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    image: "/assets/p2.png"
  },
  {
    title: "Database Project",
    type: "MERN",
    description: "A full-stack CRUD application connected to MongoDB, with a deployed frontend and backend architecture.",
    stack: ["React", "Express", "MongoDB"],
    image: "/assets/p2.png",
  },
  {
    title: "Netflix Clone",
    type: "Full Stack",
    description: "A Netflix-inspired interface demonstrating React frontend development and API-backed features.",
    stack: ["React", "JavaScript", "Node", "Express"],
    image: "/assets/p3.png",
  },
];

function Projects() {
  return (
    <div className="page-shell py-16">
      <div className="max-w-3xl">
        <span className="section-label">Selected work</span>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-50 md:text-7xl">
          Projects that <span className="text-orange-400">ship.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
          A collection of my frontend and full-stack work. Open the GitHub profile to explore my repositories and source code.
        </p>
        <a
          href="https://github.com/riyazind777-droid"
          target="_blank"
          rel="noreferrer"
          className="button-style mt-7"
        >
          View my GitHub ↗
        </a>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group card card-hover flex flex-col overflow-hidden rounded-3xl hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden bg-[#182146]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-100"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-400">{project.type}</span>
                <span className="text-xs text-slate-400">#{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-50">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip rounded-full px-3 py-1 text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/riyazind777-droid"
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-start pt-6 text-sm font-bold text-slate-200 hover:text-orange-400"
              >
                Source on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
