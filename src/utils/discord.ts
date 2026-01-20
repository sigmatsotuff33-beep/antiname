export const DISCORD_URL = 'https://discord.gg/WRFmHhmt'

export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }

    if (typeof document === 'undefined') return false

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    return success
  } catch (error) {
    console.error('Failed to copy text:', error)
    return false
  }
}

export const handleDiscordRedirect = () => {
  if (typeof window === 'undefined') return
  window.open(DISCORD_URL, '_blank', 'noopener,noreferrer')
}

export const copyDiscordLink = async (): Promise<boolean> => {
  return copyTextToClipboard(DISCORD_URL)
}
