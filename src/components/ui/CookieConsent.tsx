'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted')
    if (!accepted) {
      setTimeout(() => setIsVisible(true), 1500)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1001,
      backgroundColor: 'var(--white)',
      color: 'var(--black)',
      padding: '20px 30px',
      borderRadius: 'var(--radius)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      maxWidth: '600px',
      width: 'calc(100% - 40px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
      animation: 'slideUp 0.5s ease',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(100px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}} />
      
      <div style={{ flex: '1', minWidth: '200px' }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
          Мы используем файлы cookie для улучшения работы сайта. 
        </p>
      </div>
      
      <button
        onClick={acceptCookies}
        style={{
          backgroundColor: 'var(--forest-green)',
          color: 'white',
          border: 'none',
          padding: '10px 25px',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '14px',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(46, 80, 60, 0.2)'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'var(--dark-green)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'var(--forest-green)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Принять
      </button>
    </div>
  )
}
