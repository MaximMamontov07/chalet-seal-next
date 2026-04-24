'use client'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const t = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', t)
    return () => window.removeEventListener('scroll', t)
  }, [])

  return (
    <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="scroll-to-top" style={{opacity:isVisible?1:0,visibility:isVisible?'visible':'hidden',transform:isVisible?'translateY(0)':'translateY(20px)',transition:'all .3s'}}>
      <FontAwesomeIcon icon={faChevronUp} size="lg" />
    </button>
  )
}
