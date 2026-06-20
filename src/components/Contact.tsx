import { Mail, ExternalLink } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-neutral-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          Have an idea that needs the right words? I would love to help bring it to life. Thank you for taking the time to explore my work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" href="mailto:beatrice55okoro@gmail.com">
            <Mail size={20} />
            Get in Touch
          </Button>
          <Button variant="outline" as="a" href="https://example.com" target="_blank" rel="noopener noreferrer">
            View Portfolio
            <ExternalLink size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
