'use client'

import React, { useState } from 'react'
import { MessageCircle, Copy } from 'lucide-react'
import { handleDiscordRedirect, copyDiscordLink } from '@/utils/discord'

interface DiscordButtonProps {
  className?: string
  children?: React.ReactNode
  showCopyButton?: boolean
}

export default function DiscordButton({ 
  className = "", 
  children = "Join our Discord",
  showCopyButton = false 
}: DiscordButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copyDiscordLink()
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDiscordRedirect}
        className={`bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        {children}
      </button>
      
      {showCopyButton && (
        <button
          onClick={handleCopy}
          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all transform hover:scale-105"
          title={copied ? "Copied!" : "Copy Discord link"}
        >
          <Copy className="w-4 h-4 text-gray-300" />
        </button>
      )}
    </div>
  )
}
