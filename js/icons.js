/* global lucide */
;(function () {
  const DEFAULT_STROKE = "#3d4852"
  const ACCENT_STROKE = "#6c63ff"
  const WHITE_STROKE = "#ffffff"

  function toPascalCase(name) {
    return name.replace(/(\w)(\w*)(_|-|\s*)/g, (_, c, p) => c.toUpperCase() + p.toLowerCase())
  }

  function iconEl(name, options = {}) {
    const {
      size = 24,
      stroke = DEFAULT_STROKE,
      className = "icon",
      ariaHidden = true,
    } = options

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
      stroke,
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
    iconEl,
    initIcons,
  }
})()
