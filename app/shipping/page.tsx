import { Truck, Clock, Shield, MapPin } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
            <p className="text-xl text-muted-foreground">
              Fast, secure, and reliable delivery for all your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Standard Delivery</h2>
              </div>
              <p className="text-muted-foreground mb-4">2-3 business days</p>
              <p className="text-sm text-muted-foreground">Free on orders over $50, otherwise $5.99</p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Express Delivery</h2>
              </div>
              <p className="text-muted-foreground mb-4">1-2 business days</p>
              <p className="text-sm text-muted-foreground">$12.99 for all orders</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Delivery Areas
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  We currently deliver to all 50 states in the United States. Same-day delivery is available in select
                  metropolitan areas.
                </p>
                <h3 className="font-semibold mb-2">Same-Day Delivery Available In:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• New York City, NY</li>
                  <li>• Los Angeles, CA</li>
                  <li>• Chicago, IL</li>
                  <li>• Houston, TX</li>
                  <li>• Phoenix, AZ</li>
                  <li>• Philadelphia, PA</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Secure Packaging
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  All medications are packaged in temperature-controlled, tamper-evident packaging to ensure product
                  integrity and your privacy.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Discreet packaging with no external indication of contents</li>
                  <li>• Temperature-controlled shipping for sensitive medications</li>
                  <li>• Signature required for prescription medications</li>
                  <li>• Insurance coverage up to $100 for lost or damaged packages</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Order Processing</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Orders are processed Monday through Friday, 8 AM to 6 PM EST. Orders placed after 2 PM may be
                  processed the next business day.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Prescription Orders</h3>
                    <p className="text-sm text-muted-foreground">
                      Require prescription verification before processing. This may add 1-2 business days to delivery
                      time.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">OTC Orders</h3>
                    <p className="text-sm text-muted-foreground">
                      Over-the-counter products are processed immediately and typically ship within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Once your order ships, you'll receive a confirmation email with tracking information. You can track
                  your package using:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Our website's order tracking page</li>
                  <li>• Direct carrier tracking (UPS, FedEx, USPS)</li>
                  <li>• SMS notifications (opt-in during checkout)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
