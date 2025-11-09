import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, Link2Icon, SearchIcon, WaypointsIcon, Receipt, BotMessageSquare, Monitor } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
    {
        Icon: Receipt,
        name: "FacturoBot",
        description: "Automatiza el procesamiento de facturas vía WhatsApp con IA.",
        href: "/soluciones/facturobot",
        cta: "Conocer más",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute top-10 left-10 w-[280px] origin-top rounded-lg border border-border bg-neutral-950 overflow-hidden transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
                <div className="bg-neutral-900 px-3 py-2 border-b border-border">
                    <p className="text-xs text-neutral-400">Facturas recientes</p>
                </div>
                <div className="divide-y divide-border">
                    <div className="px-3 py-2 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-neutral-300 font-medium">ABC Corp</p>
                            <p className="text-xs text-neutral-500">INV-001</p>
                        </div>
                        <span className="text-xs text-green-400">$1,500</span>
                    </div>
                    <div className="px-3 py-2 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-neutral-300 font-medium">XYZ Ltd</p>
                            <p className="text-xs text-neutral-500">INV-002</p>
                        </div>
                        <span className="text-xs text-green-400">$2,300</span>
                    </div>
                    <div className="px-3 py-2 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-neutral-300 font-medium">Tech Co</p>
                            <p className="text-xs text-neutral-500">INV-003</p>
                        </div>
                        <span className="text-xs text-green-400">$890</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: CalendarIcon,
        name: "AgendaBot",
        description: "Asistente virtual 24/7 para agendar citas vía WhatsApp.",
        className: "col-span-3 lg:col-span-1",
        href: "/soluciones/agendabot",
        cta: "Conocer más",
        background: (
            <div className="absolute left-10 top-10 w-[320px] origin-top rounded-lg border border-border bg-neutral-950 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105">
                <div className="p-3 border-b border-border flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CalendarIcon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-neutral-300">AgendaBot</span>
                </div>
                <div className="p-3 space-y-2">
                    <div className="bg-neutral-800 rounded-lg p-2 max-w-[85%]">
                        <p className="text-xs text-neutral-300">¡Hola! ¿Para cuándo te gustaría agendar tu cita?</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-2 max-w-[85%] ml-auto text-right">
                        <p className="text-xs text-neutral-300">Mañana por la tarde</p>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-2 max-w-[85%]">
                        <p className="text-xs text-neutral-300">Perfecto! Tengo disponible:</p>
                        <div className="mt-2 space-y-1">
                            <div className="bg-neutral-700 rounded px-2 py-1">
                                <p className="text-xs text-neutral-200">📅 Mañana 3:00 PM</p>
                            </div>
                            <div className="bg-neutral-700 rounded px-2 py-1">
                                <p className="text-xs text-neutral-200">📅 Mañana 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: BotMessageSquare,
        name: "AtenBot",
        description: "Asistente virtual 24/7 para atención al cliente vía WhatsApp.",
        className: "col-span-3 lg:col-span-1",
        href: "/soluciones/atenbot",
        cta: "Conocer más",
        background: (
            <div className="absolute left-10 top-10 w-[320px] origin-top rounded-lg border border-border bg-neutral-950 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105">
                <div className="p-3 border-b border-border flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <BotMessageSquare className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-neutral-300">AtenBot</span>
                </div>
                <div className="p-3 space-y-2">
                    <div className="bg-neutral-800 rounded-lg p-2 max-w-[85%]">
                        <p className="text-xs text-neutral-300">¡Hola! ¿Cómo puedo ayudarte?</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-2 max-w-[85%] ml-auto text-right">
                        <p className="text-xs text-neutral-300">¿Cual es su horario y donde están ubicados?</p>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-2 max-w-[85%]">
                        <p className="text-xs text-neutral-300">Estamos ubicados en San francisco, al lado del centro comercial</p>
                        <div className="mt-2 space-y-1">
                            <div className="bg-neutral-700 rounded px-2 py-1">
                                <p className="text-xs text-neutral-200">📅 Mañana 3:00 PM</p>
                            </div>
                            <div className="bg-neutral-700 rounded px-2 py-1">
                                <p className="text-xs text-neutral-200">📅 Mañana 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "Bots Personalizados",
        description: "Bots conversacionales y automatizaciones a medida para tu negocio.",
        href: "/soluciones/botpersonalizados",
        cta: "Conocer más",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: Monitor,
        name: "Software a Medida",
        description: "Hagamos realidad el software de tus sueños.",
        href: "#",
        cta: "Conocer más",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Command className="absolute right-10 top-4 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <Input placeholder="Escribe tu necesidad..." />
                <div className="mt-1 cursor-pointer">
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Desarrollo</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">DevOps</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">ERP</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">CRM</div>
                </div>
            </Command>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
