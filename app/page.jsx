import { Hero } from 'components/sections/hero';
import { About } from 'components/sections/about';
import { Products } from 'components/sections/products';
import { Consulting } from 'components/sections/consulting';
import { Contact } from 'components/sections/contact';

export default function Page() {
    return (
        <div className="flex flex-col gap-24 sm:gap-32">
            <Hero />
            <About />
            <Products />
            <Consulting />
            <Contact />
        </div>
    );
}
