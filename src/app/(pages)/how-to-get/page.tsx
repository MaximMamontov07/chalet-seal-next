'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCar, faTrain, faPlane } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function HowToGet() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div className="page-container" style={{
      paddingTop: '120px',
      minHeight: '100vh',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '50px' }}>
          <h1 className="section-title">Как добраться</h1>
          <p className="section-subtitle">Подробные маршруты и контакты</p>
        </div>

        <div className="page-content" style={{
          animation: 'fadeInUp 0.8s ease 0.2s forwards',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
        }}>
          <h2 style={{ color: 'var(--forest-green)', fontSize: '28px', marginBottom: '20px' }}>Наше расположение</h2>
          <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>Комплекс «Шале-Тюленя» расположен в живописном Лоухском районе, в окружении вековых сосен и кристально чистых озер.</p>

          <div style={{ background: 'var(--light-green)', padding: '20px', borderRadius: 'var(--radius)', margin: '20px 0', textAlign: 'center' }}>
            <Link href="https://2gis.ru/petrozavodsk/firm/70000001041366998" target="_blank" className="btn-primary" style={{ fontSize: '16px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Открыть карту 2GIS
            </Link>
          </div>

          <h2 style={{ color: 'var(--forest-green)', fontSize: '28px', marginBottom: '20px', marginTop: '40px' }}>Контакты</h2>
          <div className="contacts-grid">
            <div className="contact-card">
              <div style={{ fontSize: '32px', color: 'var(--forest-green)', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <h3 style={{ color: 'var(--forest-green)', fontSize: '22px', marginBottom: '15px' }}>Телефон</h3>
              <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'var(--forest-green)' }} />
                <a href="tel:+79131503539" style={{ color: 'var(--forest-green)', textDecoration: 'none', fontSize: '18px' }}>+8 (913) 150-35-39</a>
              </div>
              <Link href="tel:+79131503539" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '15px' }}>Позвонить</Link>
            </div>

            <div className="contact-card">
              <div style={{ fontSize: '32px', color: 'var(--forest-green)', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <h3 style={{ color: 'var(--forest-green)', fontSize: '22px', marginBottom: '15px' }}>WhatsApp</h3>
              <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'var(--forest-green)' }} />
                <a href="https://wa.me/79131503539" target="_blank" style={{ color: 'var(--forest-green)', textDecoration: 'none', fontSize: '18px' }}>Написать</a>
              </div>
              <Link href="https://wa.me/79131503539" target="_blank" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '15px' }}>Написать в WhatsApp</Link>
            </div>

            <div className="contact-card">
              <div style={{ fontSize: '32px', color: 'var(--forest-green)', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 style={{ color: 'var(--forest-green)', fontSize: '22px', marginBottom: '15px' }}>Email</h3>
              <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'var(--forest-green)' }} />
                <a href="mailto:booking@chalet-seal.ru" style={{ color: 'var(--forest-green)', textDecoration: 'none', fontSize: '18px' }}>booking@chalet-seal.ru</a>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'var(--forest-green)', fontSize: '24px', marginBottom: '20px', marginTop: '40px' }}>Транспорт</h3>
          <div className="transport-grid">
            <div className="transport-card">
              <FontAwesomeIcon icon={faCar} className="transport-icon" />
              <h3 style={{ color: 'var(--forest-green)', fontSize: '20px', marginBottom: '10px' }}>На автомобиле</h3>
              <p>По трассе Р-21 «Кола», далее 15 км по лесной дороге. Есть указатели.</p>
            </div>
            <div className="transport-card">
              <FontAwesomeIcon icon={faTrain} className="transport-icon" />
              <h3 style={{ color: 'var(--forest-green)', fontSize: '20px', marginBottom: '10px' }}>На поезде</h3>
              <p>Станция «Лоухи». Трансфер до комплекса - 1500₽.</p>
            </div>
            <div className="transport-card">
              <FontAwesomeIcon icon={faPlane} className="transport-icon" />
              <h3 style={{ color: 'var(--forest-green)', fontSize: '20px', marginBottom: '10px' }}>На самолете</h3>
              <p>Аэропорт Петрозаводска + трансфер. Время в пути - 2 часа.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/" className="btn-primary">Вернуться на главную</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
