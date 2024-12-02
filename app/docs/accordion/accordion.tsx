"use client"

import React, { createContext, useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type AccordionContextType = {
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

export const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem: React.FC<{
  title: string
  children: React.ReactNode
  index: number
}> = ({ title, children, index }) => {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionItem must be used within an Accordion')

  const { activeIndex, setActiveIndex } = context
  const isOpen = activeIndex === index

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index)
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span className="font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`accordion-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-4 bg-gray-50" id={`accordion-content-${index}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

