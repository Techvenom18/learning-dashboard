'use client'

import { motion } from 'framer-motion'

function SkeletonBox({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`bg-white/10 rounded-2xl ${className}`}
    />
  )
}

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {/* Hero Skeleton */}
      <SkeletonBox className="col-span-2 h-40" />

      {/* Course Skeletons */}
      <SkeletonBox className="h-48" />
      <SkeletonBox className="h-48" />
      <SkeletonBox className="h-48" />
      <SkeletonBox className="h-48" />

      {/* Activity Skeleton */}
      <SkeletonBox className="col-span-2 h-48" />
    </div>
  )
}