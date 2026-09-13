const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-4">
      <div className="grid md:grid-cols-4 gap-10 py-12 px-6 mx-auto max-w-7xl text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo-text.png" alt="dev stack" className="h-9" />
          <p className="text-sm text-slate-500 mt-3">
            Curated tools and technologies for developers building modern
            software.
          </p>
          <div className="flex text-sm font-medium text-slate-600 gap-4 mt-4">
            <a href="#" className="hover:text-pink-600 transition">
              GitHub
            </a>
            <span className="text-slate-800 md:hidden">•</span>
            <a href="#" className="hover:text-pink-600 transition">
              Twitter
            </a>
            <span className="text-slate-800 md:hidden">•</span>
            <a href="#" className="hover:text-pink-600 transition">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            Product
          </h4>
          <ul className="text-sm text-slate-500 space-y-2 mt-4">
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            Company
          </h4>
          <ul className="text-sm text-slate-500 space-y-2 mt-4">
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-sm  font-bold text-slate-900 uppercase">Legal</h4>
          <ul className="text-sm text-slate-500 space-y-2 mt-4">
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="flex justify-between items-center text-sm text-slate-400 mx-auto max-w-7xl px-6 py-5 gap-3 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
