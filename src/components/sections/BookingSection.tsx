import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function BookingSection() {
  return (
    <section id="booking" className="booking-section" style={{padding:'80px 0'}}>
      <div className="container">
        <h2>Готовы к незабываемому отдыху?</h2>
        <p style={{fontSize:'clamp(16px, 2.5vw, 20px)',maxWidth:700,margin:'0 auto 30px',opacity:0.9}}>
          Забронируйте свое идеальное шале прямо сейчас.
        </p>
        <div className="booking-buttons">
          <Link href="tel:+79131503539" className="booking-btn-white">
            <FontAwesomeIcon icon={faPhoneAlt} /> Позвонить: 8 (913) 150-35-39
          </Link>
          <Link href="https://wa.me/79131503539" target="_blank" className="booking-btn-outline">
            <FontAwesomeIcon icon={faWhatsapp} /> Написать в WhatsApp
          </Link>
          <Link href="mailto:booking@chalet-seal.ru" className="booking-btn-outline">
            <FontAwesomeIcon icon={faEnvelope} /> Написать на почту
          </Link>
        </div>
      </div>
    </section>
  )
}
