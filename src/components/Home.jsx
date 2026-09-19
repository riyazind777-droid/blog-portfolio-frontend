import React from "react";
import { Link } from "react-router-dom";
import Footer from "./common/Footer";
import BlogProfileImage from "../assets/Blog Website Design.png"
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/bulk mail.jpg";
import P2 from "../assets/car database.jpg"
import P3 from "../assets/netflix clone.jpg"

const tech = [
  ["HTML", HTML], ["CSS", CSS], ["JavaScript", JS], ["React", REACTICON], ["MongoDB", DB], ["Node.js", NODE]
];

function Home() {
  return (
    <div className="page-shell py-14">
      <section className="grid items-center gap-12 py-8 md:grid-cols-[1.15fr_.85fr] md:py-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.18)]" /> Available for opportunities
          </div>
          <h1 className="text-5xl font-extrabold leading-[.95] tracking-[-.04em] text-slate-50 md:text-8xl">
            Hi, I’m <span className="stitch-underline text-orange-400">Riyaz.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-8 text-slate-300">
            Full-stack developer building clean, responsive web applications with React, JavaScript, Node.js, Express and MongoDB.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="button-style">View projects →</Link>
            <Link to="/contact" className="button-outline">Let’s talk</Link>
          </div>
          <a href="https://github.com/riyazind777-droid" target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-bold text-slate-300 hover:text-orange-400">
            github.com/riyazind777-droid ↗
          </a>
        </div>

        <div className="patch">
          <img src={BlogProfileImage} alt="Riyaz" className="aspect-square w-full rounded-[1.5rem] object-cover brightness-95" />
        </div>
      </section>

      <section className="border-y border-dashed border-white/20 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
          {tech.map(([name, icon]) => (
            <div key={name} className="flex items-center gap-2.5 text-sm font-semibold text-slate-400">
              <img src={icon} alt={name} className="h-9 w-9 object-contain" /> {name}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="section-label">Selected work</span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-50 md:text-6xl">Built with purpose.</h2>
          </div>
          <Link to="/projects" className="font-bold text-slate-200 hover:text-orange-400">See all projects →</Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [P1, "BulkMail", "Full-stack email application"],
            [P2, "Database Project", "React + MongoDB CRUD app"],
            [P3, "Netflix Clone", "React streaming UI"],
          ].map(([image, title, text]) => (
            <Link to="/projects" key={title} className="group card card-hover overflow-hidden rounded-3xl">
              <div className="aspect-square overflow-hidden bg-[#182146]">
                <img src={image} alt={title} className="h-full w-full object-cover brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="card stitched rounded-[2rem] px-7 py-12 md:px-14 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <span className="section-label">Next chapter</span>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-50 md:text-6xl">I like turning ideas into products.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">Explore my work, read what I’m learning, or get in touch about your next project.</p>
          </div>
          <Link to="/blogs" className="button-style shrink-0 self-start md:self-end">Read the blog →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
