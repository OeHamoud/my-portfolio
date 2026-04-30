"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  life: number
  maxLife: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      const starCount = Math.floor((canvas.width * canvas.height) / 4000)
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Create a shooting star
    const createShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() * Math.PI / 6)
      shootingStarsRef.current.push({
        x: Math.random() * canvas.width,        // full width instead of * 0.8
        y: Math.random() * canvas.height * 0.6, // upper 60% instead of 30%
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        angle: angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    // Draw functions
    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * 0.002 + star.x) * 0.3 + 0.7
      const alpha = star.opacity * twinkle

      // Star glow
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      )
      gradient.addColorStop(0, `rgba(125, 211, 252, ${alpha})`)
      gradient.addColorStop(0.5, `rgba(56, 189, 248, ${alpha * 0.3})`)
      gradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Star core
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
      ctx.fill()
    }

    const drawShootingStar = (star: ShootingStar) => {
      const progress = star.life / star.maxLife
      const fadeOut = progress > 0.7 ? 1 - ((progress - 0.7) / 0.3) : 1
      
      // Calculate tail end position
      const tailX = star.x - Math.cos(star.angle) * star.length
      const tailY = star.y - Math.sin(star.angle) * star.length

      // Create gradient for the trail
      const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y)
      gradient.addColorStop(0, "transparent")
      gradient.addColorStop(0.3, `rgba(255, 150, 50, ${0.3 * fadeOut})`) // Orange glow
      gradient.addColorStop(0.6, `rgba(255, 100, 50, ${0.6 * fadeOut})`) // Red-orange
      gradient.addColorStop(0.8, `rgba(255, 200, 100, ${0.8 * fadeOut})`) // Bright yellow-orange
      gradient.addColorStop(1, `rgba(255, 255, 255, ${fadeOut})`) // White hot tip

      // Draw main trail
      ctx.beginPath()
      ctx.moveTo(tailX, tailY)
      ctx.lineTo(star.x, star.y)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.stroke()

      // Draw burning glow around the head
      const glowGradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, 15
      )
      glowGradient.addColorStop(0, `rgba(255, 255, 255, ${fadeOut})`)
      glowGradient.addColorStop(0.2, `rgba(255, 200, 100, ${0.8 * fadeOut})`)
      glowGradient.addColorStop(0.5, `rgba(255, 100, 50, ${0.4 * fadeOut})`)
      glowGradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(star.x, star.y, 15, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      // Draw sparks/embers
      for (let i = 0; i < 5; i++) {
        const sparkProgress = (progress * 3 + i * 0.2) % 1
        const sparkX = star.x - Math.cos(star.angle) * (star.length * sparkProgress) + (Math.random() - 0.5) * 10
        const sparkY = star.y - Math.sin(star.angle) * (star.length * sparkProgress) + (Math.random() - 0.5) * 10
        const sparkAlpha = (1 - sparkProgress) * fadeOut * 0.6

        ctx.beginPath()
        ctx.arc(sparkX, sparkY, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, ${150 + Math.random() * 100}, 50, ${sparkAlpha})`
        ctx.fill()
      }
    }

    // Animation loop
    let lastShootingStarTime = 0
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#0F172A")
      bgGradient.addColorStop(0.5, "#0C1425")
      bgGradient.addColorStop(1, "#0F172A")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      starsRef.current.forEach((star) => {
        drawStar(star, time)
        
        // Slow drift movement
        star.y += star.speed * 0.1
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Create shooting stars randomly
      if (time - lastShootingStarTime > 6000 + Math.random() * 8000) {
        if (shootingStarsRef.current.length < 3) {
          createShootingStar()
          lastShootingStarTime = time
        }
      }

      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.life++

        if (star.life < star.maxLife && star.x < canvas.width && star.y < canvas.height) {
          drawShootingStar(star)
          return true
        }
        return false
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  )
}
