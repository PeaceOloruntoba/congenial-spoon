const services = [
  {
    title: 'Content Writing',
    description: 'Creating engaging, well-researched articles, blogs, and written content that educate audiences and strengthen brand authority.',
  },
  {
    title: 'Copywriting',
    description: 'Crafting persuasive words for emails, campaigns, product descriptions, and marketing materials designed to inspire action.',
  },
  {
    title: 'Brand Storytelling',
    description: 'Helping businesses communicate their identity, values, and mission through authentic storytelling.',
  },
  {
    title: 'Creative Writing',
    description: 'Developing emotionally engaging stories and written pieces that capture attention and create memorable experiences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-12 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
