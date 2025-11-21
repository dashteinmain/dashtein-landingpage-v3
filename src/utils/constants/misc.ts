import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Malek Seguros",
        logo: "/assets/company-01.svg",
        site: "https://www.malekseguros.com",
    },
    {
        name: "Planticería",
        logo: "/assets/company-02.svg",
        site: "https://www.planticeria.com",
    },
] as const;

export const PROCESS = [
    {
        title: "Análisis de necesidades",
        description: "Identificamos tus procesos manuales, cuellos de botella y oportunidades de automatización",
        icon: FolderOpenIcon,
    },
    {
        title: "Diseño personalizado",
        description: "Desarrollamos tu solución y la integramos con tus sistemas existentes.",
        icon: WandSparklesIcon,
    },
    {
        title: "Implementación y Soporte",
        description: "Monitoreamos el rendimiento y brindamos soporte para garantizar resultados.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Michelle Contreras",
        username: "Malek Seguros",
        rating: 5,
        review: "En mi experiencia, el bot de facturas ha significado un gran ahorro de tiempo frente al proceso manual. El flujo es muy sencillo: basta con tomar la foto y el bot se encarga de organizar toda la información en un archivo Excel. Sin duda, una herramienta práctica y eficiente."
    },
] as const;
