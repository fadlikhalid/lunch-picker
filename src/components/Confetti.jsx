import { useState } from 'react'

const COLORS = ['#FF6B2C', '#FFB02E', '#FF4D6D', '#2DD4BF', '#F5EDE6', '#A78BFA']
const PIECES = 36

function makePieces() {
  return Array.from({ length: PIECES }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    drift: (Math.random() - 0.5) * 160,
    delay: Math.random() * 0.25,
    duration: 1.1 + Math.random() * 0.9,
    spin: 360 + Math.random() * 540,
    color: COLORS[i % COLORS.length],
    wide: Math.random() > 0.5,
  }))
}

function Confetti() {
  // Made once per burst; App remounts this component with a new key.
  const [pieces] = useState(makePieces)

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className={piece.wide ? 'confetti-piece wide' : 'confetti-piece'}
          style={{
            left: `${piece.left}%`,
            background: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            '--drift': `${piece.drift}px`,
            '--spin': `${piece.spin}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
