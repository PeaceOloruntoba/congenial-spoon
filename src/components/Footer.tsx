export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Nkiruka Beatrice Okoro. All rights reserved.
        </p>
        <p className="text-sm">
          Built with love by{' '}
          <a 
            href="https://peacecodes.pages.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-50 hover:text-accent-700 transition-colors font-medium"
          >
            PeaceCodes
          </a>
        </p>
      </div>
    </footer>
  );
}
