const navItems = [
    { linkText: 'About', href: '#about' },
    { linkText: 'Products', href: '#products' },
    { linkText: 'Consulting', href: '#consulting' },
    { linkText: 'Contact', href: '#contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <a href="#hero" className="text-xl font-bold no-underline hover:opacity-80">
                Lab<span className="text-primary">Sublime</span>
            </a>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                            {item.linkText}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
