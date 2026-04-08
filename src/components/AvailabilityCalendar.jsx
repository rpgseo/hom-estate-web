import { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

/**
 * Read-only availability calendar for a property's rooms.
 * Shows occupied/available dates. Users must contact the client to book.
 */
export default function AvailabilityCalendar({ rooms = [], strapiUrl = '' }) {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]?.documentId || '')
  const [occupiedDates, setOccupiedDates] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!selectedRoom) return

    setLoading(true)
    fetch(`/api/availability?room=${selectedRoom}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.occupiedPeriods) {
          // Convert date ranges to individual dates
          const dates = []
          data.occupiedPeriods.forEach((period) => {
            const start = new Date(period.checkIn)
            const end = new Date(period.checkOut)
            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
              dates.push(new Date(d))
            }
          })
          setOccupiedDates(dates)
        }
      })
      .catch(() => setOccupiedDates([]))
      .finally(() => setLoading(false))
  }, [selectedRoom])

  const selectedRoomData = rooms.find((r) => r.documentId === selectedRoom)

  return (
    <div style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      {/* Room selector */}
      {rooms.length > 1 && (
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="room-select"
            style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: '#374151' }}
          >
            Selecciona habitación:
          </label>
          <select
            id="room-select"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #d1d5db',
              fontSize: '0.875rem',
              backgroundColor: '#fff',
            }}
          >
            {rooms.map((room) => (
              <option key={room.documentId} value={room.documentId}>
                {room.name} — {room.priceMonthly} EUR/mes ({room.roomType})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Room info */}
      {selectedRoomData && (
        <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
          <div style={{ fontWeight: 600 }}>{selectedRoomData.name}</div>
          <div style={{ color: '#6b7280', marginTop: '0.25rem' }}>
            {selectedRoomData.size && `${selectedRoomData.size} m² · `}
            {selectedRoomData.maxOccupants && `Max. ${selectedRoomData.maxOccupants} persona${selectedRoomData.maxOccupants > 1 ? 's' : ''}`}
          </div>
          <div style={{ fontWeight: 700, color: '#1d4ed8', marginTop: '0.25rem' }}>
            {selectedRoomData.priceMonthly} EUR/mes
          </div>
        </div>
      )}

      {/* Calendar */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>Cargando disponibilidad...</div>
        ) : (
          <DayPicker
            mode="single"
            numberOfMonths={1}
            disabled={[{ before: new Date() }]}
            modifiers={{
              occupied: occupiedDates,
            }}
            modifiersStyles={{
              occupied: {
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                textDecoration: 'line-through',
              },
            }}
            styles={{
              caption: { color: '#1f2937' },
              day: { borderRadius: '0.375rem' },
            }}
          />
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: '#6b7280' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#dcfce7', border: '1px solid #bbf7d0', display: 'inline-block' }} />
          Disponible
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: '#fee2e2', border: '1px solid #fecaca', display: 'inline-block' }} />
          Ocupado
        </div>
      </div>

      {/* Contact CTA */}
      <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.75rem' }}>
          ¿Interesado? Contacta con nosotros para reservar.
        </p>
        <a
          href="tel:+34636155847"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.25rem',
            backgroundColor: '#2563eb',
            color: '#fff',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          +34 636 155 847
        </a>
      </div>
    </div>
  )
}
