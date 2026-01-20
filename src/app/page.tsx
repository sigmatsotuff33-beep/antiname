import { Shield, Zap, Users, Settings, Globe, Lock } from 'lucide-react'
import Header from '@/components/Header'
import DiscordButton from '@/components/DiscordButton'
import FeatureCard from '@/components/FeatureCard'

const features = [
  {
    icon: Shield,
    title: 'Advanced Protection',
    description: 'State-of-the-art security features to keep your data safe'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless user experience'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by the community, for the community'
  },
  {
    icon: Settings,
    title: 'Customizable',
    description: 'Tailor the experience to match your needs'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with users worldwide'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your privacy is our top priority'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Digital Safety
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The next-generation platform for digital identity and privacy protection
          </p>
          <DiscordButton />
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
