# 🛠️ Plan de Implementación y Arquitectura Técnica

> **Complemento Oficial al PRD (`README.md`) para The Healing Duality Blog**
> Esta guía define de forma accionable la estrategia técnica, el ecosistema de componentes y las tácticas de SEO para construir un SSG de altísimo nivel, monetizado mediante AdSense, y libre de problemas de CLS (Cumulative Layout Shift).

---

## 1. Arquitectura Base y Ecosistema
- **Framework:** Next.js 14+ (App Router).
- **Estilos:** Tailwind CSS. Se utilizará un sistema de diseño premium: tipografía dual (jerarquía Serif para dar autoridad en títulos y Sans-Serif ultra-claro para cuerpos de texto) con una paleta de colores cálida/terrosa.
- **Motor de Contenidos:** **Velite** actuará como la Single Source of Truth para el contenido en Markdown/MDX. Proveerá tipado fuerte para los *frontmatters*, garantizando que no se suban artículos defectuosos (Esquema definido en `velite.config.ts`).

## 2. Componentes Clave (Capa de *Features*)
Se usará una arquitectura limpia separando componentes genéricos (`/ui`) de bloques de construcción específicos de negocio (`/features`):

- **`Hero.tsx`:** La cabecera principal que domina el *above the fold* y comunica instantáneamente la propuesta de valor.
- **`CategoryNav.tsx`:** Píldoras de filtrado (ej. *Trauma*, *Relaciones*) justo debajo del Hero. Un lugar estratégico para insertar el primer banner horizontal.
- **`PostGrid.tsx` & `PostCard.tsx`:** Grilla asimétrica (estilo *Bento* o *Masonry*) para artículos. **Fundamental:** Las tarjetas mostrarán el `readingTime` (calculado auto-mágicamente por Velite) para mejorar la expectativa y aumentar drásticamente la retención del usuario.
- **`NewsletterCTA.tsx`:** Bloque indispensable de captura de leads (tráfico propio sin depender del algoritmo).
- **`AdUnit.tsx`:** Componente maestro de monetización. Usará IDs de *prueba* definidos por variables de entorno (`NEXT_PUBLIC_ADSENSE_ID`) hasta que Google apruebe la cuenta final. Además, contará con dimensiones CSS pre-asignadas (`min-height`, `min-width`) para que el espacio se reserve inmediatamente y **prevenir por completo el Layout Shift**.

## 3. SEO, Performance y Retención (Táctica Avanzada)
El requerimiento primario es dominar el tráfico orgánico sin penalizar el rendimiento:
- **Esquema JSON-LD (`VideoObject`):** Al tener configurado el `videoID` en el MDX, inyectaremos un JSON-LD de tipo *VideoObject* dinámicamente en los artículos relevantes. Esto es crítico porque forzará a los resultados de búsqueda de Google a renderizar la miniatura del video de YouTube junto a nuestro dominio, **duplicando el CTR (Click-Through Rate)** y generando impacto visual en las SERPs.
- **Microdatos y Metadatos:** Generación dinámica y precisa del `sitemap.xml`, Canonical Tags y OpenGraph (Twitter Cards, vistas previas de WhatsApp).
- **Inyección de Anuncios Correcta:** Se delegará la hidratación asíncrona de los scripts de AdSense (estrategia `afterInteractive`) para garantizar un TTI (Time To Interactive) limpio, protegiendo las métricas Core Web Vitals y la validación ante "experiencia de usuario" de Google.

## 4. Rutas y Rutinas de Generación (App Router)
- **Home (`src/app/page.tsx`):** Ensamblaje estático con hidratación parcial (Hero -> Categorías -> Últimos Posts -> Newsletter).
- **Entrada de Blog (`src/app/blog/[slug]/page.tsx`):** Plantilla maestra que consume los datos tipados de Velite. Inyecta el `AdUnit` (bajo el H1, a la mitad del documento y antes de los comentarios) y renderiza el embed nativo de YouTube si existe el campo `videoID`.
- **Acerca de (`src/app/about/page.tsx`):** El factor de la confianza (E-E-A-T) comienza con la cara del autor. Se detalla la misión del canal y el enfoque de Andrés.
- **Legales (`/privacy`, `/terms`):** Elementos sine qua non. Un sitio sin estas rutas está condenado a que AdSense le rebote el proceso de revisión automático.

---

## 5. Plan de Pruebas Continuas (Verificación)
1. **Lighthouse CI & CLS Audit:** Realizar periódicamente tests locales en modo de producción (`npm run build` & `npm run start`) para atestiguar que el *Layout Shift* permanezca absoluto en 0.
2. **Validación de Datos (Schema-Driven):** Forzar a la terminal a validar de forma estricta los documentos en `/content`. Si a un artículo le falta el H1 SEO o la imagen base, la _build_ fallará evitando subir un SEO pobre.
3. **Simulacro de Anuncios:** Usar IDs ficticios y herramientas de simule para cerciorarse de que el diseño se mantenga hermoso incluso si los anuncios fallan o son detenidos por un AdBlock de parte del lector.
