import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotTub, faUtensils, faHiking, faSpa, faChild, faConciergeBell } from '@fortawesome/free-solid-svg-icons'

const amenities = [
  { icon: faHotTub, title: 'Баня и чан', description: 'Русская баня на дровах, чан с подогревом.' },
  { icon: faUtensils, title: 'Питание', description: 'Завтраки "шведский стол", доставка продуктов.' },
  { icon: faHiking, title: 'Активный отдых', description: 'Аренда лодок, велосипедов, рыболовные снасти.' },
  { icon: faSpa, title: 'Спа и wellness', description: 'Массаж, йога на природе.' },
  { icon: faChild, title: 'Для детей', description: 'Детские площадки, анимация, няня.' },
  { icon: faConciergeBell, title: 'Дополнительно', description: 'Трансфер, организация праздников, экскурсии.' }
]

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Удобства и услуги</h2>
          <p className="section-subtitle">Все для комфортного отдыха</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((a, i) => (
            <div key={i} className="amenity-item">
              <div style={{width:80,height:80,margin:'0 auto 20px',backgroundColor:'var(--light-green)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',transition:'var(--transition)'}}>
                <FontAwesomeIcon icon={a.icon} style={{fontSize:36,color:'var(--forest-green)'}} />
              </div>
              <h3 className="amenity-title">{a.title}</h3>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
