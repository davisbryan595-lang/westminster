export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Reclaim Your Space?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Get a free quote today and let us handle your junk removal needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
            Call Us: (714) 555-0123
          </button>
        </div>
      </div>
    </section>
  )
}
