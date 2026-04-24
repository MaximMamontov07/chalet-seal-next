'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const slides = [
  { image: '/img/slides/slide-1.jpg', title: 'Премиум отдых в сказочном лесу', description: 'Комфортабельные шале с баней и чаном.' },
  { image: '/img/slides/slide-2.jpg', title: 'Банный комплекс с чаном', description: 'Насладитесь русской баней.' },
  { image: '/img/slides/slide-3.jpg', title: 'Единение с природой', description: 'Прогулки по лесу. Отдохните от суеты.' }
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  useEffect(() => { const t = setInterval(() => setCurrent(p => (p+1)%3), 5000); return () => clearInterval(t) }, [])

  return (
    <section className="hero-section" style={{padding:0,marginTop:0}}>
      {slides.map((s, i) => (
        <div key={i} className={'hero-slide' + (i===current?' active':'')} style={{backgroundImage:'url('+s.image+')'}}>
          <div className="hero-content">
            <h1>{s.title}</h1>
            <p>{s.description}</p>
            <Link href="/#booking" className="btn-primary">Забронировать</Link>
          </div>
        </div>
      ))}
      <button onClick={()=>setCurrent(p=>(p-1+3)%3)} style={{position:'absolute',left:20,top:'50%',zIndex:10,background:'none',border:'none',color:'white',cursor:'pointer',transform:'translateY(-50%)'}}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>
      <button onClick={()=>setCurrent(p=>(p+1)%3)} style={{position:'absolute',right:20,top:'50%',zIndex:10,background:'none',border:'none',color:'white',cursor:'pointer',transform:'translateY(-50%)'}}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
      <div style={{position:'absolute',bottom:30,left:0,right:0,display:'flex',justifyContent:'center',gap:15,zIndex:10}}>
        {slides.map((_, i) => <button key={i} onClick={()=>setCurrent(i)} style={{width:12,height:12,borderRadius:'50%',border:'none',cursor:'pointer',background:i===current?'white':'rgba(255,255,255,.4)',transform:i===current?'scale(1.3)':'scale(1)'}}/>)}
      </div>
    </section>
  )
}
