const links = [
  { label: "GitHub", href: "https://github.com/Kev1MSL" },
  { label: "X.com", href: "https://x.com/Kev1MSL" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-messali/" },
  { label: "Email", href: "mailto:messalikevin@gmail.com" },
];

export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[880px] px-6 pb-14 pt-20 sm:px-10">
      <div className="flex flex-col gap-3 border-t border-rule pt-5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-mono text-[12px] text-lead">Kevin Messali, Paris.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="font-mono text-[12px] text-lead transition-colors hover:text-signalInk"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
