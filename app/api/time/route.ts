import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  const res = await fetch(
    'https://worldtimeapi.org/api/timezone/America/Vancouver',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 },
    }
  )
  const data = await res.json()

  return NextResponse.json(data)
}
