import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {renderAsync} from 'docx-preview';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { works } from '../data/works';
import Button from '../components/ui/Button';

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function WorkDetails() {
  const { id } = useParams<{ id: string }>();
  const project = works.find(p => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfNumPages, setPdfNumPages] = useState<number>();
  // const [pdfPageNumber, setPdfPageNumber] = useState(1);
  const docxContainerRef = useRef<HTMLDivElement>(null);
  const modalDocxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project?.type === 'docx' && project.path && docxContainerRef.current) {
      // For the inline preview, let's just show a placeholder since docx-preview needs an input
      docxContainerRef.current.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-neutral-500 p-8">
          <FileSpreadsheet size={48} />
          <p class="mt-4">DOCX Preview</p>
          <p class="text-sm">Click to open in full viewer</p>
        </div>
      `;
    }
  }, [project]);

  useEffect(() => {
    if (isModalOpen && project?.type === 'docx' && project.path && modalDocxContainerRef.current) {
      modalDocxContainerRef.current.innerHTML = '';
      fetch(project.path)
        .then(response => response.blob())
        .then(blob => renderAsync(blob, modalDocxContainerRef.current!))
        .catch(error => {
          console.error('Error rendering docx:', error);
          modalDocxContainerRef.current!.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-neutral-500 p-8">
              <FileSpreadsheet size={48} />
              <p class="mt-4">Failed to load document</p>
              <p class="text-sm">Placeholder file not found. Please replace the file path in src/data/works.ts</p>
            </div>
          `;
        });
    }
  }, [isModalOpen, project]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-20 text-center">
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
        <div className="max-w-6xl mx-auto px-6 animate-fade-in">
          <Link to="/work" className="inline-flex items-center gap-2 text-neutral-700 hover:text-accent-700 mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to All Work
          </Link>

          <div className="bg-white p-8 md:p-12 rounded-xl border border-neutral-200 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs px-2 py-1 rounded-full ${project.type === 'pdf' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                {project.type.toUpperCase()}
              </span>
              <p className="text-accent-700 font-medium">{project.category}</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-8">
              {project.title}
            </h1>

            {/* Inline Preview */}
            <div 
              className="w-full aspect-video bg-neutral-100 rounded-lg mb-10 flex items-center justify-center border border-neutral-200 cursor-pointer select-none overflow-hidden"
              onClick={() => setIsModalOpen(true)}
              onContextMenu={handleContextMenu}
            >
              {project.type === 'pdf' ? (
                <div className="text-center text-neutral-500">
                  <FileText size={48} className="mx-auto mb-4" />
                  <p className="font-medium">PDF Preview</p>
                  <p className="text-sm">Click to open in full viewer</p>
                </div>
              ) : (
                <div ref={docxContainerRef} className="w-full h-full" />
              )}
            </div>

            <div 
              className="text-neutral-700 [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-neutral-900 [&>h3]:mt-8 [&>h3]:mb-4"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                {project.title}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div 
              className="flex-1 overflow-auto select-none"
              onContextMenu={handleContextMenu}
            >
              {project.type === 'pdf' ? (
                <div className="flex flex-col items-center py-8">
                  <Document
                    file={project.path}
                    onLoadSuccess={({ numPages }) => setPdfNumPages(numPages)}
                    loading={
                      <div className="flex flex-col items-center justify-center h-full text-neutral-500 p-8">
                        <FileText size={48} />
                        <p className="mt-4">Loading PDF...</p>
                      </div>
                    }
                    error={
                      <div className="flex flex-col items-center justify-center h-full text-neutral-500 p-8">
                        <FileText size={48} />
                        <p className="mt-4">Failed to load document</p>
                        <p className="text-sm">Placeholder file not found. Please replace the file path in src/data/works.ts</p>
                      </div>
                    }
                  >
                    {Array.from(new Array(pdfNumPages), (_, i) => i + 1).map(page => (
                      <div key={page} className="mb-8">
                        <Page pageNumber={page} renderTextLayer={false} />
                      </div>
                    ))}
                  </Document>
                </div>
              ) : (
                <div ref={modalDocxContainerRef} className="p-8" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
