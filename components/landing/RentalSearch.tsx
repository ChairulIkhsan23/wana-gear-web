"use client"

import { useState } from "react"
import { ContainerContent } from "./Container"
import { ActivitySelect } from "./ActivitySelect"
import { PeopleSelect } from "./PeopleSelect"
import { DurationSelect } from "./DurationSelect"
import { QuickActivities } from "./QuickActivities"
import { AdventureButton } from "./AdventureButton"

export function RentalSearch() {
  const [activity, setActivity] = useState("")
  const [people, setPeople] = useState("")
  const [duration, setDuration] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!activity || !people || !duration) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <section className="relative z-20 -mt-12 lg:-mt-16 pb-8 lg:pb-12">
      <ContainerContent>
        <div className="bg-surface rounded-xl border border-border shadow-sm p-5 lg:p-7">
          <div className="mb-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-2">
              Mau Petualangan Seperti Apa?
            </h2>
            <p className="text-sm lg:text-base text-foreground-secondary leading-relaxed">
              Pilih aktivitas, jumlah peserta, dan durasi perjalanan untuk mendapatkan rekomendasi perlengkapan yang sesuai.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 lg:space-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-end">
              <ActivitySelect value={activity} onChange={setActivity} disabled={loading} />
              <PeopleSelect value={people} onChange={setPeople} disabled={loading} />
              <DurationSelect value={duration} onChange={setDuration} disabled={loading} />
              <div className="lg:col-span-1">
                <AdventureButton loading={loading} disabled={loading || !activity || !people || !duration} onClick={handleSubmit} />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <QuickActivities selectedActivity={activity} onSelectActivity={setActivity} disabled={loading} />
            </div>
          </form>
        </div>
      </ContainerContent>
    </section>
  )
}