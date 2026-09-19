import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../config/firebase";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
    setOpen(false);
    navigate("/home");
  };

  const links = [
    ["/home", "Home"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/blogs", "Blog"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1f]/75 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link to="/home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark">R</span>
          <div>
            <p className="font-display text-base font-extrabold leading-none tracking-tight text-slate-50">RIYAZ</p>
            <p className="mt-1 text-xs leading-none text-slate-400">Full Stack Developer</p>
          </div>
        </Link>

        <button
          className="mobile-menu md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[88px] flex-col gap-2 rounded-2xl border border-[#2a3563] bg-[#101731] p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? "nav-active" : ""}`}
            >
              {label}
            </NavLink>
          ))}

          {user ? (
            <button className="nav-auth" onClick={logout}>Log out</button>
          ) : (
            <button className="nav-auth" onClick={() => { setOpen(false); navigate("/login"); }}>
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
