'use client'

import React, { useState } from 'react'
import { MessageCircle, Copy } from 'lucide-react'
import { handleDiscordRedirect, copyDiscordLink, copyTextToClipboard } from '@/utils/discord'

interface DiscordButtonProps {
  className?: string
  children?: React.ReactNode
  showCopyButton?: boolean
  defaultMessage?: string
  showMessageComposer?: boolean
}

export default function DiscordButton({ 
  className = "", 
  children = "Join our Discord",
  showCopyButton = false,
  defaultMessage = "",
  showMessageComposer = true,
}: DiscordButtonProps) {
  const [copied, setCopied] = useState(false)
  const [messageCopied, setMessageCopied] = useState(false)
  const [message, setMessage] = useState(defaultMessage)

  const handleCopy = async () => {
    const success = await copyDiscordLink()
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleJoin = async () => {
    handleDiscordRedirect()

    if (!showMessageComposer) return
    const trimmed = message.trim()
    if (!trimmed) return

    const success = await copyTextToClipboard(trimmed)
    if (success) {
      setMessageCopied(true)
      setTimeout(() => setMessageCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {showMessageComposer && (
        <div className="w-full max-w-xl">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <div className="text-sm text-gray-400 mb-2">Message to copy after you join</div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl px-3 py-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message (e.g. Hi! I joined from the website) or e.g. anna loves savier"
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                aria-label="Discord join message"
              />
            </div>
            {messageCopied && (
              <div className="text-xs text-purple-300 mt-2">Copied message to clipboard</div>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={handleJoin}
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
    </div>
  )
}
