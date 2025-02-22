//import './style.css';

import { useLocation } from "preact-iso";

export function Home() {

    const location = useLocation();
    const pathCountry = location.path.split("/")[1];

	return (
        <div>
            <p class="text-red-400">Home</p>
            <p>{pathCountry}</p>
        </div>
    );
}
