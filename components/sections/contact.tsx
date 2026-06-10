'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  const infos = [
    { icon: Mail, label: 'Email', value: 'alex@dupont.dev' },
    { icon: MapPin, label: 'Localisation', value: 'Paris, France' },
    { icon: Clock, label: 'Disponibilité', value: 'Lun–Ven, 9h–18h' },
  ]

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22C55E, transparent)' }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4 block">// Contact</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un projet en tête ? Je serais ravi d'en discuter et de transformer votre vision en réalité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {infos.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass glass-hover flex items-center gap-4 p-5 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</div>
                  <div className="text-white font-medium">{value}</div>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="glass p-6 border-l-2 border-green-500"
            >
              <p className="text-slate-300 italic leading-relaxed">
                "Le design n'est pas juste ce à quoi les choses ressemblent. C'est comment elles fonctionnent."
              </p>
              <p className="text-green-400 text-sm mt-3 font-mono">— Steve Jobs</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass h-full flex flex-col items-center justify-center text-center p-12 min-h-[400px]"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                >
                  <Send className="w-7 h-7 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">Message envoyé !</h3>
                <p className="text-slate-400">Je vous répondrai dans les 24 heures.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 space-y-5">
                {[
                  { label: 'Nom', name: 'name', type: 'text', placeholder: 'Jean Dupont' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'jean@exemple.com' },
                ].map(field => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-slate-400 text-sm mb-2 font-medium">{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-green-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Dites-moi en quoi je peux vous aider..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-green-500/50 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transition-all"
                  style={{ background: sending ? '#16A34A' : 'linear-gradient(135deg, #22C55E, #16A34A)' }}
                >
                  {sending ? (
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
