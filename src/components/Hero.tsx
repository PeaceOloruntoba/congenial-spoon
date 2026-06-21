import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-accent-700 font-medium mb-4">Professional Writer & Storyteller</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              NKIRUKA <br />
              BEATRICE <br />
              OKORO
            </h1>
            <p className="text-xl text-neutral-800 mb-2">
              Content Writer | Copywriter | Brand Storyteller
            </p>
            <p className="text-2xl font-serif italic text-neutral-800 mb-8">
              "Turning ideas into words people connect with."
            </p>
            <p className="text-neutral-700 mb-10 leading-relaxed">
              "Words are more than sentences. They are how brands tell their stories, how businesses build trust, and how ideas move people to take action."
            </p>
            <p className="text-neutral-700 mb-10 leading-relaxed">
              "I help brands, creators, and businesses communicate clearly through engaging content, thoughtful storytelling, and persuasive writing."
            </p>
            <Button as="a" href="#contact">
              Let's Connect
            </Button>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-neutral-900 rounded-lg"></div>
              <div className="relative w-full aspect-[3/4] bg-neutral-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20confident%20Black%20woman%20writer%20in%20elegant%20attire%2C%20warm%20lighting%2C%20editorial%20style&image_size=portrait_4_3" 
                  alt="Nkiruka Beatrice Okoro" 
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
