import { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - Automatizacion Empresarial y Software a Medida`,
    description = `${process.env.NEXT_PUBLIC_APP_NAME} Somos una agencia de servicios tecnológicos. Nuestro enfoque está en la innovación y la satisfacción del cliente.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
        {
            rel: "icon",
            type: "image/png",
            url: "/favicon.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        type: "website",
        locale: "es_ES",
        url: process.env.NEXT_PUBLIC_APP_DOMAIN || "https://www.dashtein.com",
        siteName: process.env.NEXT_PUBLIC_APP_NAME || "DASHTEIN SOFTWARE SOLUTIONS",
        ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@shreyassihasane",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
