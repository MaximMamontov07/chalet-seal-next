'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faLock, faSignOutAlt, faPlus, faTimes, faCalendar } from '@fortawesome/free-solid-svg-icons'

interface BookingData {
  [date: string]: {
    status: 'free' | 'booked'
    name?: string
    phone?: string
    comment?: string
  }
}

const BOOKINGS_KEY = 'chalet-bookings'
const AUTH_KEY = 'adminAuth'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [bookings, setBookings] = useState<BookingData>({})
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' })

  useEffect(() => {
    const auth = localStorage.getItem(AUTH_KEY)
    if (auth === 'true') {
      setIsLoggedIn(true)
      loadBookings()
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
    }
  }, [bookings, isLoggedIn])

  const loadBookings = () => {
    const saved = localStorage.getItem(BOOKINGS_KEY)
    if (saved) setBookings(JSON.parse(saved))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'galka26') {
      setIsLoggedIn(true)
      setError('')
      localStorage.setItem(AUTH_KEY, 'true')
      loadBookings()
    } else {
      setError('Wrong password!')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem(AUTH_KEY)
  }

  const handleDateClick = (dateStr: string) => {
    const current = bookings[dateStr]
    if (current?.status === 'booked') {
      const newBookings = { ...bookings }
      delete newBookings[dateStr]
      setBookings(newBookings)
    } else {
      setSelectedDate(dateStr)
      setFormData({ name: '', phone: '', comment: '' })
      setShowModal(true)
    }
  }

  const handleBook = () => {
    if (selectedDate && formData.name && formData.phone) {
      const newBookings = { ...bookings }
      newBookings[selectedDate] = { status: 'booked', name: formData.name, phone: formData.phone, comment: formData.comment }
      setBookings(newBookings)
      setShowModal(false)
      setSelectedDate(null)
    }
  }

  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a3023, #2e503c)', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🦭</div>
          <h1 style={{ fontSize: '24px', color: '#2e503c', margin: '0 0 5px' }}>Admin Panel</h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>Chalet-Seal</p>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <FontAwesomeIcon icon={faLock} style={{ color: '#2e503c', marginRight: '10px' }} />
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '14px', border: '2px solid #e0e0e0', borderRadius: '12px', fontSize: '16px', marginBottom: '15px', textAlign: 'center', outline: 'none' }} autoFocus />
            {error && <p style={{ color: '#f44336', fontSize: '14px', marginBottom: '15px' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#2e503c', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>Login</button>
          </form>
        </div>
      </div>
    )
  }

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const getStatus = (day: number) => {
    const d = currentYear + '-' + String(currentMonth+1).padStart(2,'0') + '-' + String(day).padStart(2,'0')
    return bookings[d]?.status || 'free'
  }

  const getInfo = (day: number) => {
    const d = currentYear + '-' + String(currentMonth+1).padStart(2,'0') + '-' + String(day).padStart(2,'0')
    return bookings[d]
  }

  const bookedCount = Object.values(bookings).filter(b => b.status === 'booked').length

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', padding: '20px', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '36px' }}>🦭</span>
            <div>
              <h1 style={{ fontSize: '24px', color: '#2e503c', margin: 0 }}>Admin Panel</h1>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Bookings: <strong style={{ color: '#2e503c' }}>{bookedCount}</strong></p>
            </div>
          </div>
          <button onClick={handleLogout} style={{ padding: '10px 20px', background: '#f44336', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <button onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1) } else { setCurrentMonth(currentMonth - 1) } }} style={{ background: 'none', border: '2px solid #2e503c', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#2e503c' }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h2 style={{ fontSize: '22px', color: '#2e503c', margin: 0, fontWeight: 700 }}>{months[currentMonth]} {currentYear}</h2>
            <button onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1) } else { setCurrentMonth(currentMonth + 1) } }} style={{ background: 'none', border: '2px solid #2e503c', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#2e503c' }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', marginBottom: '10px' }}>
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i) => <div key={i} style={{ textAlign: 'center', fontWeight: 600, color: '#2e503c', padding: '10px 0', fontSize: '13px' }}>{d}</div>)}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
            {Array.from({ length: adjustedFirstDay }).map((_, i) => <div key={'e'+i} style={{ aspectRatio: '1' }} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const status = getStatus(day)
              const info = getInfo(day)
              const dateStr = currentYear + '-' + String(currentMonth+1).padStart(2,'0') + '-' + String(day).padStart(2,'0')

              return (
                <div key={day} onClick={() => handleDateClick(dateStr)} title={info ? info.name + ' | ' + info.phone : 'Free'} style={{
                  aspectRatio: '1',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: status === 'booked' ? '#ffebee' : '#e8f5e9',
                  border: '2px solid ' + (status === 'booked' ? '#ef5350' : '#66bb6a'),
                  fontWeight: 600,
                  fontSize: '15px',
                  color: status === 'booked' ? '#c62828' : '#2e7d32'
                }}>
                  <span>{day}</span>
                  {status === 'booked' ? <span style={{ fontSize: '18px', marginTop: '2px' }}>🦭</span> : <span style={{ fontSize: '12px', marginTop: '2px' }}>✅</span>}
                  {info?.name && <span style={{ fontSize: '9px', color: '#666', marginTop: '2px', textAlign: 'center', lineHeight: 1, maxWidth: '90%', overflow: 'hidden' }}>{info.name.split(' ')[0]}</span>}
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#2e503c', marginBottom: '15px', fontSize: '20px' }}>
            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px' }} />
            Active Bookings
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries(bookings).filter(([_, data]) => data.status === 'booked').sort(([a], [b]) => a.localeCompare(b)).map(([date, data]) => (
              <div key={date} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#fff3f3', border: '1px solid #ffcdd2', borderRadius: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <strong style={{ color: '#c62828' }}>{date}</strong>
                  <span style={{ marginLeft: '15px', color: '#666' }}>{data.name} | {data.phone}</span>
                  {data.comment && <span style={{ marginLeft: '10px', color: '#999', fontSize: '12px' }}>({data.comment})</span>}
                </div>
                <button onClick={() => { const newBookings = { ...bookings }; delete newBookings[date]; setBookings(newBookings) }} style={{ background: '#f44336', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>
                  <FontAwesomeIcon icon={faTimes} /> Cancel
                </button>
              </div>
            ))}
            {Object.values(bookings).filter(b => b.status === 'booked').length === 0 && <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>No active bookings</p>}
          </div>
        </div>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }} onClick={() => setShowModal(false)}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '30px', maxWidth: '400px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: '#2e503c', marginBottom: '20px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
              Book: <strong>{selectedDate}</strong>
            </h3>
            <input placeholder="Client Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', marginBottom: '10px', fontSize: '16px', outline: 'none' }} autoFocus />
            <input placeholder="Phone *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', marginBottom: '10px', fontSize: '16px', outline: 'none' }} />
            <input placeholder="Comment" value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #e0e0e0', borderRadius: '8px', marginBottom: '20px', fontSize: '16px', outline: 'none' }} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleBook} style={{ flex: 1, padding: '12px', background: '#2e503c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '16px' }}>
                <FontAwesomeIcon icon={faPlus} /> Book
              </button>
              <button onClick={() => setShowModal(false)} style={{ padding: '12px 24px', background: '#e0e0e0', color: '#333', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
