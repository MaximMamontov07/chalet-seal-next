import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const locations = [
  { title: 'Озеро "Светлое"', description: 'Шале на берегу чистейшего озера.', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', tags: ['Рыбалка','Купание','Лодки'] },
  { title: 'Горный массив', description: 'Живописные горные тропы и водопады.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', tags: ['Трекинг','Водопады','Смотровые'] }
]

export default function LocationsSection() {
  return (
    <section id="locations">
      <div className="container">
        <div className="section-header"><h2 className="section-title">Локации</h2><p className="section-subtitle">Живописные места</p></div>
        <div className="locations-grid">
          {locations.map((loc, i) => (
            <div key={i} className="location-card">
              <div className="location-image" style={{backgroundImage:'url('+loc.image+')'}}>
                <div className="location-overlay"><h3 className="location-title">{loc.title}</h3></div>
              </div>
              <div className="location-content">
                <p>{loc.description}</p>
                <div className="location-tags">{loc.tags.map((t,j)=><span key={j} className="location-tag">{t}</span>)}</div>
                <Link href="/#booking" className="btn-secondary"><FontAwesomeIcon icon={faArrowRight} /> Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
