import { MessageCircle, Phone, Mail, FileText, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Customer Support</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help you with any questions or concerns about your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Speak directly with our support team</p>
              <Button variant="outline" size="sm">
                Call (555) 123-4567
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Get instant help from our team</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Send us a detailed message</p>
              <Button variant="outline" size="sm">
                <a href="/contact">Send Email</a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Support Hours
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Phone & Live Chat</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 8:00 PM EST
                      <br />
                      Saturday - Sunday: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground text-sm">
                      24/7 - We respond within 24 hours
                      <br />
                      Priority response for urgent matters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Specialized Support
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Pharmacy Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Speak with our licensed pharmacists about medication questions, interactions, and proper usage.
                  </p>
                  <Button size="sm">Consult Pharmacist</Button>
                </div>
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Insurance & Billing</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get help with insurance claims, billing questions, and payment options.
                  </p>
                  <Button size="sm" variant="outline">
                    Billing Support
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Quick Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/faq" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                  <p className="text-sm text-muted-foreground">Find quick answers to common questions</p>
                </a>
                <a href="/shipping" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <p className="text-sm text-muted-foreground">Learn about delivery options and tracking</p>
                </a>
                <a href="/returns" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                  <p className="text-sm text-muted-foreground">Understand our return policy</p>
                </a>
                <a href="/privacy" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-sm text-muted-foreground">Learn how we protect your information</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
