'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUsers, faBed, faBath, faUtensils, faWifi, faFire, faTemperatureHigh, faCouch, faWineGlass, faHotTub, faStar, faUmbrellaBeach, faMoon } from '@fortawesome/free-solid-svg-icons'

const spinKeyframes = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

const houses = [
  {
    id: 1, title: 'Шале "Медвежье"', description: 'Просторное шале для большой компании или семьи.',
    image: '/img/houses/house-1.jpg', video: '/video/chalet1.mp4',
    features: [
      { icon: faUsers, text: 'До 8 человек' }, { icon: faBed, text: '3 спальни, 4 кровати' },
      { icon: faBath, text: 'Частная баня с купелью' }, { icon: faUtensils, text: 'Полностью оборудованная кухня' },
      { icon: faWifi, text: 'Высокоскоростной Wi-Fi' }
    ], price: 'от 15 000 Р/сутки'
  },
  {
    id: 2, title: 'Баня "Царская"', description: 'Аутентичная русская баня на дровах.',
    image: '/img/houses/house-2.jpg', video: '/video/chalet2.mp4',
    features: [
      { icon: faFire, text: 'Настоящая баня на дровах' }, { icon: faTemperatureHigh, text: 'Парная до 110 градусов' },
      { icon: faBath, text: 'Помывочная зона' }, { icon: faCouch, text: 'Комната отдыха с камином' },
      { icon: faWineGlass, text: 'Чайная церемония' }
    ], price: '5 000 Р/сеанс'
  },
  {
    id: 3, title: 'Чан "Лесной"', description: 'Деревянный чан с подогревом на открытом воздухе.',
    image: '/img/houses/house-3.jpg', video: '/video/chalet3.mp4',
    features: [
      { icon: faHotTub, text: 'Деревянный чан 2x2м' }, { icon: faFire, text: 'Дровяной подогрев' },
      { icon: faStar, text: 'Ароматерапия травами' }, { icon: faUmbrellaBeach, text: 'Зона отдыха у чана' },
      { icon: faMoon, text: 'Ночная подсветка' }
    ], price: '3 500 Р/сеанс'
  }
]

export default function HousesSection() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const openVideo = (src: string) => {
    setVideoSrc(src)
    setIsLoading(true)
  }

  const closeVideo = () => {
    setVideoSrc(null)
    setIsLoading(false)
  }

  return (
    <section className="houses-section" id="houses">
      <style dangerouslySetInnerHTML={{ __html: spinKeyframes }} />
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Наши шале</h2>
          <p className="section-subtitle">Идеальное жилье для вашего отдыха!</p>
        </div>
        <div className="houses-grid">
          {houses.map(h => {
            const bgImage = 'url(' + h.image + ')'
            return (
              <div key={h.id} className="house-card">
                <div className="house-image" style={{backgroundImage: bgImage}}>
                  <div className="house-image-overlay">
                    <button className="btn-primary" onClick={() => openVideo(h.video)}>
                      <FontAwesomeIcon icon={faPlay} /> Смотреть видео
                    </button>
                  </div>
                </div>
                <div className="house-content">
                  <h3 className="house-title">{h.title}</h3>
                  <p>{h.description}</p>
                  <ul className="house-features">
                    {h.features.map((f, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={f.icon} />
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="house-price">{h.price}</div>
                  <Link href="/#booking" className="btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'15px'}}>
                    Забронировать
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {videoSrc && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 2001, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeVideo}>
          <div style={{ position: 'relative', maxWidth: '90%', width: '1000px', background: '#000', borderRadius: '12px', overflow: 'hidden', padding: '20px' }}>
            <button onClick={closeVideo} style={{ position: 'absolute', top: '-50px', right: '0', background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2002 }}>×</button>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000' }}>
              {isLoading && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', zIndex: 10 }}>
                  <div style={{ width: '50px', height: '50px', border: '5px solid rgba(255, 255, 255, 0.3)', borderTop: '5px solid #2e503c', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 15px' }} />
                  <p>Загрузка видео...</p>
                </div>
              )}
              <video key={videoSrc} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }} controls autoPlay onLoadedData={() => setIsLoading(false)} onClick={e => e.stopPropagation()}>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
