'use client'

import { motion } from 'framer-motion'
import { Code, Server, Paintbrush, FileCode, BookOpen } from 'lucide-react'
import { Course } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Code, Server, Paintbrush, FileCode, BookOpen,
}

export default function CourseTile({ course, delay = 0 }: { course: Course, delay?: number }) {
  const Icon = iconMap[course.icon_name] || BookOpen

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 25px rgba(139,92,246,0.25)',
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(17,17,24,1) 60%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '12px',
        background: 'rgba(139,92,246,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <Icon size={20} color="#a78bfa" />
      </div>
      <h3 style={{ color: '#fff', fontWeight: '600', fontSize: '14px', marginBottom: '16px', lineHeight: '1.4' }}>
        {course.title}
      </h3>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Progress</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>{course.progress}%</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: delay + 0.3 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
              borderRadius: '999px',
            }}
          />
        </div>
      </div>
    </motion.article>
  )
}