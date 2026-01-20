export const DISCORD_URL = 'https://discord.gg/WRFmHhmt'


export const handleDiscordRedirect = () => {
  window.open(DISCORD_URL, '_blank', 'noopener,noreferrer')
}

export const copyDiscordLink = async (): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(DISCORD_URL)
    return true
  } catch (error) {
    console.error('Failed to copy Discord link:', error)
    return false
  }
}
