'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: 'Время заезда и выезда?', answer: 'Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд возможны по согласованию.' },
    { question: 'Можно с животными?', answer: 'Да, мы принимаем гостей с животными. Пожалуйста, предупредите заранее. Дополнительная плата не взимается.' },
    { question: 'Есть ли парковка?', answer: 'Да, бесплатная охраняемая парковка на территории комплекса.' },
    { question: 'Какие способы оплаты?', answer: 'Наличные, перевод на карту, оплата по QR-коду. Предоплата 30% при бронировании.' },
    { question: 'Можно ли заказать питание?', answer: 'Да, у нас есть меню с доставкой в шале. Также можно заказать приготовление блюд на мангале.' },
    { question: 'Отмена бронирования?', answer: 'Бесплатная отмена за 7 дней до заезда. При отмене менее чем за 3 дня удерживается 50% предоплаты.' },
  ]

  return (
    <div className="page-container" style={{paddingTop:'120px'}}>
      <div className="container">
        <div className="section-header" style={{marginBottom:'50px'}}>
          <h1 className="section-title">Частые вопросы</h1>
        </div>
        <div className="page-content">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                <span>{faq.question}</span>
                <FontAwesomeIcon icon={openIndex === idx ? faChevronUp : faChevronDown} />
              </div>
              <div className={'faq-answer' + (openIndex === idx ? ' open' : '')}>
                <p style={{paddingTop:'15px',lineHeight:1.6}}>{faq.answer}</p>
              </div>
            </div>
          ))}
          <div style={{textAlign:'center',marginTop:'40px'}}>
            <Link href="/" className="btn-primary">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
