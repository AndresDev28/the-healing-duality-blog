# Design System Specification: The Healing Duality

## 1. Overview & Creative North Star: "The Breathing Canvas"
This design system is built upon the concept of **"The Breathing Canvas."** In the mental health space, digital interfaces often feel cluttered, clinical, or overly technical. Our goal is to reject the "app" aesthetic in favor of a "high-end editorial" experience. 

We move beyond standard grids by embracing **intentional asymmetry** and **expansive white space**. The UI should feel like a premium lifestyle magazine—calm, authoritative, and deeply human. We achieve this by breaking the rigid "box-model" layout: elements should overlap slightly, typography should vary drastically in scale to create a clear narrative path, and the background should feel like a continuous, living surface rather than a series of disconnected containers.

## 2. Colors & Surface Philosophy
The palette is rooted in nature and stillness. We use a "High-Value, Low-Contrast" approach to reduce cognitive load and visual noise.

### The Palette (Material Design Mapping)
*   **Background / Surface:** `#fbf9f9` (Off-white). The primary stage for all content.
*   **Primary (Action):** `#596244` (Moss Green). Used for focus and intent.
*   **Primary Container:** `#8e9775`. Use this for softer accent areas or large hero backgrounds.
*   **On-Surface (Typography):** `#1b1c1c` (Charcoal). Provides deep, grounding contrast.
*   **Tertiary:** `#70576a`. A muted plum/mauve for moments of reflection or secondary highlights.

### The "No-Line" Rule
**Strict Mandate:** Traditional 1px solid borders for sectioning are prohibited. 
Boundaries must be defined solely through background color shifts or whitespace. To separate a section, transition from `surface` to `surface-container-low` (#f5f3f3). This creates a "soft-edge" transition that feels organic rather than mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like fine paper stacked on a desk. 
*   **Layer 0 (Base):** `surface` (#fbf9f9).
*   **Layer 1 (Cards/Content Blocks):** `surface-container-lowest` (#ffffff). This provides a subtle "lift" against the off-white background.
*   **Layer 2 (Floating/Interactive):** `surface-bright` with 80% opacity and a `backdrop-blur` of 12px (Glassmorphism).

### The "Glass & Gradient" Rule
To avoid a flat, "template" look, use subtle radial gradients on hero backgrounds: Transitioning from `primary` (#596244) to `primary-container` (#8e9775) at a 45-degree angle. This adds "visual soul" and depth.

## 3. Typography: The Editorial Voice
Typography is the primary tool for emotional resonance. We use a high-contrast scale to guide the eye.

*   **Display & Headlines (Noto Serif):** These are the "Hero" elements. Use `display-lg` (3.5rem) for main landings. The serif font conveys wisdom, history, and elegance. Ensure letter-spacing is set to `-0.02em` for large headlines to maintain a "tight" editorial feel.
*   **Titles & Body (Manrope):** A modern, geometric sans-serif that ensures clarity and accessibility. `body-lg` (1rem) is our workhorse.
*   **The Narrative Hierarchy:**
    *   **Display-Lg:** For core brand pillars.
    *   **Headline-Md:** For section starters.
    *   **Label-Md:** Always in `uppercase` with `letter-spacing: 0.1em` to denote metadata or small headers.

## 4. Elevation & Depth: Tonal Layering
We reject the heavy drop shadows of the early 2010s. Elevation is achieved through light and tone.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. The difference in hex value creates the "lift."
*   **Ambient Shadows:** If a shadow is required (e.g., a floating Action Button), use:
    *   `box-shadow: 0 12px 32px rgba(60, 60, 60, 0.05);`
    *   The shadow must be tinted with the `on-surface` color, never pure black.
*   **The "Ghost Border":** For input fields or buttons that require containment, use `outline-variant` (#c7c7bb) at **20% opacity**. It should be felt, not seen.

## 5. Components
All components follow the **Roundedness Scale** `lg` (1rem) for containers and `full` for interactive pills.

*   **Buttons:**
    *   **Primary:** `primary` background with `on-primary` text. Shape: `full` (pill). No shadow.
    *   **Secondary:** `surface-container-lowest` background with a 10% `outline`.
*   **Cards:** Forbid divider lines. Use `spacing-8` (2.75rem) to separate content chunks within the card.
*   **Input Fields:** Ghost Borders only. Labels should use `label-md` and sit 0.5rem above the input. Use `surface-container-lowest` as the field fill to create a "recessed" look.
*   **Selection Chips:** Use `secondary-container` (#dae3c8) for active states. They should feel like soft organic pebbles.
*   **Progress Indicators:** Use a thick, 8px `primary` line with `surface-container-highest` as the track. Avoid thin, spindly loaders.

### Specialty Component: The "Reflection Mirror"
A custom container for quotes or journaling prompts. It uses the **Glassmorphism** rule: A semi-transparent `surface` background, `xl` (1.5rem) corner radius, and a subtle inner glow (1px white stroke at 30% opacity).

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is `spacing-12`, try a right margin of `spacing-24` for hero text to create editorial tension.
*   **Do** allow images to "break" the container. An image might overlap from a `surface-container` into the `surface` base.
*   **Do** use `display-lg` typography as a background element (low opacity) to create texture.

### Don’t:
*   **Don’t** use pure black (#000000) or pure white (#FFFFFF) except for the `surface-container-lowest` token.
*   **Don’t** use icons as primary navigation. Always accompany them with a `label-sm` to maintain the editorial clarity.
*   **Don’t** use "Alert Red" for warnings if possible. Use the `error` token (#ba1a1a) but soften it with a `error-container` (#ffdad6) background to keep the "Serene" promise.
*   **Don’t** use standard 12-column grids for everything. Think in "vignettes" and "spreads."