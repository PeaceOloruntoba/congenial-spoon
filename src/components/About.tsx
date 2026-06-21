import { useState, useEffect } from 'react';

const images = [
  {
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20confident%20Black%20woman%20writer%20in%20elegant%20attire%2C%20warm%20lighting%2C%20editorial%20style&image_size=square",
    alt: "Professional portrait"
  },
  {
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=writer%20working%20at%20desk%20with%20laptop%20and%20notebook%2C%20cozy%20home%20office%2C%20warm%20tones&image_size=square",
    alt: "Writer at work"
  },
  {
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20hands%20writing%20in%20notebook%2C%20pen%20and%20paper%2C%20editorial%20aesthetic&image_size=square",
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
