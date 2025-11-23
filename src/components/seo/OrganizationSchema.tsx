import Script from 'next/script';

interface OrganizationSchemaProps {
    name?: string;
    url?: string;
    logo?: string;
    description?: string;
}

export function OrganizationSchema({
    name = "DASHTEIN SOFTWARE SOLUTIONS",
    url = "https://www.dashtein.com",
    logo = "https://www.dashtein.com/android-chrome-512x512.png",
    description = "Somos una agencia de servicios tecnológicos especializada en automatización empresarial y desarrollo de software a medida con Inteligencia Artificial."
}: OrganizationSchemaProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url,
        "logo": {
            "@type": "ImageObject",
            "url": logo,
            "width": 512,
            "height": 512
        },
        "description": description,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+507-6452-3183",
            "contactType": "customer service",
            "availableLanguage": ["Spanish"]
        },
        "sameAs": [
            // Agrega aquí tus redes sociales si las tienes
             "https://www.instagram.com/dashtein.tech",
             "https://www.tiktok.com/@dashtein.tech",
             "https://www.linkedin.com/company/dashtein-software-solutions",
        ]
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
