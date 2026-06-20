import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { projects } from '../components/FeaturedWork';
import Button from '../components/ui/Button';

export default function WorkDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Project Not Found
          </h1>
          <Link to="/" className="text-accent-700 hover:underline">
            Go back home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-700 hover:text-accent-700 mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="bg-white p-8 md:p-12 rounded-xl border border-neutral-200 mb-12">
            <p className="text-accent-700 font-medium mb-4">{project.category}</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-8">
              {project.title}
            </h1>

            <div className="w-full aspect-video bg-neutral-100 rounded-lg mb-10 flex items-center justify-center border border-neutral-200">
              <div className="text-center text-neutral-500">
                <p className="font-medium">Document Viewer</p>
                <p className="text-sm">Preview area</p>
              </div>
            </div>

            <div 
              className="text-neutral-700 [&>h3]:text-xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-neutral-900 [&>h3]:mt-8 [&>h3]:mb-4"
              dangerouslySetInnerHTML={{ __html: project.fullContent }}
            />
          </div>

          <Button as="a" href="#contact">
            Let's Work Together
          </Button>
        </div>
        <section id="contact" className="pt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
