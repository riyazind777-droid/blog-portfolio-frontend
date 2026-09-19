import React from "react";

function Footer() {
  return (
    <footer className="mt-20 border-t border-dashed border-white/20 py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Riyaz Ahamed. All rights reserved.</p>
        <a
          href="https://github.com/riyazind777-droid"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-200 hover:text-orange-400"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
