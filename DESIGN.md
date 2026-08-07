---
name: Kavya Nagariya Portfolio
description: A pragmatic, build-first developer portfolio
colors:
  accent: "#333333"
  neutral-bg: "#0d0d0d"
  neutral-text: "#f2f2f2"
  neutral-muted: "#999999"
  neutral-border: "#262626"
typography:
  display:
    fontFamily: "'Playfair Display', serif"
    fontWeight: 400
  body:
    fontFamily: "'Inter', sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  pill-link:
    textColor: "{colors.neutral-muted}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  pill-link-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-text}"
---

# Design System: Kavya Nagariya Portfolio

## Overview

**Creative North Star: "The Developer's Ledger"**

This portfolio adopts a refined minimalism that uses darkness to strip away distractions and bring total focus to the work. It is a pragmatic, build-first environment that logs work like a ledger. It avoids flashy ornamentation in favor of scannability and structural clarity.

**Key Characteristics:**
- High-contrast, dark-mode first design
- Strict monochromatic palette with subtle gray accents
- High-legibility sans-serif body text paired with a classic serif display font
- Utilitarian UI components that stay out of the user's way

## Colors

The palette is strictly monochromatic and neutral, relying on contrast rather than hue.

### Primary
- **Subtle Accent** (#333333): Used sparingly for hover states and subtle highlights to provide depth against the deep black background without adding color.

### Neutral
- **Deep Background** (#0d0d0d): The core canvas. Absorbs light and provides maximum contrast for text.
- **Primary Text** (#f2f2f2): High-contrast white for all primary reading content.
- **Muted Text** (#999999): Used for secondary information, subtitles, and metadata.
- **Border & Divider** (#262626): Very subtle lines used to establish structure without adding visual noise.

**The Monochrome Doctrine Rule.** Do not introduce saturated color. Visual hierarchy must be established entirely through typography, spacing, and contrast.

## Typography

**Display Font:** Playfair Display, serif
**Body Font:** Inter, sans-serif

**Character:** The pairing creates a tension between the classic, editorial authority of Playfair Display and the modern, pragmatic engineering feel of Inter.

### Hierarchy
- **Display** (400 weight): Used for section titles and the hero name. Brings an editorial, authoritative feel.
- **Body** (400 weight, 1.6 line-height): Used for all descriptive text, bio points, and component labels. Highly legible and utilitarian.

## Layout

The layout uses a constrained single column (`max-width: 900px`) to keep the reading experience focused. Sections are separated by distinct horizontal dividers (`border-bottom: 1px dashed var(--border-color)` with `margin-bottom: 2rem`), reinforcing the "Ledger" metaphor. The Favourites section uses a CSS multi-column masonry layout for sketches and a CSS grid for media.

## Elevation & Depth

The system uses zero shadows. Depth is conveyed purely through tonal layering (e.g., `#0d0d0d` background vs `#333333` hover state) and structural borders.

**The Flat-By-Default Rule.** Surfaces are perfectly flat. Do not use `box-shadow` or gradients to simulate 3D depth.

## Shapes

Shapes are highly polarized: containers and imagery are strictly sharp-edged or slightly rounded, while interactive buttons (pills) are fully rounded (`9999px`) to instantly signal clickability.

## Components

Components are utilitarian and understated. They should feel like quiet tools that get out of the way.

### Pill Links (Contact/Social)
- **Shape:** Fully rounded (`9999px`)
- **Default State:** Transparent background, muted text (`#999999`), thin border (`#262626`)
- **Hover State:** Background shifts to the subtle accent (`#333333`), text brightens to primary white (`#f2f2f2`).

### Project Cards
- **Shape:** Softly rounded corners (`8px`)
- **Border:** Thin neutral border (`#262626`)
- **Hover State:** Border color lightens (`#999999`), slight upward transform (`translateY(-4px)`).

## Do's and Don'ts

### Do:
- **Do** use spacing and typography to separate content.
- **Do** maintain the strict monochromatic palette.

### Don't:
- **Don't** add shadows or glowing effects.
- **Don't** introduce new hues or colored accents unless specifically branding a third-party logo.
