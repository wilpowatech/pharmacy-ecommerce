import { Shield, Eye, Lock, Users } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities. Learn how we protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Information We Collect
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Personal Information</h3>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>• Name, address, phone number, and email address</li>
                  <li>• Payment information (processed securely, not stored)</li>
                  <li>• Medical information (prescriptions, health conditions) when provided</li>
                  <li>• Order history and preferences</li>
                </ul>

                <h3 className="font-semibold mb-3">Automatically Collected Information</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Website usage data and analytics</li>
                  <li>• Device information and IP address</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                How We Use Your Information
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    • <strong>Order Processing:</strong> To fulfill your orders and provide customer service
                  </li>
                  <li>
                    • <strong>Communication:</strong> To send order updates, important notices, and respond to inquiries
                  </li>
                  <li>
                    • <strong>Safety:</strong> To verify prescriptions and ensure medication safety
                  </li>
                  <li>
                    • <strong>Improvement:</strong> To enhance our website and services
                  </li>
                  <li>
                    • <strong>Legal Compliance:</strong> To meet regulatory requirements for pharmacy operations
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Data Security
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your personal and medical information:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers with restricted access</li>
                  <li>• Regular security audits and updates</li>
                  <li>• HIPAA-compliant handling of medical information</li>
                  <li>• Employee training on privacy and security protocols</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Information Sharing
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  We do not sell, rent, or trade your personal information. We may share information only in these
                  limited circumstances:
                </p>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    • <strong>Service Providers:</strong> With trusted partners who help us operate our business
                    (shipping, payment processing)
                  </li>
                  <li>
                    • <strong>Healthcare Providers:</strong> With your doctor or pharmacy for prescription verification
                    (with your consent)
                  </li>
                  <li>
                    • <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                  </li>
                  <li>
                    • <strong>Business Transfers:</strong> In the event of a merger or acquisition (with continued
                    privacy protection)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Access and review your personal information</li>
                  <li>• Request corrections to inaccurate information</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Request deletion of your account and data (subject to legal requirements)</li>
                  <li>• Control cookie preferences through your browser settings</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground">
                  As a licensed pharmacy, we comply with the Health Insurance Portability and Accountability Act
                  (HIPAA). Your protected health information is handled according to strict federal privacy standards.
                  We maintain detailed policies for accessing, using, and disclosing your medical information, and we
                  provide additional protections beyond what is required by law.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or how we handle your information, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p>
                    <strong>Email:</strong> privacy@pharmacare.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong>Mail:</strong> PharmaCare Privacy Officer
                    <br />
                    123 Healthcare Ave
                    <br />
                    Medical District, MD 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
