# 🚀 Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## 🎥 Demo
![Dashboard Demo](demo.gif)

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏗️ Architecture

### Server/Client Split
- `page.tsx` is a **Server Component** that fetches course data from Supabase directly on the server
- Components with animations (`HeroTile`, `CourseTile`, `ActivityTile`, `Sidebar`) are **Client Components** marked with `'use client'`
- `<Suspense>` wraps the data-fetching component to show skeleton loaders while data loads

### Data Fetching
- Course data is fetched server-side using `@supabase/supabase-js`
- Environment variables are kept secure and never exposed to the client

### Animations
- Framer Motion spring physics for all hover and entrance animations
- Staggered tile entrance using sequential `delay` props
- `layoutId` used for sidebar navigation highlight
- Progress bars animate from 0% to actual value on load

## 🗄️ Database Schema

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text,
  progress integer,
  icon_name text,
  created_at timestamptz default now()
);
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
```bash
   cp .env.example .env.local
```
4. Run the development server:
```bash
   npm run dev
```

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📱 Responsive Design
- **Desktop** (>1024px): Full sidebar + Bento grid
- **Tablet** (768px-1024px): Collapsed icon sidebar + 2 column grid
- **Mobile** (<768px): Bottom navigation + single column layout
