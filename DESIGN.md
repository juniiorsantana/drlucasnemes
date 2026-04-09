# Design System Document

## 1. Overview & Creative North Star: "The Clinical Editorial"

This design system is built to bridge the gap between rigorous medical precision and approachable wellness. We are moving away from the "generic medical template" by adopting a **Clinical Editorial** North Star. This direction treats digital interfaces like a high-end health journal: authoritative, spacious, and sophisticated.

The system breaks the standard grid through **intentional asymmetry**—offsetting imagery against text blocks—and **tonal layering**. We rely on the weight of professional typography and the depth of "physical" surfaces rather than digital lines to guide the eye. The result is an experience that feels custom-built for Dr. Lucas Nemes, radiating both the "trust" of a physician and the "vitality" of a nutrologist.

---

## 2. Colors

The palette is anchored in a commanding deep navy (`primary`) and a "Bio-Live" green (`secondary`) for action.

### Tonal Strategy
- **Primary Strategy:** Use `primary` (#000b36) for the most authoritative headers. Use `primary_container` (#001d66) for large section backgrounds to create a sense of deep immersion.
- **CTA Strategy:** The `secondary` (#006e20) and its variants are reserved exclusively for growth, health, and conversion.
- **The "No-Line" Rule:** To maintain a premium feel, **1px solid borders are prohibited for sectioning.** Use shifts in background tokens (e.g., transitioning from `surface` to `surface_container_low`) to define section boundaries. 
- **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. 
    - Base page: `surface` (#f8f9fa).
    - Content sections: `surface_container` (#edeeef).
    - Floating cards: `surface_container_lowest` (#ffffff).
- **The "Glass & Gradient" Rule:** For hero sections or floating navigation, use Glassmorphism. Apply `surface_container_lowest` at 70% opacity with a `24px` backdrop-blur. 
- **Signature Textures:** Use a subtle radial gradient on primary buttons: `primary` (#000b36) to `primary_container` (#001d66) at a 45-degree angle to provide "soul" and dimension.

---

## 3. Typography

The system utilizes a dual-font pairing to balance authority and readability.

- **Display & Headlines (Manrope):** Chosen for its modern, geometric structure. Use **Bold (700)** weight for `headline-lg` and `display-sm` to create an editorial anchor. The tight letter-spacing in headers communicates precision.
- **Body & Titles (Inter):** A workhorse for clarity. Use `body-lg` for clinical descriptions to ensure maximum legibility for patients.
- **Visual Hierarchy:**
    - **Authority:** `display-md` (Manrope) in `primary` color.
    - **Clarity:** `title-lg` (Inter) in `on_surface_variant` for sub-headers.
    - **Action:** `label-md` (Inter Bold) for button text and chips.

---

## 4. Elevation & Depth

We eschew "drop shadows" in favor of **Tonal Layering** and **Ambient Light**.

- **The Layering Principle:** Instead of a shadow, place a `surface_container_lowest` card on a `surface_container_low` background. The subtle contrast difference creates a "natural" lift.
- **Ambient Shadows:** When a card requires a floating effect (as seen in the "Services" cards), use an extra-diffused shadow:
    - `Blur: 40px | Y: 12px | Color: 4% opacity of on_surface`. 
    - This mimics natural light in a clean clinical environment.
- **The "Ghost Border" Fallback:** For input fields or cards on white backgrounds, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Apply to the "Agende sua Consulta" floating bar. Use a semi-transparent `secondary` or `surface` container to allow the high-quality nutrology photography to bleed through.

---

## 5. Components

### Buttons
- **Primary (Conversion):** Pill-shaped (`rounded-full`). Background: `secondary` (#006e20). Text: `on_secondary` (#ffffff). Include a subtle "glow" using a `secondary_container` shadow at 20% opacity.
- **Tertiary (Nav/Secondary):** Transparent background with `primary` text. Used for "Quem Sou Eu?" or "CRM" details.

### Cards
- **The Editorial Card:** High-quality photography on one side, clean `title-lg` and `body-md` on the other. 
- **Rule:** Forbid divider lines. Separate content using `32px` vertical padding (Spacing Scale) or a shift to `surface_container_highest`.

### Chips & Badges
- **Status Badges:** Used for "Etapa de Reequilíbrio." Use `primary_fixed` background with `on_primary_fixed` text. Pill-shaped, `label-sm` typography.

### Input Fields
- **Clinical Inputs:** Soft-rounded (`md: 0.75rem`). Use `surface_container_highest` for the fill. No border unless focused. Upon focus, use a `2px` `secondary` (green) ghost border at 40% opacity.

### Additional Suggested Component: The "Vitality Progressor"
- A bespoke horizontal step-indicator for the treatment journey. Use `secondary` for completed steps and `outline_variant` for upcoming steps, connected by a soft tonal line (not a solid black line).

---

## 6. Do's and Don'ts

### Do
- **Do** use high-resolution photography of fresh foods or clinical environments as the primary "visual weight" of the page.
- **Do** use asymmetrical layouts where text blocks overlap 10-15% of an image to create depth.
- **Do** use whitespace as a functional tool to separate clinical concepts.

### Don't
- **Don't** use 100% black (#000000) for text. Always use `on_surface` or `primary` to keep the palette sophisticated.
- **Don't** use standard `lg` or `xl` shadows. They look "cheap." Always use the custom Ambient Shadow values.
- **Don't** use sharp corners. Every element should have a minimum of `sm: 0.25rem` or `md: 0.75rem` roundedness to feel "welcoming."
- **Don't** use dividers between list items. Use the spacing scale to create clear mental models of separation.