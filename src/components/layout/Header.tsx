'use client'
import { useState, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/components/providers/ThemeProvider'

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <div className="container">
        <Link href="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
          <div style={{width:60,height:60,position:'relative'}}>
            <Image src="/img/your-logo.png" alt="Logo" width={80} height={80} style={{objectFit:'contain'}} priority/>
          </div>
          <div>
            <span style={{fontSize:'clamp(16px,4vw,24px)',fontWeight:700,color:'var(--forest-green)'}}>Шале-Тюленя</span>
            <span style={{display:'block',fontSize:10,color:'#666',textTransform:'uppercase'}}>Премиум отдых в лесу</span>
          </div>
        </Link>
        <nav>
          <ul className={'nav-menu'+(open?' open':'')}>
            <li><Link href="/#houses" onClick={()=>setOpen(false)}>Наши шале</Link></li>
            <li><Link href="/#locations" onClick={()=>setOpen(false)}>Локации</Link></li>
            <li><Link href="/how-to-get" onClick={()=>setOpen(false)}>Как добраться</Link></li>
            <li><Link href="/#promotions" onClick={()=>setOpen(false)}>Акции</Link></li>
            <li><Link href="/#amenities" onClick={()=>setOpen(false)}>Удобства</Link></li>
            <li><Link href="/#gallery" onClick={()=>setOpen(false)}>Галерея</Link></li>
            <li><Link href="/#calendar" onClick={()=>setOpen(false)}>Календарь</Link></li>
          </ul>
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Переключить тему"
          >
            <FontAwesomeIcon icon={theme==='dark'?faSun:faMoon}/>
          </button>
          <Link href="/#booking" className="btn-primary desktop-only">Забронировать</Link>
          <button 
            onClick={()=>setOpen(!open)} 
            className="mobile-menu-btn"
            aria-label="Меню"
          >
            <FontAwesomeIcon icon={open?faTimes:faBars} size="lg"/>
          </button>
        </div>
      </div>
    </header>
  )
})

export default Header
