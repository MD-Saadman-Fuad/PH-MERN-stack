import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// Simple component to set document.title based on current route
export default function RouteTitle() {
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const { pathname } = location;

        // Title mapping. Adjust as needed.
        const titleForPath = () => {
            if (pathname === '/' || pathname === '') return 'Boi Poka — Books';
            if (pathname.startsWith('/about')) return 'About — Boi Poka';
            if (pathname.startsWith('/readlist')) return 'My Lists — Boi Poka';
            if (pathname.startsWith('/bookDetails')) {
                const id = params.id || pathname.split('/').pop();
                return `Book ${id} — Boi Poka`;
            }
            return 'Boi Poka';
        };

        const newTitle = titleForPath();
        document.title = newTitle;
    }, [location, params]);

    return null;
}
