import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data')

// Убеждаемся что папка существует
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath, { recursive: true })
}

const bookingsFile = path.join(dataPath, 'bookings.json')

// Инициализируем файл если не существует
if (!fs.existsSync(bookingsFile)) {
  fs.writeFileSync(bookingsFile, '{}')
}

export async function GET() {
  try {
    const data = fs.readFileSync(bookingsFile, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({})
  }
}

export async function POST(request: Request) {
  try {
    const bookings = await request.json()
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
