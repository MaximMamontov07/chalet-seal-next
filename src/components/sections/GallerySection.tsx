'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const images = Array.from({length:10},(_,i)=>'/img/gallery/photo-'+(i+1)+'.jpg')
const len = images.length

export default function GallerySection() {
  const [idx, setIdx] = useState<number|null>(null)
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header"><h2 className="section-title">Галерея</h2><p className="section-subtitle">Красота природы</p></div>
        <div className="gallery-grid">
          {images.map((src,i)=><div key={i} onClick={()=>setIdx(i)} className="gallery-item" style={{backgroundImage:'url('+src+')'}}/>)}
        </div>
        {idx!==null&&(
          <div className="gallery-modal" onClick={()=>setIdx(null)}>
            <button className="modal-close" onClick={()=>setIdx(null)}><FontAwesomeIcon icon={faTimes}/></button>
            <button onClick={e=>{e.stopPropagation();setIdx((idx-1+len)%len)}} style={{position:'absolute',left:20,top:'50%',background:'rgba(0,0,0,.7)',color:'white',border:'none',width:50,height:50,borderRadius:'50%',cursor:'pointer',zIndex:2001,display:'flex',alignItems:'center',justifyContent:'center'}}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <img src={images[idx]} alt="" className="modal-image" onClick={e=>e.stopPropagation()}/>
            <button onClick={e=>{e.stopPropagation();setIdx((idx+1)%len)}} style={{position:'absolute',right:20,top:'50%',background:'rgba(0,0,0,.7)',color:'white',border:'none',width:50,height:50,borderRadius:'50%',cursor:'pointer',zIndex:2001,display:'flex',alignItems:'center',justifyContent:'center'}}><FontAwesomeIcon icon={faChevronRight}/></button>
            <div style={{position:'absolute',bottom:20,color:'white',fontSize:16,left:'50%',transform:'translateX(-50%)'}}>{idx+1}/{len}</div>
          </div>
        )}
      </div>
    </section>
  )
}
