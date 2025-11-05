// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "FacturoBot",
        info: "Procesamiento de facturas",
        price: {
            monthly: 20,
            yearly: Math.round(20 * 12 * (1 - 0.12)),
        },
        priceUnit: "/100 facturas",
        priceExample: "Precio por cada 100 facturas procesadas",
        features: [
            { text: "Procesamiento automático vía WhatsApp" },
            { text: "Extracción de datos con IA" },
            { text: "Exportación a Excel" },
            { text: "Almacenamiento seguro en la nube" },
            { text: "Soporte por email" },
            { text: "Integración con QuickBooks o ERP", tooltip: "$40/mes por 100 facturas" },
        ],
        btn: {
            text: "Comienza Gratis",
            href: "https://api.whatsapp.com/send?phone=50764523183&text=Estoy%20interesado%20en%20Facturobot!%20%F0%9F%91%8DNecesito%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor.",
            variant: "default",
        }
    },
    {
        name: "AtenBot",
        info: "Atención al cliente inteligente",
        price: {
            monthly: 60,
            yearly: Math.round(60 * 12 * (1 - 0.12) * 100) / 100,
        },
        priceUnit: "/conversación",
        priceExample: "~$120/mes por 200 consultas",
        features: [
            { text: "Atención al cliente 24/7" },
            { text: "Base de conocimiento personalizada" },
            { text: "Respuestas instantáneas con IA" },
            { text: "Transferencia inteligente a humano", tooltip: "Desde $30 adicionales / mes" },
            { text: "Ventana de 24 horas", tooltip: "Una conversación = ventana de 24h desde el primer mensaje" },
            { text: "Historial de conversaciones", tooltip: "Desde $30 adicionales / mes" },
        ],
        btn: {
            text: "Empieza Ahora",
            href: "https://api.whatsapp.com/send?phone=50764523183&text=Estoy%20interesado%20en%20AtenBot!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor.",
            variant: "purple",
        }
    },
    {
        name: "AgendaBot",
        info: "Asistente virtual para citas 24/7",
        price: {
            monthly: 80,
            yearly: Math.round(80 * 12 * (1 - 0.12) * 100) / 100,
        },
        priceUnit: "/conversación",
        priceExample: "~$80/mes por 100 citas agendadas",
        features: [
            { text: "Agendamiento automático 24/7" },
            { text: "Sincronización con calendarios", tooltip: "Google Calendar y Microsoft 365" },
            { text: "Recordatorios automáticos por WhatsApp" },
            { text: "Gestión de cancelaciones y reagendamiento" },
            { text: "Ventana de 24 horas", tooltip: "Una conversación = ventana de 24h desde el primer mensaje" },
            { text: "Soporte prioritario" },
        ],
        btn: {
            text: "Empieza Ahora",
            href: "https://api.whatsapp.com/send?phone=50764523183&text=Estoy%20interesado%20en%20AgendaBot!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor.",
            variant: "purple",
        }
    },
    {
        name: "Bots Personalizados",
        info: "Soluciones a medida para tu negocio",
        price: {
            monthly: "A cotizar",
            yearly: "A cotizar",
        },
        priceUnit: "",
        priceExample: "Precio según complejidad e integraciones",
        features: [
            { text: "Bot conversacional 100% personalizado" },
            { text: "Integración con tus sistemas", tooltip: "ERP, CRM, bases de datos, APIs" },
            { text: "Flujos conversacionales a medida" },
            { text: "Calificación de leads, ventas, RH, etc." },
            { text: "Soporte dedicado 24/7" },
            { text: "Incluye SuperBot (AtenBot + AgendaBot)", tooltip: "Atención y agendamiento combinados en un solo flujo" },
        ],
        btn: {
            text: "Agendar consulta",
            href: "https://api.whatsapp.com/send?phone=50764523183&text=Estoy%20interesado%20en%20Software%20a%20Medida!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor.",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Shorten links",
        tooltip: "Create shortened links",
    },
    {
        text: "Track clicks",
        tooltip: "Track clicks on your links",
    },
    {
        text: "See top countries",
        tooltip: "See top countries where your links are clicked",
    },
    {
        text: "Upto 10 tags",
        tooltip: "Add upto 10 tags to your links",
    },
    {
        text: "Community support",
        tooltip: "Community support is available for free users",
    },
    {
        text: "Priority support",
        tooltip: "Get priority support from our team",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Get AI powered suggestions for your links",
    },
];

export const WORKSPACE_LIMIT = 2;