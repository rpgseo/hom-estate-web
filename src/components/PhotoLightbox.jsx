import { useState, useEffect, useCallback } from 'react'

export default function PhotoLightbox({ images = [], altPrefix = 'Foto' }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const openAt = useCallback((index) => {
    setCurrent(index)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  // Listen for external open-lightbox events (from gallery tiles and tag buttons)
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

  if (!open || images.length === 0) return null

  return (
    <div
      onClick={close}
      className="cd-lightbox"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
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
        className="cd-lightbox-nav-prev"
        style={{
          position: 'absolute', top: '50%', transform: 'translateY(-50%)',
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
        className="cd-lightbox-nav-next"
        style={{
          position: 'absolute', top: '50%', transform: 'translateY(-50%)',
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
  )
}
