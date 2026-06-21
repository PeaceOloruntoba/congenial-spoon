import { useState, useEffect } from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    alt: "Professional portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=400&fit=crop",
    alt: "Writer at work"
  },
  {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop",
    alt: "Writing process"
  }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-8">
              About Me
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              I am a writer passionate about creating content that informs, connects, and inspires. With a background in article writing, essays, storytelling, and research-based writing, I combine creativity with strategy to create content that is not only beautifully written but also meaningful and purposeful. Whether it is telling a brand’s story, educating an audience, or creating content that encourages action, my goal is simple: To turn ideas into words that leave an impact.
            </p>
          </div>
          <div className="relative aspect-square animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {images.map((image, index) => {
              const offset = (index - currentIndex + images.length) % images.length;
              let top, right, zIndex;
              
              if (offset === 0) {
                top = '4%';
                right = '4%';
                zIndex = 3;
              } else if (offset === 1) {
                top = '0';
                right = '0';
                zIndex = 2;
              } else {
                top = '8%';
                right = '8%';
                zIndex = 1;
              }

              return (
                <div
                  key={index}
                  className="absolute rounded-md overflow-hidden border border-neutral-200 shadow-lg transition-all duration-1000 ease-in-out"
                  style={{
                    top,
                    right,
                    width: '92%',
                    height: '92%',
                    zIndex,
                    opacity: offset === 0 ? 1 : 0.7,
                    transform: offset === 0 ? 'scale(1)' : 'scale(0.95)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
