import { Suspense } from "react"
import { CheckCircle, Package, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

function SuccessContent({ searchParams }: { searchParams: { orderId?: string } }) {
  const orderId = searchParams.orderId

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">Thank you for your purchase. Your order has been received.</p>
          </div>

          {orderId && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">Order ID:</span>
                    <span className="font-mono text-sm">{orderId}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <p className="font-medium text-sm">Confirmation Email</p>
                        <p className="text-xs text-muted-foreground">Sent to your email address</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Package className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <p className="font-medium text-sm">Processing</p>
                        <p className="text-xs text-muted-foreground">We'll prepare your order</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What happens next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 border rounded-lg">
                <div className="font-medium mb-2">1. Order Processing</div>
                <p className="text-sm text-muted-foreground">
                  We'll review and prepare your order for shipment within 24 hours.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="font-medium mb-2">2. Quality Check</div>
                <p className="text-sm text-muted-foreground">
                  Our pharmacists will verify all medications and ensure quality standards.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="font-medium mb-2">3. Fast Delivery</div>
                <p className="text-sm text-muted-foreground">
                  Your order will be shipped and delivered to your specified address.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            <Button>Track Your Order</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>
}) {
  const params = await searchParams

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent searchParams={params} />
    </Suspense>
  )
}
