# Dashboard Camera (Frontend)

Aplicación React + Vite para visualizar el dashboard de cámaras.

## Requisitos
- Node.js ≥ 18
- npm ≥ 9

## Stack
- React 19, Vite 7
- React Router 6
- Tailwind CSS (v4) + PostCSS
- Heroicons

## Scripts
- Desarrollo: `npm run dev` (http://localhost:5173)
- Build producción: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Estructura
- `src/components/` Sidebar, Topbar, Card, CameraCard
- `src/pages/` Home, Cámaras, Alertas, Ajustes, NotFound
- `src/styles/` global.css (estilos base)
- `src/index.css` Tailwind
- `public/` favicon y estáticos

## Personalización rápida
- Logo de la esquina: `src/logo.png` (PNG con fondo transparente)
- Favicon: `public/favicon.png`
- Colores/base: `tailwind.config.js`

## Funciones actuales
- Layout a pantalla completa (botón en la barra superior)
- Sidebar compacta por iconos
- Tarjetas de estado y grilla de cámaras (placeholders)

## Próximos pasos (sugerencias)
- Integrar streams (HLS mediante `<video>` o reproductor hls.js)
- Estado global (Zustand/Redux) para cámaras y alertas
- Internacionalización (es/en)
- Autenticación y roles
- Pruebas (Vitest/RTL)

## Convenciones
- Componentes en PascalCase
- Hooks en `src/hooks/` (prefijo `use`)
- Servicios HTTP en `src/services/`
