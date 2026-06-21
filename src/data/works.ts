export interface Work {
  id: string;
  title: string;
  category: string;
  type: 'pdf' | 'docx';
  summary: string;
  path: string;
  fullContent: string;
}

export const works: Work[] = [
  {
    id: '1',
    title: "The Currency of Trust: Why the Brands We Remember Are The Ones That Make Us Feel",
    category: "Editorial Article",
    type: "pdf",
    summary: "A magazine-style article exploring how emotional connection, storytelling, and authenticity shape modern brands.",
    path: "/works/work1.pdf", // Placeholder path - replace with your actual file
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
    title: "Your Future Self Just Sent You A Reminder (and it's slightly disappointed)",
    category: "Marketing Email",
    type: "pdf",
    summary: "A persuasive email campaign combining humor, emotion, and a strong call-to-action to encourage customer engagement.",
    path: "/works/work2.pdf", // Placeholder path - replace with your actual file
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">Subject: Your Future Self Just Sent You A Reminder</h3>
      <p class="mb-4 leading-relaxed">Hi [Name],</p>
      <p class="mb-4 leading-relaxed">Your future self just sent us a message, and they wanted us to pass it along: "Don't wait to invest in yourself."</p>
      <p class="mb-4 leading-relaxed">We get it—life gets busy, and it's easy to put your own needs on the back burner. But today, we're inviting you to take a moment for you.</p>
      <p class="leading-relaxed"><strong>Ready to make your future self proud?</strong> Click the button below to get started.</p>
    `,
  },
  {
    id: '3',
    title: "LUMÉE: The Art of Becoming",
    category: "Brand Story",
    type: "pdf",
    summary: "A luxury-inspired brand story showing how storytelling can transform a product into an experience.",
    path: "/works/work3.pdf", // Placeholder path - replace with your actual file
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">The LUMÉE Journey</h3>
      <p class="mb-4 leading-relaxed">LUMÉE is more than a brand—it's a philosophy of beauty, grace, and self-discovery. This brand story takes readers on a journey from the brand's humble beginnings to its position as a symbol of elegance and refinement.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Crafting the Experience</h3>
      <p class="leading-relaxed">Every touchpoint of the LUMÉE experience is carefully curated—from packaging to product design, from customer service to community building. This is the art of becoming: transforming a simple product into a meaningful experience.</p>
    `,
  },
  {
    id: '4',
    title: "Value of Foreign Travel",
    category: "Research Essay",
    type: "docx",
    summary: "An insightful, structured essay examining the cultural, educational, and personal developments gained through international exposure.",
    path: "/works/work4.docx", // Placeholder path - replace with your actual file
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">Introduction</h3>
      <p class="mb-4 leading-relaxed">Foreign travel offers transformative experiences that shape individuals culturally, educationally, and personally. This essay explores the profound impact of international exposure.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Cultural Immersion</h3>
      <p class="mb-4 leading-relaxed">Immersing oneself in new cultures fosters empathy, broadens perspectives, and challenges preconceived notions. It encourages open-mindedness and appreciation for diversity.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Educational Growth</h3>
      <p class="leading-relaxed">Travel provides hands-on learning opportunities that extend far beyond the classroom, teaching history, geography, and global issues in a tangible way.</p>
    `,
  },
  {
    id: '5',
    title: "The Transformative Impact of Artificial Intelligence on Modern Society",
    category: "Academic Research Paper",
    type: "docx",
    summary: "A detailed research-driven evaluation looking into AI's footprints across automation, societal changes, and future landscapes.",
    path: "/works/work5.docx", // Placeholder path - replace with your actual file
    fullContent: `
      <h3 class="text-2xl font-serif font-bold mb-4">Abstract</h3>
      <p class="mb-4 leading-relaxed">This research paper examines the transformative impact of artificial intelligence on modern society, analyzing its effects on automation, social structures, and future trajectories.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Automation and the Workforce</h3>
      <p class="mb-4 leading-relaxed">AI-driven automation is reshaping industries, altering job roles, and necessitating new skillsets for the future workforce.</p>
      <h3 class="text-2xl font-serif font-bold mb-4 mt-8">Societal Implications</h3>
      <p class="leading-relaxed">From healthcare to education, AI is revolutionizing how we live and interact, presenting both opportunities and ethical challenges.</p>
    `,
  },
];
