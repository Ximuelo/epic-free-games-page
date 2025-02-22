import { useLocation } from 'preact-iso';
import { useEffect } from 'preact/hooks';
import { Country }  from 'epic-free-games';

export function Redirect() {
    const location = useLocation();
    const defaultCountry: Country = "US";

    useEffect(() => {
        location.route(`/${defaultCountry}`)
    },[location]) 

    return null;
} 
