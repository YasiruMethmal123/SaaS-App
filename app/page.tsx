import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <section className="home-section">
        <CompanionCard
            id = "123"
            name = "Artifitial Inteligence"
            topic="Nural Networking"
            subject = "AI"
            duration = {45}
            color="#ffda6e"
          />

          <CompanionCard
            id = "234"
            name = "Calculus"
            topic="Differentiation"
            subject = "Maths"
            duration = {45}
            color="#e5d0ff"
          />

          <CompanionCard
            id = "235"
            name = "Thermal Physics"
            topic="Standard measuring"
            subject = "Physics"
            duration = {45}
            color="#BDE7FF"
          />

      </section>

      <section className="home-section">
        <CompanionList title = "Recently completed sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full"/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page