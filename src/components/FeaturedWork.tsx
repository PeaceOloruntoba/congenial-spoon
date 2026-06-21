import { FileText, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { works } from '../data/works';
import Button from './ui/Button';

export default function FeaturedWork() {
  const featuredWorks = works.slice(0, 3);

  return (
    <section id="work" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {featuredWorks.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-accent-700 hover:shadow-xl transition-all duration-300 animate-fade-in"
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
        <div className="flex justify-center mb-12">
          <Link to="/work">
            <Button variant="outline">
              View All Work
            </Button>
          </Link>
        </div>
        <div className="bg-neutral-900 text-neutral-50 p-8 rounded-xl flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-2 mt-1">
            <FileText size={24} />
            <FileSpreadsheet size={24} />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold mb-2">Note:</h3>
            <p className="text-neutral-200 leading-relaxed">
              Includes high-level research papers written for international students as a Ghostwriter. Client confidentiality is strictly maintained, but sample documents with authorized credit can be requested directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
