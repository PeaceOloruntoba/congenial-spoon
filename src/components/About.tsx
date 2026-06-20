export default function About() {
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
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-full h-full border border-neutral-200 rounded-md"></div>
              <div className="relative w-full aspect-square bg-neutral-100 rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=writer%20working%20at%20desk%20with%20laptop%20and%20notebook%2C%20cozy%20home%20office%2C%20warm%20tones&image_size=square" 
                  alt="Writer at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-2 -left-2 w-full h-full border border-neutral-200 rounded-md"></div>
              <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20hands%20writing%20in%20notebook%2C%20pen%20and%20paper%2C%20editorial%20aesthetic&image_size=portrait_4_3" 
                  alt="Writing process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
