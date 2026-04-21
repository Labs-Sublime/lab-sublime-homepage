export function Products() {
    return (
        <section id="products" className="scroll-mt-24">
            <h2 className="mb-8">Products</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border rounded-sm sm:p-8 bg-white/5 border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-white">MarketMesh</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-primary-content">
                            Coming Soon
                        </span>
                    </div>
                    <p className="mb-4 text-neutral-300">
                        A platform that turns community trust into a commerce engine. MarketMesh
                        enables community leaders to build curated storefronts for their vetted
                        members — giving creators and businesses access to built-in audiences
                        without building their own.
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Community-run storefronts with vetted members
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Multi-tiered commission system that rewards curation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Cross-market referrals, white-labeling, and drop-shipping
                        </li>
                    </ul>
                </div>
                <div className="p-6 border rounded-sm sm:p-8 bg-white/5 border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-white">ElysiumNetwork</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-white">
                            In Development
                        </span>
                    </div>
                    <p className="mb-4 text-neutral-300">
                        The first network built on MarketMesh. ElysiumNetwork is a curated
                        community marketplace connecting mindful businesses and creators with
                        conscious consumers.
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Curated marketplace for conscious commerce
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Community-vetted vendors and products
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">&#9656;</span>
                            Proving ground for the MarketMesh platform
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
