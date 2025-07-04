# F1 Fonts Setup

## Current Setup (Google Fonts)

The project is currently using Google Fonts as F1 font alternatives:

- **F1 Turbo Alternative**: **Orbitron** - A futuristic, tech-style font perfect for F1 racing themes
- **F1 Torque Alternative**: **Rajdhani** - A modern, sporty font with racing aesthetics

## Usage in components:

```tsx
// Use F1 Turbo font (Orbitron) - Default font
<h1 className="font-f1-turbo">Formula 1 Title</h1>

// Use F1 Torque font (Rajdhani)
<h2 className="font-f1-torque">Racing Subtitle</h2>

// You can also use font weights
<h1 className="font-f1-turbo font-bold">Bold F1 Title</h1>
<h2 className="font-f1-torque font-semibold">Semibold Racing Text</h2>
```

## Available Font Weights:

### Orbitron (F1 Turbo):
- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 800 (ExtraBold)
- 900 (Black)

### Rajdhani (F1 Torque):
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)

## If you want to use actual F1 fonts:

Replace the Google Fonts import in `app/layout.tsx` with local font imports and place the following files in this directory:

- `F1-Turbo-Regular.woff2`
- `F1-Turbo-Bold.woff2`
- `F1-Torque-Regular.woff2`
- `F1-Torque-Bold.woff2`

Then update the layout.tsx file to use `localFont` instead of Google Fonts.
