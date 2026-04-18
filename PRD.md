# 📄 PRD - Documento de Requisitos del Producto
## The Healing Duality Blog

> **Versión:** 1.0  
> **Fecha:** 18 de abril de 2026  
> **Estado:** En desarrollo - Fases 1-3 completadas, Fases 4-10 pendientes

---

## 🎯 1. Visión y Objetivos del Producto

### Visión
The Healing Duality Blog es una extensión digital del canal de YouTube "The Healing Duality" de Andreína Fernández. El objetivo es transformar insights de video en artículos SEO-optimizados que capturen tráfico orgánico y se monetizen a través de Google AdSense con costos de infraestructura de $0.

### Objetivos Principales
1. **Rendimiento:** Score 90+ en Google PageSpeed (Mobile y Desktop)
2. **SEO Dominante:** JSON-LD automático, sitemap dinámico, y etiquetas OpenGraph
3. **Monetización Sostenible:** Colocación estratégica de AdSense sin afectar la experiencia de usuario
4. **Contenido como Código:** Enfoque SDD (Spec-Driven Development) con archivos MDX en `/content`
5. **Confianza E-E-A-T:** Páginas de autor y legales que cumplen con los estándares de calidad de Google

---

## 👥 2. Audiencia Objetivo

### Primaria
- **Buscadores de Bienestar Emocional:** Personas buscando contenido sobre psicología, trauma, relaciones y crecimiento personal
- **Suscritos del Canal de YouTube:** Espectadores que prefieren leer contenido detallado complementario a los videos

### Secundaria
- **Profesionales de Salud Mental:** Terapeutas y consejeros buscando recursos para compartir con pacientes
- **Investigadores de Psicología:** Personas buscando información respaldada con evidencia

---

## 📋 3. Fases del Proyecto

| Fase | Nombre | Estado | Tickets |
|------|--------|--------|---------|
| Fase 1 | Foundation & Scaffolding | ✅ COMPLETADA | 3 |
| Fase 2 | Design System | ✅ COMPLETADA | 5 |
| Fase 3 | Content Engine & Blog Template | ✅ COMPLETADA | 4 |
| Fase 4 | Component Extraction & Refinement | ❌ PENDIENTE | 7 |
| Fase 5 | Navigation & Content Discovery | ❌ PENDIENTE | 5 |
| Fase 6 | Trust & Legal Pages | ❌ PENDIENTE | 3 |
| Fase 7 | Advanced SEO | ❌ PENDIENTE | 5 |
| Fase 8 | Monetization (AdSense) | ❌ PENDIENTE | 6 |
| Fase 9 | Lead Capture & Newsletter | ❌ PENDIENTE | 4 |
| Fase 10 | Polish & Launch | ❌ PENDIENTE | 5 |

**Total de Tickets:** 47

---

## 🏗️ FASE 1: Foundation & Scaffolding [✅ COMPLETADA]

### User Stories

**Como desarrollador**, quiero establecer el proyecto Next.js con configuración base, para tener un punto de partida sólido para el desarrollo.

**Como desarrollador**, quiero configurar Velite como motor de contenidos, para tener tipado fuerte en los frontmatters de los posts.

**Como desarrollador**, quiero configurar Tailwind CSS v4, para tener un sistema de estilos moderno y escalable.

### Tickets

### THD-001: Inicializar proyecto Next.js con App Router
**Priority:** Must
**Story Points:** 8
**Status:** Done
**Dependencies:** Ninguna

**Description:**
Creación del proyecto Next.js 16.2.1 con App Router, configuración TypeScript modo estricto, y estructura de carpetas base.

**Acceptance Criteria:**
```gherkin
Feature: Inicialización del proyecto Next.js
  Scenario: Proyecto se ejecuta correctamente
    Given que el proyecto ha sido inicializado
    When ejecuto "npm run dev"
    Then la aplicación corre en http://localhost:3000
    And la ruta "/" muestra una página por defecto funcional
```

### THD-002: Configurar Velite como motor de contenidos
**Priority:** Must
**Story Points:** 5
**Status:** Done
**Dependencies:** THD-001

**Description:**
Instalación y configuración de Velite 0.3.1 con esquema de posts validado (title, description, date, image, videoID, tags).

**Acceptance Criteria:**
```gherkin
Feature: Configuración de Velite
  Scenario: Velite valida correctamente los posts
    Given que existe un archivo MDX en content/posts/
    When ejecuto la build
    Then el schema de Velite valida todos los campos requeridos
    And la build falla si falta algún campo requerido
```

### THD-003: Configurar Tailwind CSS v4 con @theme
**Priority:** Must
**Story Points:** 5
**Status:** Done
**Dependencies:** THD-001

**Description:**
Configuración de Tailwind CSS v4 con sintaxis @theme inline para tokens de diseño.

**Acceptance Criteria:**
```gherkin
Feature: Configuración de Tailwind CSS v4
  Scenario: Tailwind genera estilos correctamente
    Given que Tailwind v4 está configurado
    When ejecuto la build
    Then los estilos se generan correctamente
    And las clases de utility funcionan en los componentes
```

---

## 🎨 FASE 2: Design System [✅ COMPLETADA]

### User Stories

**Como usuario**, quiero una experiencia visual consistente y cálida, para sentirme cómodo leyendo el contenido.

**Como desarrollador**, quiero un sistema de diseño reutilizable, para mantener consistencia visual en toda la aplicación.

### Tickets

### THD-004: Definir paleta de colores de 11 tonos
**Priority:** Must
**Story Points:** 3
**Status:** Done
**Dependencies:** THD-003

**Description:**
Definición de paleta semántica de 11 colores con tonos cálidos/terrosos (primary, primary-container, secondary, surface, etc.).

**Acceptance Criteria:**
```gherkin
Feature: Paleta de colores semántica
  Scenario: Colores están definidos en el tema
    Given que el tema de Tailwind está configurado
    When uso clases de color semánticas
    Then los colores correspondientes se aplican correctamente
    And hay 11 colores únicos definidos
```

### THD-005: Configurar tipografía dual (Noto Serif + Manrope)
**Priority:** Must
**Story Points:** 5
**Status:** Done
**Dependencies:** THD-004

**Description:**
Configuración de tipografía dual: Noto Serif para títulos y Manrope para cuerpo de texto con jerarquía visual clara.

**Acceptance Criteria:**
```gherkin
Feature: Tipografía dual configurada
  Scenario: Tipografías se aplican correctamente
    Given que las tipografías están configuradas
    When renderizo un título
    Then se usa Noto Serif
    When renderizo texto de cuerpo
    Then se usa Manrope
```

### THD-006: Implementar utilidades .glass-panel y .editorial-shadow
**Priority:** Should
**Story Points:** 3
**Status:** Done
**Dependencies:** THD-004

**Description:**
Creación de utilidades CSS personalizadas para efectos de glassmorphism y sombras editoriales elegantes.

**Acceptance Criteria:**
```gherkin
Feature: Utilidades personalizadas
  Scenario: Utilidades funcionan correctamente
    Given que las utilidades están definidas
    When aplico la clase .glass-panel
    Then el efecto de glassmorphism se muestra
    When aplico la clase .editorial-shadow
    Then la sombra editorial se muestra
```

### THD-007: Implementar sistema de espaciado responsive
**Priority:** Should
**Story Points:** 3
**Status:** Done
**Dependencies:** THD-004

**Description:**
Definición de tokens de espaciado consistentes para margin, padding, y gap responsive.

**Acceptance Criteria:**
```gherkin
Feature: Sistema de espaciado responsive
  Scenario: Espaciado funciona en todos los breakpoints
    Given que el espaciado está definido
    When veo la página en móvil
    Then el espaciado se ajusta correctamente
    When veo la página en desktop
    Then el espaciado se ajusta correctamente
```

### THD-008: Implementar border-radius y rounded-pill tokens
**Priority:** Could
**Story Points:** 2
**Status:** Done
**Dependencies:** THD-004

**Description:**
Definición de tokens para border-radius consistentes incluyendo rounded-pill para botones.

**Acceptance Criteria:**
```gherkin
Feature: Tokens de border-radius
  Scenario: Border-radius se aplica correctamente
    Given que los tokens están definidos
    When aplico una clase de border-radius
    Then el radio de borde se aplica correctamente
```

---

## ✍️ FASE 3: Content Engine & Blog Template [✅ COMPLETADA]

### User Stories

**Como autor**, quiero crear posts en formato MDX con frontmatter tipado, para tener garantías de calidad de contenido.

**Como lector**, quiero ver posts formateados con soporte para video de YouTube, para tener una experiencia enriquecida.

**Como lector**, quiero ver citas destacadas con estilo glassmórfico, para resaltar insights importantes.

### Tickets

### THD-009: Implementar MDXRenderer con componentes personalizados
**Priority:** Must
**Status:** Done
**Dependencies:** THD-002, THD-006

**Description:**
Componente MDXRenderer que renderiza contenido MDX con componentes personalizados para headings, listas, blockquotes, etc.

**Acceptance Criteria:**
```gherkin
Feature: MDXRenderer con componentes personalizados
  Scenario: MDX se renderiza con estilos personalizados
    Given que tengo un post MDX
    Cuando renderizo el post
    Entonces los headings tienen estilos de Noto Serif
    Y las listas tienen espaciado adecuado
    Y los blockquotes tienen estilo especial
```

### THD-010: Implementar componente YouTube embed
**Priority:** Must
**Status:** Done
**Dependencies:** THD-009

**Description:**
Componente YouTube.tsx que incrusta videos de YouTube con videoID desde el frontmatter.

**Acceptance Criteria:**
```gherkin
Feature: Componente YouTube embed
  Scenario: Video de YouTube se incrusta correctamente
    Given que un post tiene videoID definido
    When renderizo el post
    Then el video de YouTube se muestra incrustado
    And el video es responsive
```

### THD-011: Implementar ReflectionMirror para citas destacadas
**Priority:** Should
**Status:** Done
**Dependencies:** THD-009

**Description:**
Componente ReflectionMirror con estilo glassmórfico para resaltar citas importantes dentro de los posts.

**Acceptance Criteria:**
```gherkin
Feature: Componente ReflectionMirror
  Scenario: Citation se muestra con estilo glassmórfico
    Given que uso el componente ReflectionMirror en MDX
    When renderizo el post
    Then la cita tiene efecto glassmórfico
    And el texto está resaltado visualmente
```

### THD-012: Crear plantilla de página de blog dinámica
**Priority:** Must
**Status:** Done
**Dependencies:** THD-009, THD-010, THD-011

**Description:**
Página `/blog/[slug]/page.tsx` que renderiza posts con MDX, metadata SEO, y soporte para video.

**Acceptance Criteria:**
```gherkin
Feature: Plantilla de blog dinámica
  Scenario: Página de post se genera correctamente
    Given que existe un post MDX con slug válido
    When navego a /blog/{slug}
    Then el post se renderiza con MDX
    And el título y descripción SEO están configurados
    And el video se incrusta si existe videoID
```

---

## 🔧 FASE 4: Component Extraction & Refinement [❌ PENDIENTE]

### User Stories

**Como desarrollador**, quiero extraer componentes reutilizables del código inline, para mantener un códigobase limpio y mantenible.

**Como desarrollador**, quiero componentes UI base en `/components/ui/`, para tener un foundation sólido.

### Tickets

### THD-013: Extraer Hero.tsx del inline en homepage
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Extraer la sección Hero del código inline en `src/app/page.tsx` a un componente reutilizable `Hero.tsx` en `src/components/features/`.

**Acceptance Criteria:**
```gherkin
Feature: Componente Hero extraído
  Scenario: Hero se renderiza como componente independiente
    Given que el componente Hero.tsx existe
    When importo y uso Hero en la homepage
    Then el Hero se renderiza correctamente
    And el layout asimétrico se mantiene
    And el gradiente de fondo se muestra
```

### THD-014: Crear componente PostCard.tsx
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-013

**Description:**
Componente PostCard.tsx reutilizable para mostrar tarjetas de posts con imagen, título, extracto, y metadata.

**Acceptance Criteria:**
```gherkin
Feature: Componente PostCard
  Scenario: PostCard muestra información del post correctamente
    Given que el componente PostCard existe
    When paso un post como prop
    Then el título se muestra con Noto Serif
    And la imagen de portada se muestra
    And el extracto se muestra con Manrope
    And los metadatos (tags, fecha) se muestran
```

### THD-015: Crear componente PostGrid.tsx con layout Bento/Masonry
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-014

**Description:**
Componente PostGrid.tsx que organiza PostCards en una grilla asimétrica estilo Bento o Masonry.

**Acceptance Criteria:**
```gherkin
Feature: Componente PostGrid con layout Bento
  Scenario: PostGrid organiza tarjetas asimétricamente
    Given que el componente PostGrid existe
    When paso un array de posts
    Then las tarjetas se organizan en layout Bento
    And el layout es responsive (móvil: 1 col, desktop: 3 cols)
    And el espaciado entre tarjetas es consistente
```

### THD-016: Crear componente CategoryNav.tsx con píldoras de filtrado
**Priority:** Should
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-014

**Description:**
Componente CategoryNav.tsx que muestra píldoras de categorías/tags para filtrar posts.

**Acceptance Criteria:**
```gherkin
Feature: Componente CategoryNav
  Scenario: CategoryNav muestra píldoras de categorías
    Given que el componente CategoryNav existe
    When paso las categorías como prop
    Then las píldoras se muestran horizontalmente
    And las píldoras son scrollables en móvil
    And hay una píldora activa por defecto
```

### THD-017: Crear componentes UI base (Button, Card, Badge)
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Componentes UI base en `src/components/ui/` que sirven como foundation: Button, Card, Badge.

**Acceptance Criteria:**
```gherkin
Feature: Componentes UI base
  Scenario: Componentes UI base funcionan correctamente
    Given que Button, Card, y Badge existen
    When uso el componente Button
    Then tiene variantes (primary, secondary, ghost)
    When uso el componente Card
    Then soporta efectos hover y glass-panel
    When uso el componente Badge
    Then muestra el texto con estilo de píldora
```

### THD-018: Extraer y refactorizar código inline de preview de posts
**Priority:** Should
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-014, THD-015

**Description:**
Reemplazar el código inline de preview de posts en homepage con componentes PostGrid y PostCard.

**Acceptance Criteria:**
```gherkin
Feature: Preview de posts refactorizado
  Scenario: Preview usa PostGrid y PostCard
    Given que la homepage se ha refactorizado
    When visito la página de inicio
    Then la sección de preview usa PostGrid
    And cada post se muestra con PostCard
    And el código inline ha sido eliminado
```

### THD-019: Crear componente AdUnit.tsx con prevención de CLS
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-017

**Description:**
Componente AdUnit.tsx para mostrar anuncios AdSense con min-height y min-width para prevenir Cumulative Layout Shift.

**Acceptance Criteria:**
```gherkin
Feature: Componente AdUnit con prevención de CLS
  Scenario: AdUnit reserva espacio antes de cargar
    Given que el componente AdUnit existe
    When renderizo un AdUnit
    Then el espacio está reservado con min-height
    And el espacio está reservado con min-width
    And no hay layout shift cuando el anuncio carga
    And hay un placeholder mientras el anuncio no carga
```

---

## 🔍 FASE 5: Navigation & Content Discovery [❌ PENDIENTE]

### User Stories

**Como lector**, quiero navegar fácilmente entre categorías de contenido, para encontrar artículos relevantes rápidamente.

**Como lector**, quiero ver posts relacionados al final de cada artículo, para continuar explorando contenido similar.

### Tickets

### THD-020: Integrar CategoryNav en homepage
**Priority:** Should
**Story Points:** 2
**Status:** To Do
**Dependencies:** THD-016

**Description:**
Integrar el componente CategoryNav en la homepage debajo del Hero para permitir filtrado de posts.

**Acceptance Criteria:**
```gherkin
Feature: CategoryNav en homepage
  Scenario: CategoryNav se muestra en homepage
    Given que CategoryNav está integrado
    When visito la homepage
    Then CategoryNav aparece debajo del Hero
    And las píldoras son interactivas
    And seleccionar una categoría filtra los posts
```

### THD-021: Implementar funcionalidad de filtrado por categoría
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-020

**Description:**
Implementar lógica de filtrado de posts por categoría en la homepage usando URL params o estado local.

**Acceptance Criteria:**
```gherkin
Feature: Filtrado por categoría
  Scenario: Filtrado funciona correctamente
    Given que hay múltiples posts con diferentes categorías
    When selecciono la categoría "Trauma"
    Then solo se muestran posts con tag "Trauma"
    And la píldora "Trauma" está activa
    When selecciono "Todas"
    Then se muestran todos los posts
```

### THD-022: Crear sección de posts relacionados en página de blog
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-014

**Description:**
Sección en `/blog/[slug]/page.tsx` que muestra posts relacionados basados en tags del post actual.

**Acceptance Criteria:**
```gherkin
Feature: Posts relacionados
  Scenario: Posts relacionados se muestran correctamente
    Given que estoy viendo un post con tags ["Trauma", "Sanación"]
    When scrolleo al final del post
    Then se muestran posts con al menos un tag coincidente
    And se muestran máximo 3 posts relacionados
    And el post actual no se repite
```

### THD-023: Implementar breadcrumbs de navegación
**Priority:** Could
**Story Points:** 3
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Componente Breadcrumbs que muestra la jerarquía de navegación en páginas de blog.

**Acceptance Criteria:**
```gherkin
Feature: Breadcrumbs de navegación
  Scenario: Breadcrumbs muestran la ruta correcta
    Given que estoy en una página de blog
    Then veo "Home > Blog > Título del Post"
    When hago clic en "Home"
    Then navego a la homepage
    When hago clic en "Blog"
    Then navego a la sección de blog
```

### THD-024: Crear componente de búsqueda de posts
**Priority:** Could
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-014

**Description:**
Componente SearchBox que permite buscar posts por título y contenido con filtrado en tiempo real.

**Acceptance Criteria:**
```gherkin
Feature: Búsqueda de posts
  Scenario: Búsqueda funciona en tiempo real
    Given que el componente SearchBox existe
    When escribo "trauma" en el buscador
    Then se muestran posts que contienen "trauma" en título o extracto
    And los resultados se actualizan mientras escribo
    And no hay resultados si no hay coincidencias
```

---

## 🛡️ FASE 6: Trust & Legal Pages [❌ PENDIENTE]

### User Stories

**Como usuario**, quiero conocer al autor del blog, para confiar en la calidad del contenido (factor E-E-A-T).

**Como usuario**, quiero ver políticas de privacidad y términos claros, para sentirme seguro usando el sitio.

**Como propietario del sitio**, quiero cumplir con los requisitos de AdSense para que Google no rechace la solicitud de monetización.

### Tickets

### THD-025: Crear página About con perfil de autor
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Página `/about/page.tsx` con perfil de Andreína Fernández, misión del canal, y experiencia (factor E-E-A-T para SEO).

**Acceptance Criteria:**
```gherkin
Feature: Página About con perfil de autor
  Scenario: Página About muestra información del autor
    Given que navego a /about
    Then veo la foto de Andreína Fernández
    And veo su biografía y experiencia
    And veo la misión del canal
    And veo enlaces a redes sociales
```

### THD-026: Crear página Privacy Policy
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Página `/privacy/page.tsx` con política de privacidad que cumple con los requisitos de AdSense (requisito OBLIGATORIO).

**Acceptance Criteria:**
```gherkin
Feature: Página Privacy Policy
  Scenario: Privacy Policy cumple con AdSense
    Given que navego a /privacy
    Then veo la política de privacidad completa
    And se menciona el uso de cookies de Google AdSense
    And se explica la recolección de datos
    And se mencionan los derechos del usuario
```

### THD-027: Crear página Terms of Service
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-026

**Description:**
Página `/terms/page.tsx` con términos y condiciones de uso del sitio (requisito OBLIGATORIO para AdSense).

**Acceptance Criteria:**
```gherkin
Feature: Página Terms of Service
  Scenario: Terms of Service cumple con AdSense
    Given que navego a /terms
    Then veo los términos y condiciones completos
    And se mencionan los límites de responsabilidad
    And se explican las reglas de uso del contenido
    And hay información sobre derechos de autor
```

---

## 🚀 FASE 7: Advanced SEO [❌ PENDIENTE]

### User Stories

**Como propietario del sitio**, quiero que Google entienda mi contenido con structured data, para mejorar el CTR en SERPs.

**Como propietario del sitio**, quiero un sitemap.xml dinámico, para que Google descubra y indexe todos mis posts rápidamente.

**Como propietario del sitio**, quiero canonical tags correctos, para evitar problemas de contenido duplicado.

### Tickets

### THD-028: Implementar JSON-LD VideoObject schema
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Inyección dinámica de JSON-LD VideoObject schema en posts que tienen videoID definido (duplica CTR en SERPs).

**Acceptance Criteria:**
```gherkin
Feature: JSON-LD VideoObject schema
  Scenario: VideoObject se inyecta para posts con video
    Given que un post tiene videoID definido
    When visito la página del post
    Then el JSON-LD VideoObject está en el HTML
    And el schema incluye nombre, descripción, thumbnailUrl, uploadDate
    And Google puede parsear el structured data
```

### THD-029: Implementar JSON-LD Article schema
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-028

**Description:**
Inyección dinámica de JSON-LD Article schema para todos los posts (mejora visibilidad en Google News).

**Acceptance Criteria:**
```gherkin
Feature: JSON-LD Article schema
  Scenario: Article schema se inyecta para todos los posts
    Given que visito una página de blog
    Then el JSON-LD Article está en el HTML
    And el schema incluye headline, author, datePublished, image
    And el schema está validado según Google
```

### THD-030: Implementar generación dinámica de sitemap.xml
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-002

**Description:**
Generación dinámica de sitemap.xml que incluye todas las páginas del sitio (home, about, posts) con fechas de última modificación.

**Acceptance Criteria:**
```gherkin
Feature: Generación dinámica de sitemap.xml
  Scenario: Sitemap incluye todas las URLs del sitio
    Given que hay posts publicados en Velite
    When visito /sitemap.xml
    Then veo URLs para homepage, about, y cada post
    And cada URL tiene fecha de última modificación
    And las URLs de posts no publicados no aparecen
```

### THD-031: Implementar robots.txt
**Priority:** Should
**Story Points:** 1
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Archivo `public/robots.txt` que permite indexación de Google y otras crawlers.

**Acceptance Criteria:**
```gherkin
Feature: Archivo robots.txt
  Scenario: robots.txt permite indexación
    When visito /robots.txt
    Then veo User-agent: *
    And Allow: /
    And veo el sitemap.xml apuntando a /sitemap.xml
```

### THD-032: Implementar canonical tags en todas las páginas
**Priority:** Should
**Story Points:** 3
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Implementar canonical tags en todas las páginas para evitar problemas de contenido duplicado.

**Acceptance Criteria:**
```gherkin
Feature: Canonical tags
  Scenario: Canonical tags apuntan a la URL correcta
    Given que visito una página de blog
    Then el canonical tag está en el head
    And el canonical apunta a la URL absoluta del post
    And no hay duplicados de canonical tags
```

---

## 💰 FASE 8: Monetization (AdSense) [❌ PENDIENTE]

### User Stories

**Como propietario del sitio**, quiero colocar anuncios de manera estratégica, para maximizar ingresos sin afectar la experiencia de usuario.

**Como propietario del sitio**, quiero que los anuncios se carguen async, para mantener un buen score en Core Web Vitals.

**Como usuario**, quiero que el sitio funcione bien incluso si tengo un AdBlock activado.

### Tickets

### THD-033: Configurar variable de entorno NEXT_PUBLIC_ADSENSE_ID
**Priority:** Must
**Story Points:** 1
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Configurar variable de entorno para el ID de AdSense que permite cambiar entre IDs de prueba y producción.

**Acceptance Criteria:**
```gherkin
Feature: Variable de entorno AdSense ID
  Scenario: AdSense ID está configurado
    Given que NEXT_PUBLIC_ADSENSE_ID está en .env
    When la aplicación inicia
    Then el ID se lee correctamente
    And el ID se puede cambiar sin modificar código
```

### THD-034: Implementar inyección de script AdSense con strategy afterInteractive
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-033

**Description:**
Inyección asíncrona del script de AdSense con strategy afterInteractive para no bloquear la carga inicial.

**Acceptance Criteria:**
```gherkin
Feature: Script AdSense con estrategia afterInteractive
  Scenario: Script de AdSense se carga async
    Given que visito cualquier página
    Then el script de AdSense está en el HTML
    And el script tiene strategy="afterInteractive"
    And la carga del script no bloquea el renderizado inicial
```

### THD-035: Implementar estrategia de colocación de anuncios
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-019, THD-034

**Description:**
Estrategia de 3 ubicaciones de anuncios: (1) debajo del H1 en posts, (2) a la mitad del contenido, (3) en el footer de posts.

**Acceptance Criteria:**
```gherkin
Feature: Estrategia de colocación de anuncios
  Scenario: Anuncios aparecen en las ubicaciones correctas
    Given que visito una página de blog
    Then veo un anuncio debajo del H1
    And veo un anuncio a la mitad del contenido
    And veo un anuncio en el footer del post
    And los anuncios no interfieren con la lectura
```

### THD-036: Implementar AdUnit en homepage debajo del Hero
**Priority:** Should
**Story Points:** 2
**Status:** To Do
**Dependencies:** THD-019, THD-034

**Description:**
Colocar AdUnit horizontal en la homepage debajo del Hero para monetizar tráfico de alta intencionalidad.

**Acceptance Criteria:**
```gherkin
Feature: AdUnit en homepage
  Scenario: AdUnit se muestra debajo del Hero
    Given que visito la homepage
    Then veo un AdUnit debajo del Hero
    And el anuncio es responsive
    And el espacio está reservado con CLS prevention
```

### THD-037: Implementar fallback para cuando los anuncios no cargan
**Priority:** Should
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-019

**Description:**
Fallback visual elegante cuando los anuncios fallan o son bloqueados por AdBlock.

**Acceptance Criteria:**
```gherkin
Feature: Fallback para anuncios que no cargan
  Scenario: Fallback se muestra cuando el anuncio falla
    Given que un anuncio no carga
    Then se muestra un placeholder elegante
    And el placeholder indica que es un espacio publicitario
    And el layout no se rompe
```

### THD-038: Validar cumplimiento de AdSense Policy
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-025, THD-026, THD-027, THD-035

**Description:**
Revisión y validación que el sitio cumple con todas las políticas de AdSense (contenido, navegación, páginas legales).

**Acceptance Criteria:**
```gherkin
Feature: Cumplimiento de AdSense Policy
  Scenario: Sitio cumple con políticas de AdSense
    Given que todas las páginas requeridas existen
    Then hay página Privacy Policy
    And hay página Terms of Service
    And hay página About con información del autor
    And el contenido no viola políticas de AdSense
    And la navegación es clara e intuitiva
```

---

## 📧 FASE 9: Lead Capture & Newsletter [❌ PENDIENTE]

### User Stories

**Como propietario del sitio**, quiero capturar emails de suscriptores, para construir una audiencia propia sin depender del algoritmo.

**Como usuario**, quiero suscribirme a un newsletter, para recibir contenido nuevo directamente en mi inbox.

### Tickets

### THD-039: Crear componente NewsletterCTA.tsx
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-017

**Description:**
Componente NewsletterCTA con formulario de captura de email, título persuasivo, y diseño atractivo.

**Acceptance Criteria:**
```gherkin
Feature: Componente NewsletterCTA
  Scenario: NewsletterCTA se muestra correctamente
    Given que el componente NewsletterCTA existe
    Then hay un campo de input para email
    And hay un botón de suscripción
    And hay un texto persuasivo describiendo los beneficios
    And el diseño coincide con el sistema de diseño
```

### THD-040: Integrar NewsletterCTA en homepage (bottom)
**Priority:** Should
**Story Points:** 2
**Status:** To Do
**Dependencies:** THD-039

**Description:**
Colocar NewsletterCTA al final de la homepage para capturar leads de usuarios que llegan al footer.

**Acceptance Criteria:**
```gherkin
Feature: NewsletterCTA en homepage
  Scenario: NewsletterCTA aparece al final de la homepage
    Given que visito la homepage
    Cuando scrolleo al final de la página
    Entonces veo el NewsletterCTA
    Y el CTA es visible y llamativo
```

### THD-041: Integrar NewsletterCTA en páginas de blog
**Priority:** Should
**Story Points:** 2
**Status:** To Do
**Dependencies:** THD-039

**Description:**
Colocar NewsletterCTA en páginas de blog después del contenido principal pero antes de posts relacionados.

**Acceptance Criteria:**
```gherkin
Feature: NewsletterCTA en páginas de blog
  Scenario: NewsletterCTA aparece en páginas de blog
    Given que visito una página de blog
    Cuando scrolleo después del contenido principal
    Entonces veo el NewsletterCTA
    Y el CTA es contextual al tema del post
```

### THD-042: Implementar validación de email y feedback visual
**Priority:** Could
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-039

**Description:**
Validación de formato de email en el formulario y feedback visual de éxito/error.

**Acceptance Criteria:**
```gherkin
Feature: Validación de email y feedback visual
  Scenario: Validación de email funciona
    Given que lleno el formulario con email inválido
    Cuando intento suscribirme
    Entonces veo un mensaje de error
    Y el campo de email está resaltado
  Scenario: Suscripción exitosa muestra feedback
    Given que lleno el formulario con email válido
    Cuando me suscribo
    Entonces veo un mensaje de éxito
    Y el formulario muestra un estado de éxito
```

---

## ✨ FASE 10: Polish & Launch [❌ PENDIENTE]

### User Stories

**Como usuario**, quiero que el sitio sea accesible y usable en todos los dispositivos, para tener una experiencia consistente.

**Como propietario del sitio**, quiero que el sitio tenga performance excelente, para mejorar el ranking en Google.

**Como propietario del sitio**, quiero que el sitio esté listo para producción, para lanzarlo y empezar a monetizar.

### Tickets

### THD-043: Implementar tokens de dark mode
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-004

**Description:**
Definir tokens de colores para modo oscuro que complementan la paleta de modo claro.

**Acceptance Criteria:**
```gherkin
Feature: Tokens de dark mode
  Scenario: Tokens de dark mode están definidos
    Given que el tema está configurado
    Cuando activo dark mode
    Entonces los colores se adaptan al tema oscuro
    Y la legibilidad se mantiene
    Y la paleta sigue siendo cálida/terrosa
```

### THD-044: Implementar toggle de tema (light/dark)
**Priority:** Could
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-043

**Description:**
Componente ThemeToggle que permite al usuario cambiar entre modo claro y oscuro.

**Acceptance Criteria:**
```gherkin
Feature: Toggle de tema
  Scenario: Toggle de tema funciona correctamente
    Given que hay un componente ThemeToggle
    Cuando hago clic en el toggle
    Entonces el tema cambia entre light y dark
    Y la preferencia se guarda en localStorage
    Y la página no recarga al cambiar tema
```

### THD-045: Auditoría de accesibilidad (a11y)
**Priority:** Should
**Story Points:** 5
**Status:** To Do
**Dependencies:** Ninguna

**Description:**
Auditoría de accesibilidad para asegurar cumplimiento con WCAG 2.1 AA (contraste de colores, ARIA labels, navegación por teclado).

**Acceptance Criteria:**
```gherkin
Feature: Cumplimiento de WCAG 2.1 AA
  Scenario: Sitio cumple con estándares de accesibilidad
    Given que ejecuto una auditoría de accesibilidad
    Entonces no hay errores de contraste de color
    Y todos los elementos interactivos tienen ARIA labels
    Y la navegación por teclado funciona
    Y los formularios son accesibles
```

### THD-046: Validación de performance (90+ en PageSpeed)
**Priority:** Must
**Story Points:** 5
**Status:** To Do
**Dependencies:** THD-034

**Description:**
Optimización para alcanzar score 90+ en Google PageSpeed Insights (Mobile y Desktop).

**Acceptance Criteria:**
```gherkin
Feature: Performance 90+ en PageSpeed
  Scenario: Sitio alcanza score 90+ en PageSpeed
    Given que ejecuto Lighthouse
    Entonces el score Performance es 90+ en Mobile
    Y el score Performance es 90+ en Desktop
    Y CLS es menor a 0.1
    Y LCP es menor a 2.5s
    Y FID es menor a 100ms
```

### THD-047: Preparación para deploy en producción
**Priority:** Must
**Story Points:** 3
**Status:** To Do
**Dependencies:** THD-045, THD-046, THD-038

**Description:**
Preparación final del sitio para deploy en producción: revisión de variables de entorno, validación de todas las rutas, y check-list de lanzamiento.

**Acceptance Criteria:**
```gherkin
Feature: Preparación para producción
  Scenario: Sitio está listo para producción
    Given que todas las fases están completadas
    Entonces todas las variables de entorno están configuradas
    Y todas las rutas funcionan correctamente
    Y los anuncios de AdSense usan ID de producción
    Y el sitemap.xml está accesible
    Y el robots.txt está configurado
    Y el sitio se build sin errores
```

---

## 🗺️ 4. Mapa de Dependencias

```
Fase 1 (Foundation)
├─ THD-001 → THD-002 → THD-003

Fase 2 (Design System)
├─ THD-003 → THD-004 → THD-005
├─ THD-004 → THD-006, THD-007, THD-008

Fase 3 (Content Engine)
├─ THD-002, THD-006 → THD-009 → THD-010, THD-011
├─ THD-009, THD-010, THD-011 → THD-012

Fase 4 (Component Extraction)
├─ THD-017 → THD-019
├─ THD-013 → THD-014 → THD-015, THD-016
├─ THD-014, THD-015 → THD-018
├─ THD-017 → THD-019

Fase 5 (Navigation)
├─ THD-016 → THD-020 → THD-021
├─ THD-014 → THD-022
├─ THD-014 → THD-024

Fase 6 (Trust & Legal)
├─ THD-025 (independiente)
├─ THD-026 → THD-027

Fase 7 (Advanced SEO)
├─ THD-002 → THD-030
├─ THD-028 → THD-029
├─ THD-031 (independiente)
├─ THD-032 (independiente)

Fase 8 (Monetization)
├─ THD-033 → THD-034
├─ THD-019, THD-034 → THD-035, THD-036
├─ THD-019 → THD-037
├─ THD-025, THD-026, THD-027, THD-035 → THD-038

Fase 9 (Lead Capture)
├─ THD-017 → THD-039 → THD-040, THD-041
├─ THD-039 → THD-042

Fase 10 (Polish)
├─ THD-004 → THD-043 → THD-044
├─ THD-034 → THD-046
├─ THD-045, THD-046, THD-038 → THD-047
```

---

## 📊 5. Requisitos No Funcionales

### Performance
- **PageSpeed Score:** 90+ en Mobile y Desktop
- **Core Web Vitals:**
  - CLS (Cumulative Layout Shift): < 0.1
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - TBT (Total Blocking Time): < 300ms

### SEO
- **Structured Data:** JSON-LD validado según Google Schema.org
- **Meta Tags:** Todos los posts tienen title (max 60 chars), description (max 160 chars), OpenGraph, Twitter Cards
- **Canonical Tags:** Todas las páginas tienen canonical URL
- **Sitemap:** sitemap.xml actualizado automáticamente con cada build
- **Robots.txt:** Configurado para permitir indexación

### Accessibility
- **WCAG 2.1 AA:** Cumplimiento con estándares de accesibilidad
- **Keyboard Navigation:** Todo el sitio es navegable por teclado
- **Screen Readers:** ARIA labels en elementos interactivos
- **Color Contrast:** Ratio mínimo de 4.5:1 para texto normal

### Security
- **HTTPS:** Sitio servido exclusivamente sobre HTTPS (Vercel por defecto)
- **CSP:** Content Security Policy configurado (Vercel por defecto)
- **AdSense Policy:** Cumplimiento con todas las políticas de Google AdSense

### Maintainability
- **Code Quality:** Código limpio con ESLint y TypeScript strict mode
- **Documentation:** README.md, IMPLEMENTATION_PLAN.md, PRD.md actualizados
- **Git Workflow:** Commits con conventional commits y mensajes descriptivos

---

## 🚫 6. Fuera de Alcance

### Features NO incluidos en este PRD:

1. **Sistema de Comentarios:** No se implementará sistema de comentarios nativo. En el futuro podría integrarse Disqus o servicios similares.

2. **Sistema de Autenticación:** No hay planes para usuario registrado, login, o dashboard personal. El sitio es completamente público.

3. **Funcionalidad Social:** No habrá likes, shares, o interacciones sociales integradas en el sitio.

4. **CMS Headless:** El contenido se gestiona directamente en archivos MDX bajo control de versiones Git. No se usará CMS headless (Contentful, Sanity, etc.).

5. **Multilenguaje:** El sitio será mono-idioma (español) en esta versión. No hay planes de i18n.

6. **API Backend:** No se creará API REST o GraphQL. El sitio es puramente estático con SSG.

7. **Analytics Avanzado:** Más allá de Google Analytics básico (opcional), no se implementará tracking avanzado de eventos.

8. **Newsletter Real:** La funcionalidad de captura de emails es solo UI. No se integrará con servicio de email marketing (Mailchimp, ConvertKit) en esta versión.

9. **Paginación o Infinite Scroll:** El homepage mostrará todos los posts. No hay paginación.

10. **Dark Mode Automático:** No habrá detección automática de preferencia del sistema. El toggle será manual si se implementa.

---

## ⚠️ 7. Riesgos y Mitigaciones

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|-------------|------------|
| **AdSense rechaza la solicitud** | Alto | Media | Implementar todas las páginas legales (Privacy, Terms), contenido de calidad, y E-E-A-T (About page con autoridad) antes de aplicar |
| **Performance < 90 en PageSpeed** | Alto | Media | Implementar CLS prevention en AdUnit, lazy loading de imágenes, optimización de scripts, y auditoría con Lighthouse |
| **Layout Shift con anuncios** | Medio | Alta | Implementar min-height/min-width en AdUnit, reservar espacio antes de que carguen los anuncios |
| **Problemas de SEO con contenido duplicado** | Medio | Baja | Implementar canonical tags en todas las páginas, no permitir múltiples URLs para el mismo contenido |
| **Cambios en el API de Velite** | Bajo | Baja | Mantener Velite en versión fija, documentar el uso, estar atento a breaking changes en releases futuros |
| **Next.js breaking changes** | Medio | Baja | Mantener Next.js en versión fija (16.2.1), revisar notas de release antes de actualizar |
| **Bajo CTR en SERPs** | Alto | Media | Implementar JSON-LD VideoObject para posts con video, optimizar meta descriptions y titles |
| **AdBlockers bloquean ingresos** | Alto | Alta | Implementar fallback elegante en AdUnit, no depender exclusivamente de AdSense (newsletter para audiencia propia) |
| **Problemas de accesibilidad** | Medio | Baja | Ejecutar auditorías de accesibilidad periódicas, usar herramientas como axe DevTools |
| **Velocidad de build crece con muchos posts** | Bajo | Baja | Velite es eficiente, pero monitorizar tiempo de build. Si se vuelve lento, considerar ISR (Incremental Static Regeneration) |

---

## 📈 8. Métricas de Éxito

### Métricas Técnicas
- PageSpeed Score: 90+ (Mobile y Desktop)
- CLS: < 0.1
- LCP: < 2.5s
- Tamaño total de bundle: < 200KB (gzipped)

### Métricas de Negocio
- Tráfico Orgánico: +100% en los primeros 6 meses
- CTR en SERPs: +50% con JSON-LD VideoObject
- Tasa de rebote: < 70%
- Tiempo en página: > 2 minutos
- Suscriptores de newsletter: 100+ en los primeros 3 meses

### Métricas de Monetización
- AdSense CPC: > $0.10 promedio
- RPM (Revenue per Mille): > $5.00
- Ingresos mensuales: > $100 después de 6 meses

---

## 📝 9. Convenciones de Notación

### Prioridades
- **Must:** Requisito obligatorio para el lanzamiento
- **Should:** Importante pero puede posponerse
- **Could:** Nice-to-have, bajo prioridad

### Story Points (Fibonacci)
- **1:** Muy simple, menos de 1 hora
- **2:** Simple, 1-2 horas
- **3:** Moderado, 2-4 horas
- **5:** Complejo, 4-8 horas
- **8:** Muy complejo, 1-2 días
- **13:** Extremadamente complejo, 2-3 días

### Estado de Tickets
- **Done:** Completado y verificado
- **In Progress:** En desarrollo activo
- **To Do:** Pendiente de desarrollo

---

## 🎯 10. Roadmap de Entrega

### Q2 2026 (Abril - Junio)
- **Fase 4:** Component Extraction & Refinement
- **Fase 5:** Navigation & Content Discovery
- **Fase 6:** Trust & Legal Pages

### Q3 2026 (Julio - Septiembre)
- **Fase 7:** Advanced SEO
- **Fase 8:** Monetization (AdSense)
- Solicitud de AdSense y aprobación

### Q4 2026 (Octubre - Diciembre)
- **Fase 9:** Lead Capture & Newsletter
- **Fase 10:** Polish & Launch
- Lanzamiento oficial del sitio

---

## 📄 11. Documentación Relacionada

- **README.md:** Visión general del proyecto y objetivos
- **IMPLEMENTATION_PLAN.md:** Arquitectura técnica y ecosistema de componentes
- **velite.config.ts:** Esquema de contenido y validación
- **package.json:** Dependencias y scripts del proyecto

---

## 🔄 12. Historial de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 18/04/2026 | PRD inicial con todas las fases y tickets definidos |

---

*Este PRD es un documento vivo. Se actualizará a medida que evolucione el proyecto y surjan nuevos requerimientos.*

---

**Creado con ❤️ para The Healing Duality Blog**  
*Bridging Psychology, Spirituality, and Technology*
