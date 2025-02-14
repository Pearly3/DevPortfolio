
'use client'

import { Text, types } from 'react-bricks/rsc'
import { useState, useEffect } from 'react'

interface DynamicEffectProps {
  colors: string[]
  texts: string[]
  interval: number
}

const DynamicEffect: types.Brick<DynamicEffectProps> = ({ colors, texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % colors.length)
    }, interval)

    return () => clearInterval(timer)
  }, [colors.length, interval])

  return (
    <div style={{ color: colors[currentIndex], transition: 'color 0.5s ease' }}>
      <Text
        propName="text"
        value={texts[currentIndex]}
        renderBlock={({ children }) => (
          <h2 className="text-3xl font-bold text-center py-8">{children}</h2>
        )}
      />
    </div>
  )
}

DynamicEffect.schema = {
  name: 'dynamic-effect',
  label: 'Dynamic Effect',
  getDefaultProps: () => ({
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    texts: ['Hello', 'World', 'React Bricks'],
    interval: 2000
  }),
  sideEditProps: [
    {
      name: 'interval',
      label: 'Change Interval (ms)',
      type: types.SideEditPropType.Number
    }
  ]
}

export default DynamicEffect
