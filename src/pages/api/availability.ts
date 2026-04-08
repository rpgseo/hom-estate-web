export const prerender = false

import type { APIRoute } from 'astro'
import { getBookingsByRoom } from '../../lib/strapi'

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const roomId = url.searchParams.get('room')

  if (!roomId) {
    return new Response(JSON.stringify({ error: 'Missing required param: room' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { data: bookings } = await getBookingsByRoom(roomId)

    // Return only check-in/check-out dates (no guest info)
    const occupiedPeriods = bookings.map((b: any) => ({
      checkIn: b.checkIn,
      checkOut: b.checkOut,
      status: b.status,
    }))

    return new Response(JSON.stringify({ occupiedPeriods }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to check availability' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
