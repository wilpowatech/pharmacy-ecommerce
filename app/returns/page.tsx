import { RotateCcw, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-muted-foreground">
              Understanding our return policy for your safety and satisfaction.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-yellow-800 mb-2">Important Safety Notice</h2>
                <p className="text-yellow-700 text-sm">
                  Due to FDA regulations and safety requirements, prescription medications cannot be returned once
                  dispensed. This policy protects the integrity of medications and ensures patient safety.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                What Can Be Returned
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Over-the-counter medications (unopened, original packaging)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Health and wellness products (unopened, original packaging)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Medical devices and equipment (unused, original packaging)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vitamins and supplements (unopened, within expiration date)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                What Cannot Be Returned
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Prescription medications (all types)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Opened or used products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Products past their expiration date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Personal care items (for hygiene reasons)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Return Timeline & Process
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">Return Window</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      You have 30 days from the delivery date to initiate a return for eligible items.
                    </p>
                    <h3 className="font-semibold mb-3">How to Return</h3>
                    <ol className="text-sm text-muted-foreground space-y-2">
                      <li>1. Contact our customer service team</li>
                      <li>2. Receive return authorization and shipping label</li>
                      <li>3. Package items in original packaging</li>
                      <li>4. Ship using provided return label</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Refund Processing</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Refunds are processed within 5-7 business days after we receive your return.
                    </p>
                    <h3 className="font-semibold mb-3">Refund Method</h3>
                    <p className="text-muted-foreground text-sm">
                      Refunds are issued to the original payment method. Credit card refunds may take additional time to
                      appear on your statement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <RotateCcw className="h-6 w-6 text-primary" />
                Damaged or Incorrect Orders
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  If you receive damaged or incorrect items, please contact us immediately. We will:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide immediate replacement at no cost</li>
                  <li>• Arrange pickup of incorrect items</li>
                  <li>• Issue full refund if replacement is not available</li>
                  <li>• Cover all return shipping costs</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Need Help with a Return?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer service team is ready to assist you with any return questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Call: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
