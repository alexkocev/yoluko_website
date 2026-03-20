# Font Setup Summary

## Fonts Used

1. **Poppins** - Used for all headings (h1, h2, h3, h4, h5, h6)
2. **Inter** - Used for body text and all other text elements

Both fonts are loaded from Google Fonts using Next.js font optimization.

---

## Implementation Steps

### 1. Install Fonts (Next.js automatically handles this)

No installation needed - Next.js downloads fonts from Google Fonts at build time.

### 2. Configure Fonts in `layout.tsx`

Add the font imports and configuration at the top of your root layout file:

```typescript
// src/app/layout.tsx (or app/layout.tsx)

import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});
```

Then add the CSS variables to your `<body>` className:

```typescript
<body className={`${poppins.variable} ${inter.variable} antialiased`}>
  {children}
</body>
```

### 3. Configure Tailwind (`tailwind.config.ts`)

Add font family configuration to your Tailwind config:

```typescript
// tailwind.config.ts

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          'sans-serif'
        ],
        poppins: [
          'var(--font-poppins)',
          'Poppins',
          'sans-serif'
        ],
        inter: [
          'var(--font-inter)',
          'Inter',
          'sans-serif'
        ]
      }
    }
  }
}
```

### 4. Apply Fonts in CSS (`globals.css`)

Add font family rules to your global CSS:

```css
/* src/app/globals.css */

@layer base {
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-inter), 'Inter', sans-serif;
  }

  /* Ensure all text elements use Inter by default */
  p, span, div, a, li, td, th, label, input, textarea, select, button {
    font-family: inherit;
  }

  /* Headings use Poppins */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-poppins), 'Poppins', sans-serif;
    @apply font-bold;
  }
}
```

---

## Usage in Components

### Using Tailwind Classes

- **Body text**: Automatically uses Inter (default `sans` font)
- **Headings**: Use `font-poppins` class or rely on the CSS rule for h1-h6
- **Explicit Inter**: Use `font-inter` class if needed

Example:
```tsx
<h1 className="font-poppins text-4xl">Title</h1>
<p className="font-inter">Body text</p>
<p>This also uses Inter by default</p>
```

---

## Font Storage Location

- **Font files**: Automatically downloaded and stored in `.next/cache/fonts/` during build
- **No manual file management needed** - Next.js handles everything

---

## Font Weights Available

Both fonts support weights: 300, 400, 500, 600, 700, 800, 900

Use in Tailwind: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, etc.

---

## Quick Checklist for New Project

- [ ] Import Poppins and Inter from `next/font/google` in layout.tsx
- [ ] Configure font variables with CSS variable names
- [ ] Add font variables to body className
- [ ] Update tailwind.config.ts with fontFamily configuration
- [ ] Add font-family rules to globals.css
- [ ] Restart dev server
- [ ] Clear browser cache

---

## Notes

- Fonts are automatically optimized by Next.js
- Fonts are self-hosted (no external requests)
- CSS variables (`--font-poppins`, `--font-inter`) are used for consistency
- Default `sans` font is set to Inter for convenience
- All headings automatically use Poppins via CSS rules

