import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Footer from './common/Footer';
import auth from '../config/firebase';
function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);

        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                if(user.uid ==="zirOPYZWhzYkP7nQr2Z6N2GVy0j1")
                {
                    setAdmin(true)
                    console.log("he is an admin")
                }else{
                    setAdmin(false)
                    console.log("not an admin")
                }
            } else {
                setAdmin(false)
            }
        })
        axios.get(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/blogs` : "http://localhost:5000/api/blogs").then((res) => {
            console.log(res.data)
            setBlogs(res.data)
        }).catch(() => {
            console.log("Error fetching data")
        })
    }, [])



    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');


    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blogs/like/${blog_id}`);
           
            if (response.status === 200) {
                axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blogs`).then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault(); 
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


        const likes = 0
        axios.post(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blogs`, { newTitle, date, newContent, likes }).then((res) => {
            console.log(res.data)

            axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/blogs`).then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });




        setNewTitle('');
        setNewContent('');
    };

    return (
        <div className="page-shell py-16">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-7xl">
                Latest <span className="text-orange-400">Blogs</span> 📚
            </h1>

            {
                admin ? <div className="card mt-10 rounded-3xl p-6 md:p-8">
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="field"
                            required
                        />
                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="field resize-none"
                            rows="4"
                            required
                        />
                        <button type="submit" className="button-style self-start">
                            Add Blog
                        </button>
                    </form>
                </div> : ""
            }

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                {blogs.map((blog) => (
                    <article key={blog._id} className="card card-hover flex flex-col rounded-3xl p-7">
                        <h3 className="text-2xl font-extrabold text-slate-50">{blog.newTitle}</h3>
                        <p className="mt-2 text-sm text-slate-400">{blog.date}</p>
                        <p className="mt-4 flex-1 whitespace-pre-line break-words leading-7 text-slate-400">{blog.newContent}</p>
                        <div className="mt-6 flex items-center gap-3 border-t border-dashed border-white/10 pt-5">
                            <button
                                type="button"
                                onClick={() => handleLike(blog._id)}
                                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#2a3563] bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-slate-200 hover:border-orange-400 hover:text-orange-400"
                            >
                                <span aria-hidden="true">♥</span> Like
                            </button>
                            <span className="text-sm text-slate-400">{blog.likes} Likes</span>
                        </div>
                    </article>
                ))}
            </div>

            {blogs.length === 0 && (
                <div className="card mt-12 rounded-3xl border-dashed p-10 text-center text-slate-400">
                    No posts to show yet.
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Blogs