import { BotMessageSquare, Calendar, HelpCircleIcon, NewspaperIcon, Receipt, WaypointsIcon } from "lucide-react";

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
                title: "AgendaBot",
                tagline: "Asistente 24/7 para agendar citas.",
                href: "/soluciones/agendabot",
                icon: Calendar,
            },
            {
                title: "AtenBot",
                tagline: "Asistente 24/7 para clientes.",
                href: "/soluciones/atenbot",
                icon: BotMessageSquare,
            },
            {
                title: "Bots Personalizados",
                tagline: "Automatizaciones a medida.",
                href: "/soluciones/botpersonalizados",
                icon: WaypointsIcon,
            },
        ],
    },
    {
        title: "Precios",
        href: "/precios",
    },
    {
        title: "Recursos",
        href: "/recursos",
        menu: [
            {
                title: "Ayuda",
                tagline: "Obtén respuesta a tus preguntas.",
                href: "/recursos/ayuda",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Novedades",
        href: "/novedades",
    },
];
