import { Suspense } from 'react'
import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import HeroTile from '@/components/HeroTile'
import CourseTile from '@/components/CourseTile'
import ActivityTile from '@/components/ActivityTile'
import SkeletonLoader from '@/components/SkeletonLoader'

async function DashboardContent() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
        <p style={{ color: '#f87171', fontSize: '14px' }}>
          Failed to load courses. Please try again.
        </p>
      </div>
    )
  }

  return (
    <div className="bento-grid">
      <HeroTile delay={0} />
      {courses?.slice(0, 4).map((course: Course, index: number) => (
        <CourseTile key={course.id} course={course} delay={0.1 + index * 0.1} />
      ))}
      <ActivityTile delay={0.5} />
    </div>
  )
}

export default function Home() {
  return (
    <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#0a0a0f' }}>
      <Suspense fallback={<SkeletonLoader />}>
        <DashboardContent />
      </Suspense>
    </main>
  )
}