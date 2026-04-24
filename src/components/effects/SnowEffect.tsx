'use client'
import { useEffect, useRef } from 'react'

export default function SnowEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const symbols = ['❄', '✦', '✽', '❉', '❋']
    const flakes: HTMLDivElement[] = []

    const createFlake = () => {
      const flake = document.createElement('div')
      flake.textContent = symbols[Math.floor(Math.random() * symbols.length)]
      flake.style.cssText = 'position:absolute;top:-50px;color:white;opacity:0.7;pointer-events:none;z-index:10000;'
      flake.style.left = Math.random() * 100 + '%'
      flake.style.fontSize = (0.6 + Math.random() * 0.8) + 'em'
      flake.style.animation = 'fall ' + (10 + Math.random() * 20) + 's linear infinite'
      container.appendChild(flake)
      flakes.push(flake)
      setTimeout(() => { 
        if(flake.parentNode) flake.remove()
        const idx = flakes.indexOf(flake)
        if(idx > -1) flakes.splice(idx, 1)
      }, 30000)
    }

    for (let i = 0; i < 30; i++) setTimeout(createFlake, Math.random() * 5000)
    const interval = setInterval(createFlake, 1000)
    return () => { clearInterval(interval); flakes.forEach(f => { if(f.parentNode) f.remove() }) }
  }, [])

  return <div ref={containerRef} style={{position:'fixed',inset:0,pointerEvents:'none',overflow:'hidden',zIndex:10000}} />
}
