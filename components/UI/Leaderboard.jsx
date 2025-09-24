'use client'

import { forwardRef } from 'react'
import GlassCard from './GlassCard'

const Leaderboard = forwardRef(({ className = '', ...props }, ref) => {
  const mockData = [
    { rank: 1, name: 'Alex Chen', xp: 2840, streak: 12 },
    { rank: 2, name: 'Sarah Kim', xp: 2650, streak: 8 },
    { rank: 3, name: 'Mike Johnson', xp: 2420, streak: 15 },
    { rank: 4, name: 'Emma Wilson', xp: 2180, streak: 6 },
    { rank: 5, name: 'David Lee', xp: 1950, streak: 9 }
  ]

  return (
    <GlassCard ref={ref} className={`p-6 ${className}`} {...props}>
      <h3 className="text-xl font-bold text-gradient mb-4">Leaderboard</h3>
      <div className="space-y-3">
        {mockData.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-white">#{user.rank}</span>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-400">{user.streak} day streak</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">{user.xp} XP</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
})

Leaderboard.displayName = 'Leaderboard'

export default Leaderboard
