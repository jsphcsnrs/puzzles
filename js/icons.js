/* global lucide */
;(function () {
  const DEFAULT_STROKE = "#1e293b"
  const ACCENT_STROKE = "#8b5cf6"
  const WHITE_STROKE = "#ffffff"

  const THEME_COLORS = {
    collection: "#8b5cf6",
    shuffle: "#8b5cf6",
    scissors: "#f472b6",
    link: "#34d399",
    landmark: "#fbbf24",
    lock: "#8b5cf6",
    home: "#34d399",
    "paw-print": "#f472b6",
    "text-cursor-input": "#8b5cf6",
    layers: "#a855f7",
    puzzle: "#8b5cf6",
    brain: "#f472b6",
    cat: "#fbbf24",
    "scan-search": "#34d399",
    "lock-keyhole": "#8b5cf6",
    split: "#f472b6",
    "key-round": "#fbbf24",
    pyramid: "#fbbf24",
    "whole-word": "#34d399",
  }

  function toPascalCase(name) {
    return name.replace(/(\w)(\w*)(_|-|\s*)/g, (_, c, p) => c.toUpperCase() + p.toLowerCase())
  }

  function colorForTheme(theme) {
    if (!theme) return ACCENT_STROKE
    return THEME_COLORS[theme] || ACCENT_STROKE
  }

  function cssVar(el, name) {
    return getComputedStyle(el).getPropertyValue(name).trim()
  }

  function defaultStroke(context) {
    const el = context || document.documentElement
    const fromFg = cssVar(el, "--fg")
    if (fromFg) return fromFg
    return DEFAULT_STROKE
  }

  function themeStroke(context) {
    const el = context || document.documentElement
    const fromCss = cssVar(el, "--theme-color")
    if (fromCss) return fromCss

    const theme = el.dataset?.theme
    if (theme) return colorForTheme(theme)

    return ACCENT_STROKE
  }

  function iconEl(name, options = {}) {
    const {
      size = 24,
      stroke,
      className = "icon icon-themed",
      ariaHidden = true,
      context,
      theme,
    } = options

    const resolvedStroke =
      stroke ||
      (theme ? colorForTheme(theme) : themeStroke(context)) ||
      defaultStroke(context)

    const iconData = lucide.icons[toPascalCase(name)]
    if (!iconData) {
      console.warn(`[icons] Unknown icon: ${name}`)
      const fallback = document.createElement("span")
      fallback.className = className
      return fallback
    }

    const svg = lucide.createElement(iconData, {
      width: size,
      height: size,
      stroke: resolvedStroke,
      "stroke-width": 2.5,
      class: className,
      "aria-hidden": ariaHidden ? "true" : undefined,
    })
    return svg
  }

  function initIcons(root) {
    const scope = root || document
    const elements = scope.querySelectorAll("[data-lucide]")
    if (elements.length === 0) return

    const icons = {}
    elements.forEach((el) => {
      const name = el.getAttribute("data-lucide")
      const iconData = lucide.icons[toPascalCase(name)]
      if (iconData) icons[toPascalCase(name)] = iconData
    })

    lucide.createIcons({ icons, nameAttr: "data-lucide", attrs: { "stroke-width": 2.5 } })
  }

  window.PuzzleIcons = {
    DEFAULT_STROKE,
    ACCENT_STROKE,
    WHITE_STROKE,
    THEME_COLORS,
    colorForTheme,
    themeStroke,
    defaultStroke,
    iconEl,
    initIcons,
  }
})()
