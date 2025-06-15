import { footerNavigation } from "@/data/footerNavigation"
import NewsletterSection from "./newsletter-section"
import SocialProfile from "./social-profile"


export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#101628] text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(footerNavigation).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-6 text-lg uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-all duration-200 block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <NewsletterSection />
        {/* Bottom Section */}
        <SocialProfile />
      </div>
    </footer>
  )
}
