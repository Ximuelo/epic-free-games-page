//import './style.css';

import { useLocation } from "preact-iso";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";

export function Home() {

    const location = useLocation();
    const pathCountry = location.path.split("/")[1];

	return (
        <div class="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
            <Header />
            <Hero />
            <p class="text-red-400">Home</p>
            <p>{pathCountry}</p>
        </div>
    );
}
