'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile({ delay = 0 }: { delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay }}
      whileHover={{
        scale: 1.01,
        boxShadow: '0 0 30px rgba(139,92,246,0.3)',
      }}
      style={{
        gridColumn: 'span 2',
        borderRadius: '16px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1035 0%, #0f0f1a 50%, #0d1529 100%)',
        border: '1px solid rgba(139,92,246,0.3)',
        minHeight: '160px',
      }}
    >
      <div style={{
        position: 'absolute', top: '-40px', left: '-40px',
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '8px' }}>
          Good morning 👋
        </p>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', marginBottom: '20px', lineHeight: 1.2 }}>
          Welcome back, <span style={{ color: '#a78bfa' }}>Sumit!</span>
        </h1>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.1)',
          padding: '8px 16px', borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>
          <Flame size={18} color="#fb923c" />
          <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '500' }}>7 Day Streak</span>
        </div>
      </div>
    </motion.article>
  )
}