import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define las rutas PÚBLICAS (que NO necesitan auth)
const isPublicRoute = createRouteMatcher([
    '/',
    '/features(.*)',
    '/pricing',
    '/changelog',
    '/enterprise',
    '/privacy',
    '/terms',
    '/resources(.*)',
    '/auth/sign-in(.*)',
    '/auth/sign-up(.*)',
    '/api(.*)',
]);

export default clerkMiddleware((auth, request) => {
    // Si NO es ruta pública, proteger con auth
    if (!isPublicRoute(request)) {
        auth().protect();
    }
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};