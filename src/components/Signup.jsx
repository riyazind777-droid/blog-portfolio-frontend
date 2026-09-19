import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.code === "auth/email-already-in-use" ? "This email is already registered." : "Unable to create the account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
      <form onSubmit={handleSubmit} className="card w-full max-w-md rounded-3xl p-8 md:p-10">
        <span className="section-label">Join</span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-50">Create account.</h1>
        <p className="mt-2 text-slate-400">Set up your portfolio account.</p>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="field mt-8" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="field mt-4" />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required className="field mt-4" />

        {error && <p className="mt-4 text-sm font-semibold text-red-400" role="alert">{error}</p>}

        <button disabled={loading} className="button-style mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50">
          {loading ? "Creating..." : "Create account"}
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")} className="cursor-pointer font-bold text-slate-100 hover:text-orange-400">
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
