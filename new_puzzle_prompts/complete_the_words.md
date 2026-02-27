# Puzzle Page Builder

I'm building a puzzle website and need two things for a new puzzle:

## 1. A complete HTML puzzle page

Build it to match this style and functionality:

- Purple gradient background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- White card container with `border-radius: 20px` and `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`
- Primary color `#667eea`, secondary `#764ba2`
- Font: `Segoe UI`
- A timer that starts when the page loads
- Rules visible on screen at all times (no modal to hide them)
- A winner modal at the end with the completion time, a "Close" button, and a "Reset & Play Again" button
- Support for touchscreen mobile devices and browsers
- Same general structure and feel as the other pages on my site

## 2. A short index card blurb

For adding to my homepage `puzzles` array, in this exact format:

```js
{
    title: "...",
    icon: "...", // a single relevant emoji which is not the puzzle piece
    description: "...", // 1-2 sentences, enticing but no spoilers
    file: "...", // snake_case filename ending in .html
    releaseDate: "YYYY-MM-DD", //default to next Friday
},
```

## Puzzle Rules

Complete the words below using three consecutive letters in alphabetical order.
Example: \_ _ A _ U S; add A B and C it would become ABACUS.

1. F \_ _ R I _
2. T H I \_ \_ \_
3. A _ U _ \_ A
4. \_ \_ \_ I N E
5. A \_ \_ \_ T E
6. \_ \_ \_ A C K

Answer:

1. Fabric
2. Thirst
3. Alumna
4. Define
5. Astute
6. Hijack
