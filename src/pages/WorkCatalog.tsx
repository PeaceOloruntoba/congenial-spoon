import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { works } from '../data/works';
import { ArrowLeft } from 'lucide-react';

export default function WorkCatalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-700 hover:text-accent-700 mb-12 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-12">
            All Work
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((project, idx) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-accent-700 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${project.type === 'pdf' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {project.type.toUpperCase()}
                  </span>
                  <p className="text-sm text-accent-700 font-medium">{project.category}</p>
                </div>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-accent-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
