const { sql } = require('@vercel/postgres');

async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        date VARCHAR(10) UNIQUE NOT NULL,
        status VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ Таблица bookings создана успешно!');
    
    // Проверяем что таблица создалась
    const result = await sql`SELECT * FROM bookings`;
    console.log('✅ Таблица готова к работе!');
    
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  }
}

createTable();
