import Link from 'next/link'

const promotions = [
  { title: 'Раннее бронирование', description: 'Скидка до 25% при бронировании за 60 дней до заезда + бесплатная баня.', price: '25%', label: 'скидки' },
  { title: 'Романтический уикенд', description: '3 дня и 2 ночи с ужином и спа-процедурами.', price: '19 999', label: '₽' },
  { title: 'Семейная неделя', description: '7 дней отдыха для всей семьи. Детям до 12 лет бесплатно.', price: '65 000', label: '₽' }
]

export default function PromotionsSection() {
  return (
    <section id="promotions" className="promotions-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Специальные предложения</h2>
          <p className="section-subtitle">Воспользуйтесь нашими акциями</p>
        </div>
        <div className="promotions-grid">
          {promotions.map((p, i) => (
            <div key={i} className="promotion-card">
              <div className="promotion-header">
                <h3>{p.title}</h3>
              </div>
              <div className="promotion-content">
                <p>{p.description}</p>
                <div className="promo-price">
                  {p.price}<span style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 600, marginLeft: '4px', color: 'inherit' }}>{p.label}</span>
                </div>
                <Link href="/#booking" className="btn-primary" style={{width:'100%',justifyContent:'center'}}>
                  Забронировать
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
