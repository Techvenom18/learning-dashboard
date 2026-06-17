'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Home, BarChart2, Settings, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        animate={{ width: collapsed ? 70 : 220 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="desktop-sidebar"
        style={{
          height: '100vh',
          backgroundColor: '#0d0d14',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 8px', marginBottom: '32px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 'bold', color: '#fff',
            boxShadow: '0 0 12px rgba(139,92,246,0.5)',
          }}>
            S
          </div>
          {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
         >
            <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Sumit Rathore
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', whiteSpace: 'nowrap' }}>
              Student
            </span>
          </motion.div>
          )}
        </div>

        {/* Nav Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.label
            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 8px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'transparent',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  fontSize: '14px',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-bg"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(139,92,246,0.2)',
                      borderRadius: '10px',
                      border: '1px solid rgba(139,92,246,0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={18} style={{ flexShrink: 0, position: 'relative', zIndex: 1 }} />
                {!collapsed && (
                  <span style={{ position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}>
                    {item.label}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'rgba(255,255,255,0.08)',
            border: 'none', cursor: 'pointer', color: '#fff',
            margin: '0 auto',
          }}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        backgroundColor: '#0d0d14',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0',
        zIndex: 50,
      }}>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '4px',
                background: 'transparent', border: 'none',
                cursor: 'pointer',
                color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.4)',
              }}
            >
              <Icon size={20} />
              <span style={{ fontSize: '10px', fontWeight: '500' }}>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}