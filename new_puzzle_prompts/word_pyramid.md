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

Try to solve this Word Pyramid.

How it works: Take the letters of the word “pea” and rearrange them into a word that starts with “h.” Do the same for each of the new words you create until you get to the bottom.

pea
h \_ \_ _
s _ \_ \_ \_
\_ _ r _ \_ \_
\_ \_ \_ \_ \_ _ n
_ \_ \_ \_ \_ \_ \_ l

Answer:
Pea
Heap
Shape
Phrase
Sharpen
Shrapnel
