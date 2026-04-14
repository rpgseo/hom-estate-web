import { useState, useEffect, useCallback, useRef } from 'react'

export default function PhotoLightbox({ images = [], altPrefix = 'Foto' }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const openAt = useCallback((index) => {
    setCurrent(index)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  // Listen for external open-lightbox events (from tag buttons)
  useEffect(() => {
    const handler = (e) => {
      const idx = e.detail?.index ?? 0
      openAt(idx)
    }
    window.addEventListener('open-lightbox', handler)
    return () => window.removeEventListener('open-lightbox', handler)
  }, [openAt])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

  if (images.length === 0) return null

  const mainImage = images[0]
  const thumbs = images.slice(1, 5)

  return (
    <>
      {/* Mobile: horizontal scroll carousel */}
      {isMobile ? (
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '12px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <style>{`.cd-carousel::-webkit-scrollbar { display: none; }`}</style>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openAt(i)}
              style={{
                flex: '0 0 85%',
                scrollSnapAlign: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                cursor: 'pointer',
              }}
            >
              <img
                src={img}
                alt={`${altPrefix} ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: grid layout 1 large + 4 thumbs */
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '8px',
          aspectRatio: '2.2 / 1',
        }}>
          <div
            onClick={() => openAt(0)}
            style={{
              gridRow: '1 / -1',
              overflow: 'hidden',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          >
            <img
              src={mainImage}
              alt={`${altPrefix} 1`}
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          {thumbs.map((img, i) => (
            <div
              key={i}
              onClick={() => openAt(i + 1)}
              style={{
                overflow: 'hidden',
                borderRadius: '12px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <img
                src={img}
                alt={`${altPrefix} ${i + 2}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {i === thumbs.length - 1 && images.length > 5 && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                  pointerEvents: 'none',
                }}>
                  Ver {images.length} fotos
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Overlay */}
      {open && (
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: isMobile ? '16px' : '40px 60px',
          }}
        >
          <button
            onClick={close}
            style={{
              position: 'absolute', top: 16, right: 20,
              background: 'none', border: 'none', color: '#fff',
              fontSize: '2rem', cursor: 'pointer', lineHeight: 1, zIndex: 10,
            }}
            aria-label="Cerrar"
          >&times;</button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute', left: isMobile ? 8 : 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
              width: 44, height: 44, borderRadius: '50%',
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Anterior"
          >&#8249;</button>

          <img
            onClick={(e) => e.stopPropagation()}
            src={images[current]}
            alt={`${altPrefix} ${current + 1}`}
            style={{
              maxWidth: '100%', maxHeight: '100%',
              objectFit: 'contain', borderRadius: '8px', userSelect: 'none',
            }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute', right: isMobile ? 8 : 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
              width: 44, height: 44, borderRadius: '50%',
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Siguiente"
          >&#8250;</button>

          <div style={{
            position: 'absolute', bottom: 16,
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.85rem', fontWeight: 500,
          }}>
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
