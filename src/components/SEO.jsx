import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component to dynamically update document title and meta description per page
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} [props.canonical] - Canonical path
 */
const SEO = ({ title, description, canonical }) => {
    const location = useLocation();

    useEffect(() => {
        // Set document title
        const defaultTitle = 'S.I.D.M.I. | Climatización, Refrigeración y Mantenimiento Industrial';
        document.title = title ? `${title} | S.I.D.M.I.` : defaultTitle;

        // Update meta description
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);

            // Also update og:description
            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) {
                ogDesc.setAttribute('content', description);
            }
        }

        // Update og:title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', title ? `${title} | S.I.D.M.I.` : defaultTitle);
        }

        // Update canonical URL
        const currentUrl = window.location.origin + (canonical || location.pathname);
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', currentUrl);

        // Scroll to top on SEO mount
        window.scrollTo(0, 0);
    }, [title, description, canonical, location]);

    return null;
};

export default SEO;
