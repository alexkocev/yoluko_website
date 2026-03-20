# Design System Document

## 1. Overview & Creative North Star: "The Neon Terminal"

This design system is engineered for a high-converting AI & Automation agency, drawing heavy inspiration from developer-centric, high-energy aesthetics. The **Creative North Star** is "The Neon Terminal"—a sophisticated blend of brutalist efficiency and vibrant, high-contrast energy. 

The system moves beyond the generic "SaaS template" by embracing a dark editorial feel. It utilizes intentional asymmetry, massive typography scales, and a "nested depth" philosophy that makes the interface feel like a premium, physical command center rather than a flat webpage. We emphasize authority through bold weight and clarity, while maintaining a playful, "tech-retro" edge that resonates with a modern developer and executive audience alike.

---

## 2. Colors: Tonal Depth & Radiant Accents

The palette is anchored in a deep, absolute darkness (`#0e0e0e`) to allow neon accents to vibrate against the surface.

### Surface Hierarchy & Nesting
We do not use borders to define containers. Instead, we use a **nested layer** strategy:
- **Base Layer:** `surface` (`#0e0e0e`) for the main background.
- **Sectional Shifts:** Use `surface_container_low` (`#131313`) for large content blocks to create a subtle shift in the environment.
- **Card Layers:** Use `surface_container` (`#1a1919`) or `surface_container_high` (`#201f1f`) to lift important elements.
- **The "No-Line" Rule:** Prohibit 1px solid borders for sectioning. Boundaries are created through background shifts or `3rem` (xl) spacing gaps.

### The "Glass & Gradient" Rule
To add a premium "soul," primary CTAs and hero highlights should use a subtle linear gradient from `primary` (`#ffdd7c`) to `primary_container` (`#fecb00`). For floating navigation or modal overlays, use `surface_container_highest` (`#262626`) with a **backdrop-blur** of `20px` and an opacity of `80%`.

---

### 3. Typography: Authority in Space

The system pairs the technical precision of **Inter** with the bold, aggressive personality of **Space Grotesk**.

- **Display (Space Grotesk):** Used for hero headlines. `display-lg` (3.5rem) should be used with a tight `letter-spacing: -0.02em` to create a "blocky," authoritative feel.
- **Headlines (Space Grotesk):** Used for section headers. They should feel loud and unavoidable.
- **Body (Inter):** Used for all long-form content. `body-lg` (1rem) is the standard for readability.
- **Labels (Space Grotesk):** `label-md` is the secret sauce. Use these for category tags above headlines, styled in all-caps with a `secondary` (`#ff6c95`) or `tertiary` (`#b5ffc2`) background to mimic a terminal tag.

---

## 4. Elevation & Depth: Tonal Layering

We reject traditional drop shadows in favor of **Ambient Light** and **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_highest` card sitting on a `surface` background provides enough contrast to imply elevation without visual clutter.
- **Ambient Shadows:** If a "floating" effect is mandatory (e.g., a hover state on a card), use a shadow with a `40px` blur, `0%` spread, and `6%` opacity using the `on_surface` color.
- **The "Ghost Border" Fallback:** For AI-driven card layouts, a "Ghost Border" may be used: `1px solid` using the `outline_variant` token at `15%` opacity. This creates a "tech" feel without creating a hard wall.
- **Glassmorphism:** Use semi-transparent `surface_variant` layers for "tech-retro" panels, allowing vibrant background illustrations to bleed through softly.

---

## 5. Components: Functional Brutalism

### Buttons
- **Primary:** High-contrast `primary` background with `on_primary_fixed` text. **Roundedness:** `full` (9999px). On hover, transition to `primary_dim` with a subtle outer glow using the primary color at 20% opacity.
- **Secondary:** `secondary` background with `on_secondary` text. Used for secondary CTAs like "View Case Studies."

### Cards
Cards are the backbone of this system. 
- **Style:** Background `surface_container`, `DEFAULT` (1rem) roundedness.
- **Header:** A bold `label-md` chip at the top left.
- **Content:** No dividers. Use `2rem` (6) spacing between title and body text.

### Inputs & Fields
- **Background:** `surface_container_highest`.
- **Border:** Ghost border (15% opacity `outline_variant`). 
- **Focus State:** Border becomes `100%` `primary` with a `2px` thickness.

### Chips (Category Labels)
- Rectangular with `sm` (0.5rem) roundedness. Use `secondary_container` for AI-related tags and `tertiary_container` for Automation tags.

---

## 6. Do's and Don'ts

### Do:
- **Do** use intentional asymmetry. Overlap an illustration across two different surface containers to create "locked" depth.
- **Do** use high-contrast color pairings (e.g., `secondary` text on a `surface` background).
- **Do** use the Spacing Scale strictly. Gaps of `5.5rem` (16) between major sections are required to let the dark "ink" of the background breathe.

### Don't:
- **Don't** use 1px solid, high-opacity white borders. It breaks the "Neon Terminal" immersion and feels like a cheap template.
- **Don't** use standard grey shadows. If you need depth, use background color shifts first.
- **Don't** center-align everything. The "tech-retro" feel is best achieved through left-aligned editorial layouts with bold, right-aligned accent imagery.
- **Don't** use generic stock photography. Use high-contrast, developer-friendly vector illustrations or "glitch-art" styled icons.