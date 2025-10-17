import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">TN</span>
              </div>
              <span className="font-bold text-lg">Westminster</span>
            </div>
            <p className="text-background/80 text-sm">
              Professional junk removal and hauling services for Westminster and surrounding areas
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Yard Cleanup
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Garage Cleanout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(714) 555-0123</span>
              </li>
              <li className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@westminster-junk.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Westminster, CA</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Mon - Fri: 7am - 6pm</li>
              <li>Sat: 8am - 5pm</li>
              <li>Sun: 9am - 4pm</li>
              <li className="pt-2 text-xs">Emergency services available</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; 2025 Westminster Junk & Hauling. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
