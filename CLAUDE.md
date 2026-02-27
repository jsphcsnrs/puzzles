# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML puzzle website — no build system, no framework, no dependencies. Each puzzle is a self-contained `.html` file with all CSS and JS inline. The site is opened directly in a browser from the filesystem.

## Adding a New Puzzle

1. Create `<puzzle_name>.html` using the design system below.
2. Add an entry to the `puzzles` array in `index.html` (inside the clearly marked `ADD NEW PUZZLES HERE` block).

The template in [new_puzzle_prompts/new_puzzle_prompt_template.md](new_puzzle_prompts/new_puzzle_prompt_template.md) is a ready-to-paste Claude prompt for generating a new puzzle page plus its `index.html` entry.

## Design System

Every puzzle page must follow this style to match the site:

- **Background:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Card:** white, `border-radius: 20px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`, `max-width` around 760px
- **Primary color:** `#667eea` — Secondary: `#764ba2`
- **Font:** `Segoe UI`
- **Timer:** starts on page load, displayed prominently
- **Rules:** always visible on screen (no modal to hide them)
- **Winner modal:** shows completion time, a "Close" button, and a "Reset & Play Again" button
- **Mobile:** full touchscreen support required

## index.html Puzzle Registration

Each entry in the `puzzles` array:

```js
{
  title: "...",
  icon: "...",          // single emoji, not 🧩
  description: "...",   // 1-2 sentences, enticing but no spoilers
  file: "...",          // snake_case .html filename
  releaseDate: "YYYY-MM-DD",
}
```

Puzzles with a future `releaseDate` are hidden from the grid and replaced with a single "Coming Soon" card showing the next release date.
