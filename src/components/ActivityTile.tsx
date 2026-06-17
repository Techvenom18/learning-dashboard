'use client'

import { motion } from 'framer-motion'

const generateActivity = () => {
  return Array.from({ length: 35 }, () => Math.floor(Math.random() * 4))
}

const colorMap = [
  'rgba(255,255,255,0.05)',
  'rgba(139,92,246,0.3)',
  'rgba(139,92,246,0.6)',
  'rgba(139,92,246,1)',
]

export default function ActivityTile({ delay = 0 }: { delay?: number }) {
  const activity = generateActivity()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay }}
      whileHover={{
        scale: 1.01,
        boxShadow: '0 0 25px rgba(99,102,241,0.25)',
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(17,17,24,1) 60%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '20px',
        gridColumn: 'span 2',
      }}
    >
      <h3 style={{ color: '#fff', fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>
        Learning Activity
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '6px' }}>
        {activity.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + i * 0.02, type: 'spring', stiffness: 300 }}
            style={{
              width: '32px', height: '32px',
              borderRadius: '4px',
              backgroundColor: colorMap[level],
            }}
          />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>Less</span>
        {colorMap.map((color, i) => (
          <div key={i} style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: color }} />
        ))}
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>More</span>
      </div>
    </motion.article>
  )
}