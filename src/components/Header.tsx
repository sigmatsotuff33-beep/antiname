export default function Header() {
  return (
    <header className="py-6 px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Antiname
        </div>
        <div className="flex space-x-8">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  )
}
