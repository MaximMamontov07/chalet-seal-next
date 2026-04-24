import Link from 'next/link'

const reviews = [
  { author: 'Анна и Дмитрий', date: '15.03.2024', text: 'Отличное место, баня с купелью - сказка! Природа потрясающая, обязательно вернемся еще раз. Очень понравилось внимание к деталям и гостеприимство хозяев.' },
  { author: 'Семья Петровых', date: '03.03.2024', text: 'Дети в восторге от природы, будем еще! Очень понравилось, что есть все удобства для семейного отдыха. Чистый воздух, тишина, красота!' },
  { author: 'Максим', date: '20.02.2024', text: 'Лучший отдых за последние годы! Тишина, природа, чистый воздух. Баня просто супер! Отдельное спасибо за организацию рыбалки.' },
  { author: 'Елена и Сергей', date: '10.02.2024', text: 'Романтический уикенд удался! Очень уютное шале, красивая природа вокруг. Чан под звездным небом - это незабываемо! Рекомендуем всем парам.' },
]

export default function Reviews() {
  return (
    <div className="page-container" style={{paddingTop:'120px'}}>
      <div className="container">
        <div className="section-header" style={{marginBottom:'50px'}}>
          <h1 className="section-title">Отзывы гостей</h1>
        </div>
        <div className="page-content">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-item">
              <div className="review-header">
                <div className="review-author">{review.author}</div>
                <div style={{color:'var(--light-brown)',fontSize:'14px'}}>{review.date}</div>
              </div>
              <p style={{lineHeight:1.6}}>{review.text}</p>
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
