# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML puzzle website — no build system, no framework, no dependencies. Each puzzle is a self-contained `.html` file with all CSS and JS inline. The site is opened directly in a browser from the filesystem.

```
puzzles/
├── index.html
├── CLAUDE.md
└── puzzles/        ← all puzzle .html files live here
```

## Adding a New Puzzle

When asked to create a new puzzle, produce both:

1. A complete `puzzles/<puzzle_name>.html` file following the design system below.
2. An entry for the `puzzles` array in `index.html` (inside the clearly marked `ADD NEW PUZZLES HERE` block).

For `releaseDate`, default to the next Friday after the current latest `releaseDate` unless told otherwise.

## Design System

Every puzzle page must follow this style to match the site:

- **Background:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Card:** white, `border-radius: 20px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`, `max-width` around 760px
- **Primary color:** `#667eea` — Secondary: `#764ba2`
- **Font:** `Segoe UI`
- **Timer:** starts on page load, displayed prominently
- **Rules:** always visible on screen (no modal to hide them)
- **Winner modal:** triggered on puzzle completion; shows a "Congrats" / celebratory heading (🎉), the player's completion time in large text, a "Close" button, and a "Reset & Play Again" button; uses the same card style (white, `border-radius: 20px`, gradient heading text)
- **Mobile:** full touchscreen support required

### Heading with gradient text

Apply the gradient only to a `<span>` inside the `<h1>`, never to the `<h1>` itself — otherwise emojis get clipped and turn invisible.

```html
<h1>🎯 <span>Puzzle Title</span></h1>
```

```css
.header h1 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.header h1 span {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Workflow

Do **not** read existing puzzle files when creating a new one. All necessary patterns are documented in this file. Work from this specification alone.

## index.html Puzzle Registration

Each entry in the `puzzles` array:

```js
{
  title: "...",
  icon: "...", // single emoji, but not any that are already used for a puzzle
  description: "...", // 1-2 sentences, enticing but no spoilers
  file: "puzzles/...", // snake_case .html filename under the puzzles/ folder
  releaseDate: "YYYY-MM-DD",
}
```

Puzzles with a future `releaseDate` are hidden from the grid and replaced with a single "Coming Soon" card showing the next release date.
