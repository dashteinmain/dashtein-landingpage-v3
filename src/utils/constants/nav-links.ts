import { HelpCircleIcon, LineChartIcon, LockIcon, NewspaperIcon, QrCodeIcon, Receipt } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Soluciones",
        href: "/#soluciones",
        menu: [
            {
                title: "FacturoBot",
                tagline: "Procesa facturas automáticamente.",
                href: "/soluciones/facturobot",
                icon: Receipt,
            },
            {
                title: "Password Protection",
                tagline: "Secure your links with a password.",
                href: "/soluciones/password-protection",
                icon: LockIcon,
            },
            {
                title: "Advanced Analytics",
                tagline: "Gain insights into who is clicking your links.",
                href: "/soluciones/analytics",
                icon: LineChartIcon,
            },
            {
                title: "Custom QR Codes",
                tagline: "Use QR codes to reach your audience.",
                href: "/soluciones/qr-codes",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Precios",
        href: "/precios",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
