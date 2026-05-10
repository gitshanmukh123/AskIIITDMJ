import React from "react"
import { motion } from "framer-motion"
import { MapPin, BookOpen, Brain, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const features = [
  {
    title: "Lost Desk",
    desc: "Report and recover campus items.",
    icon: MapPin,
    link: "/lost-found"
  },
  {
    title: "Campus Exchange",
    desc: "Buy, sell, or share items at IIITDMJ.",
    icon: BookOpen,
    link: "/market"
  },
  {
    title: "Study Notes",
    desc: "Generate quick notes and summaries.",
    icon: Brain,
    link: "/note"
  },
  {
    title: "Mock Prep",
    desc: "Practice interviews with instant feedback.",
    icon: Briefcase,
    link: "/ai-interview"
  }
]

const CampusFeatures = () => {
  const { isDark } = useTheme()
  
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* HEADER */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
>
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex justify-center">
    <div className={`w-60 h-60 sm:w-80 sm:h-80 ${isDark ? "bg-blue-500/20" : "bg-blue-400/15"} blur-[120px] rounded-full`} />
  </div>

  {/* TITLE */}
  <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
    <span className={isDark ? "text-white" : "text-slate-900"}>IIITDMJ</span>
    <span className={`bg-clip-text text-transparent ${isDark ? "bg-linear-to-r from-blue-800 via-blue-600 to-indigo-700" : "bg-linear-to-r from-blue-600 via-blue-500 to-indigo-500"}`}>
      Hub
    </span>
  </h2>

  {/* DESC */}
  <p className={`relative ${isDark ? "text-blue-200/90" : "text-slate-600"} text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4`}>
    Find items, trade goods, study smarter, and connect fast.
  </p>

  {/* ACCENT LINE */}
  <div className="mt-6 sm:mt-8 flex justify-center">
    <div className="h-0.5 w-20 sm:w-28 bg-linear-to-r from-transparent via-blue-500 to-transparent rounded-full" />
  </div>
</motion.div>


      {/* CARDS */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon

          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group relative rounded-2xl p-px ${isDark ? "bg-linear-to-br from-blue-500/40 via-indigo-500/20 to-transparent" : "bg-linear-to-br from-blue-400/30 via-indigo-400/15 to-transparent"}`}
            >
              {/* CARD INNER dsadasdads*/}
              <div className={`h-full rounded-2xl ${isDark ? "bg-slate-950/90" : "bg-white/90"} backdrop-blur-xl ${isDark ? "border-blue-500/10" : "border-blue-300/20"} border p-6 sm:p-8 relative overflow-hidden`}>

                {/* GLOW EFFECT */}
                <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ${isDark ? "bg-linear-to-br from-blue-500/10 via-indigo-500/10 to-transparent" : "bg-linear-to-br from-blue-400/10 via-indigo-400/10 to-transparent"}`} />

                {/* ICON */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/60 transition">
                  <Icon className="text-white" size={22} />
                </div>

                {/* TITLE */}
                <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"} mb-2 sm:mb-3`}>
                  {f.title}
                </h3>

                {/* DESC */}
                <p className={`${isDark ? "text-gray-300/90" : "text-slate-600/90"} text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed`}>
                  {f.desc}
                </p>

                {/* CTA sdfsdss*/}
                <Link
                  to={f.link}
                  className={`inline-flex items-center gap-2 ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} font-medium group-hover:text-blue-300 transition`}
                >
                  Explore
                  <span className="group-hover:translate-x-1 transition">-&gt;</span>
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default CampusFeatures
