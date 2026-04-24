'use client'
import { useState, useEffect } from 'react'

export default function AdminPanel() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [bookings, setBookings] = useState<{[key: string]: {status: string}}>({})
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedDates, setSelectedDates] = useState<string[]>([])

  const ADMIN_PASSWORD = 'admin123' // <- Смените на свой пароль

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings()
    }
  }, [isAuthenticated])

  const loadBookings = () => {
    const saved = localStorage.getItem('chalet-bookings')
    if (saved) {
      const data = JSON.parse(saved)
      setBookings(data)
      // Получаем занятые даты за текущий месяц
      updateSelectedDates(data)
    }
  }

  const updateSelectedDates = (data: any) => {
    const monthStart = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`
    const booked = Object.keys(data).filter(date => 
      date.startsWith(monthStart) && data[date].status === 'booked'
    )
    setSelectedDates(booked)
  }

  const saveBookings = () => {
    localStorage.setItem('chalet-bookings', JSON.stringify(bookings))
    // Синхронизируем с другими устройствами
    window.dispatchEvent(new StorageEvent('storage', { 
      key: 'chalet-bookings', 
      newValue: JSON.stringify(bookings) 
    }))
    alert('Изменения сохранены!')
  }

  const toggleDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const newBookings = { ...bookings }
    
    if (newBookings[dateStr]?.status === 'booked') {
      delete newBookings[dateStr]
    } else {
      newBookings[dateStr] = { status: 'booked' }
    }
    
    setBookings(newBookings)
    
    // Обновляем выбранные даты
    const monthStart = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`
    const booked = Object.keys(newBookings).filter(date => 
      date.startsWith(monthStart) && newBookings[date].status === 'booked'
    )
    setSelectedDates(booked)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Неверный пароль!')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="page-container" style={{paddingTop: '120px'}}>
        <div className="container">
          <div className="page-content" style={{maxWidth: '400px', margin: '0 auto'}}>
            <h2 style={{color: 'var(--forest-green)', marginBottom: '20px'}}>Вход в админ-панель</h2>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd'}}
              />
              <button type="submit" className="btn-primary" style={{width: '100%'}}>Войти</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  return (
    <div className="page-container" style={{paddingTop: '120px'}}>
      <div className="container">
        <div className="page-content">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <h2 style={{color: 'var(--forest-green)'}}>Управление бронированиями</h2>
            <button onClick={() => { localStorage.removeItem('chalet-bookings'); loadBookings(); }} className="btn-secondary">Сбросить всё</button>
          </div>

          <div style={{marginBottom: '20px', padding: '15px', background: 'var(--light-green)', borderRadius: '8px'}}>
            <p><strong>Инструкция:</strong> Нажимайте на даты, чтобы отметить их как занятые. Занятые даты будут отображаться красным цветом в календаре на сайте.</p>
          </div>

          {/* Навигация по месяцам */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <button onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11)
                setCurrentYear(currentYear - 1)
              } else {
                setCurrentMonth(currentMonth - 1)
              }
            }} className="calendar-nav-btn" style={{padding: '10px 20px'}}>←</button>
            <h3 style={{fontSize: '24px', color: 'var(--forest-green)'}}>{months[currentMonth]} {currentYear}</h3>
            <button onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0)
                setCurrentYear(currentYear + 1)
              } else {
                setCurrentMonth(currentMonth + 1)
              }
            }} className="calendar-nav-btn" style={{padding: '10px 20px'}}>→</button>
          </div>

          {/* Календарь для админа */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '20px'}}>
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
              <div key={day} style={{textAlign: 'center', fontWeight: 'bold', padding: '10px', background: 'var(--gray)', borderRadius: '8px'}}>{day}</div>
            ))}
            
            {Array.from({length: adjustedFirstDay}).map((_, i) => (
              <div key={`empty-${i}`} style={{padding: '10px', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}></div>
            ))}
            
            {Array.from({length: daysInMonth}).map((_, i) => {
              const day = i + 1
              const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
              const isBooked = bookings[dateStr]?.status === 'booked'
              
              return (
                <div
                  key={day}
                  onClick={() => toggleDate(day)}
                  style={{
                    padding: '10px',
                    background: isBooked ? '#ffebee' : '#e8f5e9',
                    border: isBooked ? '2px solid #ef9a9a' : '2px solid #a5d6a7',
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: isBooked ? '#c62828' : '#2e7d32',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                >
                  {day}
                  {isBooked && <span style={{marginLeft: '5px'}}>🔴</span>}
                </div>
              )
            })}
          </div>

          <div style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
            <button onClick={saveBookings} className="btn-primary" style={{flex: 1}}>Сохранить изменения</button>
            <button onClick={loadBookings} className="btn-secondary" style={{flex: 1}}>Отменить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
