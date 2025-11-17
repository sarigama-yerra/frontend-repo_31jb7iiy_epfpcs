import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
        const res = await fetch(`${base}/api/blogs`);
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="blog" className="bg-[#0B0F14] text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">From the blog</h2>
          <p className="mt-2 text-white/70">Insights, announcements, and tutorials.</p>
        </div>
        {loading ? (
          <div className="text-white/70">Loading...</div>
        ) : error ? (
          <div className="text-rose-400">{error}</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-emerald-400">{p.tags?.[0] || 'Update'}</div>
                <h3 className="mt-2 text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
                <div className="mt-4 text-sm text-white/60">By {p.author || 'Team'}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;