"use client";
import Link from "next/link";

const Sidebar: React.FC = () => (
  <nav className="flex flex-col gap-2 pt-4">
    <Section title="Tools">
      <NavItem href="/" label="Overview" />
    </Section>
    <Section title="Minifiers">
      <NavItem href="/html-minify" label="HTML Minify" />
      <NavItem href="/css-minify" label="CSS Minify" />
      <NavItem href="/javascript-minify" label="JavaScript Minify" />
    </Section>
    <Section title="Converter">
      <NavItem href="/rgba-to-hex" label="RGBA to HEX" />
      <NavItem href="/typescript-to-zod" label="Typescript to Zod" />
    </Section>
  </nav>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="space-y-1">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <ul className="grid gap-1">{children}</ul>
  </div>
);

const NavItem: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      prefetch={false}
    >
      {label}
    </Link>
  </li>
);

export default Sidebar;
