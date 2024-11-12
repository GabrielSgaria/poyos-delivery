'use client'

import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function SectionOrderNow() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const leftSandwichX = useTransform(scrollYProgress, [0.3, 0.8], [0, -300])
  const rightSandwichX = useTransform(scrollYProgress, [0.3, 0.8], [0, 300])
  const sandwichOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])

  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 150 - 25, // Spread more horizontally, including off-screen
      initialY: Math.random() * 20 + 100,
      rotationSpeed: Math.random() * 360,
      scale: 0.3 + Math.random() * 0.7, // Random scale between 0.3 and 1
      size: Math.floor(Math.random() * (80 - 20 + 1) + 20), // Random size between 20px and 80px
    }))
  }, [])

  const particleY = useTransform(scrollYProgress, [0, 1], ['100%', '900%'])

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[800px] bg-orange-poyos overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none z-30"
          style={{
            left: `${particle.initialX}%`,
            bottom: `${particle.initialY}%`,
            opacity: 0.6,
            y: particleY,
            // eslint-disable-next-line react-hooks/rules-of-hooks
            rotate: useTransform(scrollYProgress, [0, 1], [0, particle.rotationSpeed]),
            scale: particle.scale,
          }}
        >
          <Image
            src="/images/png/1.png"
            alt=""
            width={particle.size}
            height={particle.size}
            className="object-contain w-full h-full md:w-auto md:h-auto"
          />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
        {/* Left sandwich */}
        <motion.div 
          className="absolute left-0 md:-left-40"
          style={{
            x: leftSandwichX,
            opacity: sandwichOpacity
          }}
        >
          <Image
            src="/images/png/5.png"
            alt="Poyos Sandwich Left"
            width={600}
            height={600}
            className="transform scale-x-100 w-48 md:w-auto"
          />
        </motion.div>

        {/* Center content */}
        <div className="text-center z-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-black">
            Hmmmmmmmm...
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-black">
            Deu vontade, né? Pede um lanchinho na sua casa, pede!
          </p>
          <Button asChild className="bg-black hover:bg-gray-800 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full">
            <Link href="https://www.ifood.com.br/delivery/curitiba-pr/poyos---agua-verde-agua-verde/97b4057d-d3a5-4c1a-8b17-62a2da7d6dd3">
              DELIVERY WEB →
            </Link>
          </Button>
        </div>

        {/* Right sandwich */}
        <motion.div 
          className="absolute right-0 md:-right-40"
          style={{
            x: rightSandwichX,
            opacity: sandwichOpacity
          }}
        >
          <Image
            src="/images/png/5.png"
            alt="Poyos Sandwich Right"
            width={600}
            height={600}
            className="transform -scale-x-100 w-48 md:w-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}