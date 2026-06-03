import React, { useEffect, useMemo, useRef } from 'react'
import '../projo-styles/Carousl.css'

const Carousl = () => {
  const trackRef = useRef(null)
  const isTeleportingRef = useRef(false)

  const items = useMemo(
    () => [
      { title: 'Aurora', theme: 'aurora' },
      { title: 'Ocean', theme: 'ocean' },
      { title: 'Sunset', theme: 'sunset' },
      { title: 'Grape', theme: 'grape' },
      { title: 'Mint', theme: 'mint' },
    ],
    [],
  )

  const copies = 7
  const middleCopy = Math.floor(copies / 2)

  const repeatedItems = useMemo(() => {
    if (items.length === 0) return []
    const out = []
    for (let c = 0; c < copies; c += 1) out.push(...items)
    return out
  }, [items])

  const getCardWidth = () => {
    const track = trackRef.current
    if (!track) return 0
    const firstCard = track.querySelector('.carousl-card')
    if (!firstCard) return 0
    const styles = window.getComputedStyle(track)
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
    return firstCard.getBoundingClientRect().width + gap
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const goToMiddle = () => {
      const cardWidth = getCardWidth()
      if (!cardWidth) return
      track.scrollLeft = middleCopy * items.length * cardWidth
    }

    const onResize = () => {
      goToMiddle()
    }

    const onScroll = () => {
      if (isTeleportingRef.current) return
      const cardWidth = getCardWidth()
      if (!cardWidth) return

      const cycle = items.length * cardWidth
      const leftBoundary = cycle * 1
      const rightBoundary = cycle * (copies - 2)

      if (track.scrollLeft <= leftBoundary || track.scrollLeft >= rightBoundary) {
        const normalized = ((track.scrollLeft % cycle) + cycle) % cycle
        const next = middleCopy * cycle + normalized

        isTeleportingRef.current = true
        track.classList.add('no-smooth')
        track.scrollLeft = next
        requestAnimationFrame(() => {
          track.classList.remove('no-smooth')
          isTeleportingRef.current = false
        })
      }
    }

    goToMiddle()
    window.addEventListener('resize', onResize)
    track.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', onResize)
      track.removeEventListener('scroll', onScroll)
    }
  }, [items.length])

  return (
    <div className="carousl-page projo">
      <div className="carousl-header">
        <h2>Carousl</h2>
      </div>

      <div ref={trackRef} className="carousl-track" aria-label="Horizontal carousel">
        {repeatedItems.map((item, index) => (
          <section
            key={`${item.title}-${index}`}
            className={`carousl-card ${item.theme}`}
            aria-label={item.title}
          >
            <div className="carousl-card-inner">
              <span className="carousl-card-label">{item.title}</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Carousl

