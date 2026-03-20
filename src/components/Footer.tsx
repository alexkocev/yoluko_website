export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-8">
        <div className="text-xl font-bold text-white font-headline tracking-tighter text-center md:text-left">
          Yoluko
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-sm uppercase tracking-widest text-gray-500">
            &copy; {new Date().getFullYear()} Yoluko AI &amp; Automation Agency.
            All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              className="font-label text-sm uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <a
              className="font-label text-sm uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
              href="/terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
