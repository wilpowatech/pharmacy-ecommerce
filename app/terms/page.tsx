import { FileText, AlertTriangle, Scale, Shield } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Acceptance of Terms
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground">
                  By accessing and using PharmaCare's website and services, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Pharmacy Services
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Licensed Operations</h3>
                <p className="text-muted-foreground mb-4">
                  PharmaCare is a licensed pharmacy operating under state and federal regulations. All prescription
                  medications are dispensed by licensed pharmacists in accordance with applicable laws.
                </p>

                <h3 className="font-semibold mb-3">Prescription Requirements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Valid prescriptions required for all prescription medications</li>
                  <li>• Prescriptions must be from licensed healthcare providers</li>
                  <li>• We reserve the right to verify prescriptions with prescribing physicians</li>
                  <li>• Controlled substances subject to additional verification requirements</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                User Responsibilities
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">By using our services, you agree to:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Use medications only as prescribed by your healthcare provider</li>
                  <li>• Keep your account information secure and confidential</li>
                  <li>• Notify us immediately of any unauthorized use of your account</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Not share prescription medications with others</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Prohibited Uses
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 mb-4">You may not use our services to:</p>
                <ul className="text-red-800 space-y-2">
                  <li>• Obtain medications without valid prescriptions</li>
                  <li>• Provide false or misleading information</li>
                  <li>• Resell or distribute medications obtained through our service</li>
                  <li>• Violate any local, state, or federal laws</li>
                  <li>• Interfere with or disrupt our services</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Order Acceptance</h3>
                <p className="text-muted-foreground mb-4">
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any
                  order for any reason, including but not limited to product availability, errors in pricing, or
                  suspected fraudulent activity.
                </p>

                <h3 className="font-semibold mb-3">Pricing and Payment</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Prices are subject to change without notice</li>
                  <li>• Payment is required at time of order</li>
                  <li>• We accept major credit cards and bank transfers</li>
                  <li>• Insurance claims processed according to your plan benefits</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  PharmaCare's liability is limited to the maximum extent permitted by law. We are not liable for:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Indirect, incidental, or consequential damages</li>
                  <li>• Delays in delivery due to circumstances beyond our control</li>
                  <li>• Adverse reactions to medications (consult your healthcare provider)</li>
                  <li>• Loss of data or interruption of service</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Privacy and Confidentiality</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground">
                  Your privacy is protected under our Privacy Policy and applicable healthcare privacy laws, including
                  HIPAA. We maintain strict confidentiality of your personal and medical information and will not
                  disclose it except as required by law or with your explicit consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an
                  updated effective date. Your continued use of our services after changes are posted constitutes
                  acceptance of the modified terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about these terms of service, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p>
                    <strong>Email:</strong> legal@pharmacare.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong>Mail:</strong> PharmaCare Legal Department
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
