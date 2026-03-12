import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a #tag (like #awards), scroll to it
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Tiny delay to ensure the page has loaded first
    } 
    // Otherwise, just scroll to the very top of the new page
    else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}