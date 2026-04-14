export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 border-t text-center bg-white border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row">
        <p className="mb-4 text-sm text-gray-500 md:mb-0">
          © {new Date().getFullYear()} ForgeDots. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
