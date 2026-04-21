export function Hero() {
    return (
        <section id="hero" className="flex flex-col items-center justify-center text-center py-24 sm:py-32">
            <h1 className="mb-6">
                Lab<span className="text-primary">Sublime</span>
            </h1>
            <p className="max-w-2xl mb-10 text-lg text-neutral-300 sm:text-xl">
                Building infrastructure for community-powered commerce and technology consulting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="#products" className="btn btn-lg sm:min-w-48">
                    Our Products
                </a>
                <a href="#contact" className="btn btn-lg sm:min-w-48 bg-white/10 text-white hover:bg-white/20">
                    Get in Touch
                </a>
            </div>
        </section>
    );
}
