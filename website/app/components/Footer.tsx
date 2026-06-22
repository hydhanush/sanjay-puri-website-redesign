import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="flex flex-col items-center px-8 py-16 lg:py-24">
        <p className="font-headline text-xs tracking-[0.2em] uppercase border-b border-accent pb-3 mb-12">
          Sanjay Puri Architects
        </p>

        <nav className="flex flex-col items-center gap-8 mb-16 md:flex-row md:gap-12">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-headline text-4xl lg:text-5xl text-background transition-colors duration-200 hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-sm color-background">
          &copy; 2026 Sanjay Puri Architects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
