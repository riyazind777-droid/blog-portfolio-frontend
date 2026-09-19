import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate("/home", { replace: true });
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.code === "auth/invalid-credential" ? "Invalid email or password." : "Unable to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
      <form onSubmit={handleLogin} className="card w-full max-w-md rounded-3xl p-8 md:p-10">
        <span className="section-label">Welcome back</span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-50">Log in.</h1>
        <p className="mt-2 text-slate-400">Access your portfolio account.</p>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="field mt-8" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="field mt-4" />

        {error && <p className="mt-4 text-sm font-semibold text-red-400" role="alert">{error}</p>}

        <button disabled={loading} className="button-style mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50">
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          New here?{" "}
          <button type="button" onClick={() => navigate("/signup")} className="cursor-pointer font-bold text-slate-100 hover:text-orange-400">
            Create an account
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
