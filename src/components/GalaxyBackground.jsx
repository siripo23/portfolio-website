import React, { useEffect, useRef } from 'react'

const GalaxyBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create stars
    const stars = []
    const starCount = 300

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01
      })
    }

    // Create shooting stars
    const shootingStars = []
    
    const createShootingStar = () => {
      if (Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height / 2,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          opacity: 1,
          angle: Math.PI / 4
        })
      }
    }

    // Create nebula particles
    const nebulas = []
    for (let i = 0; i < 50; i++) {
      nebulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        color: Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.03)' : 'rgba(168, 85, 247, 0.03)',
        speed: Math.random() * 0.2 + 0.1,
        direction: Math.random() * Math.PI * 2
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 8, 22, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw nebulas
      nebulas.forEach(nebula => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
        gradient.addColorStop(0, nebula.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = gradient
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
        
        nebula.x += Math.cos(nebula.direction) * nebula.speed
        nebula.y += Math.sin(nebula.direction) * nebula.speed
        
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius
      })
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
        
        // Add glow effect for brighter stars
        if (star.opacity > 0.7) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.2})`
          ctx.fill()
        }
        
        // Twinkle effect
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed
        }
      })
      
      // Create and draw shooting stars
      createShootingStar()
      
      shootingStars.forEach((star, index) => {
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        const endX = star.x + Math.cos(star.angle) * star.length
        const endY = star.y + Math.sin(star.angle) * star.length
        ctx.lineTo(endX, endY)
        
        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
        
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= 0.01
        
        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1)
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ background: 'radial-gradient(ellipse at center, #0a0e27 0%, #050816 100%)' }}
    />
  )
}

export default GalaxyBackground
