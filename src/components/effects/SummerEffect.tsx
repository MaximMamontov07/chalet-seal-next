'use client'
import { useEffect, useRef } from 'react'

export default function SummerEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const symbols = ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿']
    const particles: HTMLDivElement[] = []

    const createParticle = () => {
      const particle = document.createElement('div')
      const symbol = symbols[Math.floor(Math.random() * symbols.length)]
      particle.textContent = symbol
      particle.style.cssText = `
        position: absolute;
        top: -50px;
        left: ${Math.random() * 100}%;
        color: rgba(255, 255, 255, 0.6);
        font-size: ${0.8 + Math.random() * 1.2}em;
        opacity: 0;
        pointer-events: none;
        z-index: 10000;
        animation: summerFloat ${8 + Math.random() * 15}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        filter: blur(${Math.random() * 0.5}px);
      `
      container.appendChild(particle)
      particles.push(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
        const idx = particles.indexOf(particle)
        if (idx > -1) particles.splice(idx, 1)
      }, 25000)
    }

    // Создаем начальные частицы
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createParticle(), Math.random() * 3000)
    }

    // Добавляем новые частицы периодически
    const interval = setInterval(() => {
      if (particles.length < 25) createParticle()
    }, 2000)

    return () => {
      clearInterval(interval)
      particles.forEach(p => {
        if (p.parentNode) p.remove()
      })
    }
  }, [])

  return (
    <>
      <div ref={containerRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 10000 }} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes summerFloat {
          0% {
            transform: translateY(-50px) translateX(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          25% {
            transform: translateY(25vh) translateX(30px) rotate(90deg) scale(1);
          }
          50% {
            transform: translateY(50vh) translateX(-40px) rotate(180deg) scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translateY(75vh) translateX(20px) rotate(270deg) scale(1.1);
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(105vh) translateX(-10px) rotate(360deg) scale(0.3);
            opacity: 0;
          }
        }
      `}} />
    </>
  )
}
