import CompanionCard from '@/components/CompanionCard'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Profiel Section</h1>
      <section className="home-section">
        <CompanionCard
            id = "123"
            name = "Artifitial Inteligence"
            topic="Nural Networking"
            subject = "AI"
            duration = {45}
            color="#687FE5"
          />

          <CompanionCard
            id = "234"
            name = "Calculus"
            topic="Differentiation"
            subject = "Maths"
            duration = {45}
            color="#FCD8CD"
          />

          <CompanionCard
            id = "235"
            name = "Thermal Physics"
            topic="Standard measuring"
            subject = "Physics"
            duration = {45}
            color="#EBD6FB"
          />
      </section>
    </main>
  )
}

export default Page