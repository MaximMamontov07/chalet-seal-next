'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faTelegram, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'15px'}}>
              <div style={{width:'80px',height:'80px',position:'relative'}}>
                <Image src="/img/your-logo.png" alt="Шале-Тюлень" width={80} height={80} style={{objectFit:'contain'}} />
              </div>
              <div>
                <h3 style={{fontSize:'clamp(18px,3vw,24px)',fontWeight:700}}>Шале-Тюленя</h3>
                <p style={{fontSize:'14px',opacity:0.8}}>Премиум отдых в лесу</p>
              </div>
            </div>
            <p style={{marginBottom:'15px',lineHeight:1.6}}>Премиум отдых в лесу с банями и купелями.</p>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <a href="tel:+79131503539">8 (913) 150-35-39</a>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@chalet-seal.ru">info@chalet-seal.ru</a>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Омск, Лоухский район</span>
            </div>
          </div>

          <div>
            <h3 style={{fontSize:'20px',fontWeight:700,marginBottom:'15px'}}>Быстрые ссылки</h3>
            <ul className="footer-links">
              <li><Link href="/#houses">Наши шале</Link></li>
              <li><Link href="/#locations">Локации</Link></li>
              <li><Link href="/how-to-get">Как добраться</Link></li>
              <li><Link href="/#promotions">Акции</Link></li>
              <li><Link href="/#amenities">Удобства</Link></li>
              <li><Link href="/#gallery">Галерея</Link></li>
              <li><Link href="/#calendar">Календарь</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{fontSize:'20px',fontWeight:700,marginBottom:'15px'}}>Мы в соцсетях</h3>
            <p style={{marginBottom:'15px',fontSize:'14px',opacity:0.8}}>Подписывайтесь на нас:</p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" style={{background:'linear-gradient(135deg, #4a76a8, #2d5478)',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:12,transition:'all .3s',boxShadow:'0 4px 12px rgba(74,118,168,.3)',color:'white',textDecoration:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px) scale(1.1)';e.currentTarget.style.boxShadow='0 8px 20px rgba(74,118,168,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0) scale(1)';e.currentTarget.style.boxShadow='0 4px 12px rgba(74,118,168,.3)'}}>
                <FontAwesomeIcon icon={faVk} size="lg" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" style={{background:'linear-gradient(135deg, #2AABEE, #229ED9)',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:12,transition:'all .3s',boxShadow:'0 4px 12px rgba(42,171,238,.3)',color:'white',textDecoration:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px) scale(1.1)';e.currentTarget.style.boxShadow='0 8px 20px rgba(42,171,238,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0) scale(1)';e.currentTarget.style.boxShadow='0 4px 12px rgba(42,171,238,.3)'}}>
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{background:'linear-gradient(135deg, #E4405F, #C13584 50%, #833AB4)',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:12,transition:'all .3s',boxShadow:'0 4px 12px rgba(228,64,95,.3)',color:'white',textDecoration:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px) scale(1.1)';e.currentTarget.style.boxShadow='0 8px 20px rgba(228,64,95,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0) scale(1)';e.currentTarget.style.boxShadow='0 4px 12px rgba(228,64,95,.3)'}}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" style={{background:'linear-gradient(135deg, #FF0000, #CC0000)',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:12,transition:'all .3s',boxShadow:'0 4px 12px rgba(255,0,0,.3)',color:'white',textDecoration:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px) scale(1.1)';e.currentTarget.style.boxShadow='0 8px 20px rgba(255,0,0,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0) scale(1)';e.currentTarget.style.boxShadow='0 4px 12px rgba(255,0,0,.3)'}}>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>

            <h3 style={{fontSize:'20px',fontWeight:700,marginTop:25,marginBottom:15}}>Информация</h3>
            <ul className="footer-links">
              <li><Link href="/reviews">Отзывы</Link></li>
              <li><Link href="/faq">Частые вопросы</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div>&copy; 2025 Шале-Тюленя. Все права защищены.</div>
        </div>
      </div>
    </footer>
  )
}
