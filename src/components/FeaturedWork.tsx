import { FileText, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: '1',
    title: 'The Currency of Trust: Why the Brands We Remember Are The Ones That Make Us Feel',
    category: 'Editorial Article',
    summary: 'A magazine-style article exploring how emotional connection, storytelling, and authenticity shape modern brands.',
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">Introduction</h3>
      <p class="mb-4 leading-relaxed">In today's crowded marketplace, brands that stand out are not just selling products—they're selling feelings. This article explores how emotional connection, storytelling, and authenticity shape the brands we remember and love.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">The Power of Story</h3>
      <p class="mb-4 leading-relaxed">Humans have been telling stories for thousands of years. Stories are how we make sense of the world, how we connect with others, and how we remember. When brands tell compelling stories, they tap into this ancient human instinct.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Building Trust Through Authenticity</h3>
      <p class="leading-relaxed">Consumers today crave authenticity. They can spot inauthentic marketing from a mile away. The brands that win are those that are true to their values, transparent in their practices, and genuine in their communication.</p>
    `,
  },
  {
    id: '2',
    title: 'LUMÉE: The Art of Becoming',
    category: 'Brand Story',
    summary: 'A luxury-inspired brand story showing how storytelling can transform a product into an experience.',
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">The LUMÉE Journey</h3>
      <p class="mb-4 leading-relaxed">LUMÉE is more than a brand—it's a philosophy of beauty, grace, and self-discovery. This brand story takes readers on a journey from the brand's humble beginnings to its position as a symbol of elegance and refinement.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Crafting the Experience</h3>
      <p class="leading-relaxed">Every touchpoint of the LUMÉE experience is carefully curated—from packaging to product design, from customer service to community building. This is the art of becoming: transforming a simple product into a meaningful experience.</p>
    `,
  },
  {
    id: '3',
    title: 'Your Future Self Just Sent You A Reminder',
    category: 'Marketing Email',
    summary: 'A persuasive email campaign combining humor, emotion, and a strong call-to-action to encourage customer engagement.',
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">Subject: Your Future Self Just Sent You A Reminder</h3>
      <p class="mb-4 leading-relaxed">Hi [Name],</p>
      <p class="mb-4 leading-relaxed">Your future self just sent us a message, and they wanted us to pass it along: "Don't wait to invest in yourself."</p>
      <p class="mb-4 leading-relaxed">We get it—life gets busy, and it's easy to put your own needs on the back burner. But today, we're inviting you to take a moment for you.</p>
      <p class="leading-relaxed"><strong>Ready to make your future self proud?</strong> Click the button below to get started.</p>
    `,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-accent-700 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-sm text-accent-700 font-medium mb-3">{project.category}</p>
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-accent-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {project.summary}
              </p>
            </Link>
          ))}
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
