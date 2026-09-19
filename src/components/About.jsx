import React from "react";
import Footer from "./common/Footer";

const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Firebase"];

function About() {
  return (
    <div className="page-shell py-16">
      <span className="section-label">About me</span>
      <div className="mt-5 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-50 md:text-7xl">
            From production floors to <span className="text-orange-400">production code.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            I’m Riyaz Ahamed, a full-stack developer focused on building practical, responsive and user-friendly web applications.
          </p>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            My background in garments production taught me discipline, coordination and attention to detail. I now bring those habits into software development while building projects with modern JavaScript technologies.
          </p>
        </div>

        <div className="card self-start rounded-3xl p-7">
          <p className="text-sm font-semibold text-slate-400">Current stack</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="chip rounded-full px-4 py-2 text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          ["01", "Build", "Turn ideas into responsive web experiences."],
          ["02", "Learn", "Keep improving through real projects and experimentation."],
          ["03", "Ship", "Deploy usable products instead of stopping at tutorials."],
        ].map(([n, title, text]) => (
          <div key={n} className="card card-hover rounded-3xl p-7">
            <span className="text-sm font-extrabold text-orange-400">{n}</span>
            <h2 className="mt-8 text-2xl font-extrabold text-slate-50">{title}</h2>
            <p className="mt-2 leading-7 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About
