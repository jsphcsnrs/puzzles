/* global lucide */
;(function () {
  const DEFAULT_STROKE = "#edf0f5"
  const ACCENT_STROKE = "#6c63ff"
  const WHITE_STROKE = "#ffffff"

  const THEME_COLORS = {
    collection: "#6c63ff",
    shuffle: "#7c5cff",
    scissors: "#e86b8a",
    link: "#4f8cff",
    landmark: "#d4a034",
    lock: "#5b7fd6",
    home: "#38b2ac",
    "paw-print": "#f07848",
    "text-cursor-input": "#6366f1",
    layers: "#a855f7",
    puzzle: "#8b5cf6",
    brain: "#ec6b9a",
    cat: "#f59e42",
    "scan-search": "#34a06e",
    "lock-keyhole": "#9b6bff",
    split: "#ec4899",
  }

  function toPascalCase(name) {
    return name.replace(/(\w)(\w*)(_|-|\s*)/g, (_, c, p) => c.toUpperCase() + p.toLowerCase())
  }

  function colorForTheme(theme) {
    if (!theme) return ACCENT_STROKE
    return THEME_COLORS[theme] || ACCENT_STROKE
  }

  function themeStroke(context) {
    const el = context || document.documentElement
    const fromCss = getComputedStyle(el).getPropertyValue("--theme-color").trim()
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
      stroke || (theme ? colorForTheme(theme) : themeStroke(context))

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

    lucide.createIcons({ icons, nameAttr: "data-lucide" })
  }

  window.PuzzleIcons = {
    DEFAULT_STROKE,
    ACCENT_STROKE,
    WHITE_STROKE,
    THEME_COLORS,
    colorForTheme,
    themeStroke,
    iconEl,
    initIcons,
  }
})()
