import Link from "next/link"
import { Pill } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Pill className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-primary">PharmaCare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in health and wellness, providing quality medications and healthcare products.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/?category=pain-relief"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=vitamins"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vitamins & Supplements
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=cold-flu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cold & Flu
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=first-aid"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  First Aid
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 PharmaCare. All rights reserved. Licensed Pharmacy.</p>
        </div>
      </div>
    </footer>
  )
}
