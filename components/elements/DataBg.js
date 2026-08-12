import { useEffect } from 'react'

function applyBackgrounds(root = document) {
    const elements = root.querySelectorAll('[data-background]')
    elements.forEach((element) => {
        const bg = element.getAttribute('data-background')
        if (bg && element.style.backgroundImage !== `url(${bg})`) {
            element.style.backgroundImage = `url(${bg})`
        }
    })
}

export default function DataBg() {
    useEffect(() => {
        // Apply immediately for elements already in the DOM
        applyBackgrounds()

        // Watch for sections added later (e.g. next/dynamic lazy-loaded
        // homepage sections like Overview, Project, Blog) and apply
        // their backgrounds too — otherwise they render with no image.
        const observer = new MutationObserver(() => {
            applyBackgrounds()
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })

        return () => observer.disconnect()
    }, [])

    return null
}
