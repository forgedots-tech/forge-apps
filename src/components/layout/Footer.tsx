export default function Footer() {
  return (
    <footer className="w-full relative z-50 px-4 py-8 border-t text-center bg-background">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row text-sm text-muted-foreground">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} ForgeDots Technologies. All rights
          reserved.
        </p>
        <a
          href="mailto:contact@forgedots.com"
          className="transition-colors hover:text-gray-900"
        >
          Contact us: contactus@forgedots.com
        </a>
      </div>
    </footer>
  );
}
