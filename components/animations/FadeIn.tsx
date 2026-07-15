"use client"

import { motion, useInView, type HTMLMotionProps } from "framer-motion"
import { useRef, type ReactNode, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition" | "whileInView"> {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
  margin?: string
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance,
  once = true,
  margin = "-80px",
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: margin as any })

  const initial = { opacity: 0, x: 0, y: 0 }
  
  if (direction === "up") initial.y = distance ?? 24
  else if (direction === "down") initial.y = -(distance ?? 24)
  else if (direction === "left") initial.x = distance ?? 24
  else if (direction === "right") initial.x = -(distance ?? 24)

  return (
    <div ref={ref} className={cn("will-change-transform", className)} {...(props as any)}>
      <motion.div
        initial={initial}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface StaggerContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className={cn(className)}
      {...(props as any)}
    >
      {typeof children === "object" && children !== null && "props" in children
        ? children
        : children}
    </motion.div>
  )
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
}

export function StaggerItem({ children, delay = 0, className, ...props }: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn("will-change-transform", className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
}

export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

export const slideDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function useFadeIn(delay = 0, duration = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" as any })

  return {
    ref,
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
  }
}

export function useStaggerItem(index: number, baseDelay = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" as any })

  return {
    ref,
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, delay: baseDelay * index, ease: [0.25, 0.1, 0.25, 1] },
  }
}

export function useScrollReveal(options: { once?: boolean; margin?: string; delay?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: options.once ?? true, margin: (options.margin ?? "-80px") as any })

  return {
    ref,
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.5, delay: options.delay ?? 0, ease: [0.25, 0.1, 0.25, 1] },
  }
}