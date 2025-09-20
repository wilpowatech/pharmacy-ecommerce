"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { createClient } from "@/lib/supabase/client"
import { CreditCard, Building2, Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    shippingAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    transferReference: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.customerName.trim()) newErrors.customerName = "Name is required"
    if (!formData.customerEmail.trim()) newErrors.customerEmail = "Email is required"
    if (!formData.customerPhone.trim()) newErrors.customerPhone = "Phone is required"
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = "Shipping address is required"

    if (paymentMethod === "card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required"
      if (!formData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required"
    }

    if (paymentMethod === "transfer" && !formData.transferReference.trim()) {
      newErrors.transferReference = "Transfer reference is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const supabase = createClient()

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_email: formData.customerEmail,
          customer_name: formData.customerName,
          customer_phone: formData.customerPhone,
          total_amount: state.total,
          payment_method: paymentMethod,
          payment_status: paymentMethod === "transfer" ? "pending" : "completed",
          shipping_address: formData.shippingAddress,
        })
        .select()
        .single()

      if (orderError) throw orderError

      // Create order items
      const orderItems = state.items.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity,
      }))

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

      if (itemsError) throw itemsError

      // Clear cart
      dispatch({ type: "CLEAR_CART" })

      // Redirect to success page
      router.push(`/checkout/success?orderId=${order.id}`)
    } catch (error) {
      console.error("Checkout error:", error)
      setErrors({ submit: "Failed to process order. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-4">Add some items to your cart before checking out.</p>
              <Button onClick={() => router.push("/")} className="w-full">
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="customerName">Full Name</Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => updateFormData("customerName", e.target.value)}
                        className={errors.customerName ? "border-destructive" : ""}
                      />
                      {errors.customerName && <p className="text-sm text-destructive mt-1">{errors.customerName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="customerPhone">Phone Number</Label>
                      <Input
                        id="customerPhone"
                        value={formData.customerPhone}
                        onChange={(e) => updateFormData("customerPhone", e.target.value)}
                        className={errors.customerPhone ? "border-destructive" : ""}
                      />
                      {errors.customerPhone && <p className="text-sm text-destructive mt-1">{errors.customerPhone}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customerEmail">Email Address</Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      value={formData.customerEmail}
                      onChange={(e) => updateFormData("customerEmail", e.target.value)}
                      className={errors.customerEmail ? "border-destructive" : ""}
                    />
                    {errors.customerEmail && <p className="text-sm text-destructive mt-1">{errors.customerEmail}</p>}
                  </div>

                  <div>
                    <Label htmlFor="shippingAddress">Shipping Address</Label>
                    <Textarea
                      id="shippingAddress"
                      value={formData.shippingAddress}
                      onChange={(e) => updateFormData("shippingAddress", e.target.value)}
                      className={errors.shippingAddress ? "border-destructive" : ""}
                      rows={3}
                    />
                    {errors.shippingAddress && (
                      <p className="text-sm text-destructive mt-1">{errors.shippingAddress}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label htmlFor="transfer" className="flex items-center gap-2 cursor-pointer">
                        <Building2 className="h-4 w-4" />
                        Bank Transfer
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input
                          id="cardholderName"
                          value={formData.cardholderName}
                          onChange={(e) => updateFormData("cardholderName", e.target.value)}
                          className={errors.cardholderName ? "border-destructive" : ""}
                        />
                        {errors.cardholderName && (
                          <p className="text-sm text-destructive mt-1">{errors.cardholderName}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => updateFormData("cardNumber", e.target.value)}
                          className={errors.cardNumber ? "border-destructive" : ""}
                        />
                        {errors.cardNumber && <p className="text-sm text-destructive mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => updateFormData("expiryDate", e.target.value)}
                            className={errors.expiryDate ? "border-destructive" : ""}
                          />
                          {errors.expiryDate && <p className="text-sm text-destructive mt-1">{errors.expiryDate}</p>}
                        </div>

                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => updateFormData("cvv", e.target.value)}
                            className={errors.cvv ? "border-destructive" : ""}
                          />
                          {errors.cvv && <p className="text-sm text-destructive mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "transfer" && (
                    <div className="mt-6 space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Bank Transfer Details</h4>
                        <div className="text-sm space-y-1">
                          <p>
                            <strong>Bank:</strong> PharmaCare Bank
                          </p>
                          <p>
                            <strong>Account:</strong> 1234567890
                          </p>
                          <p>
                            <strong>Routing:</strong> 987654321
                          </p>
                          <p>
                            <strong>Amount:</strong> ${state.total.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="transferReference">Transfer Reference/Receipt Number</Label>
                        <Input
                          id="transferReference"
                          placeholder="Enter your transfer reference number"
                          value={formData.transferReference}
                          onChange={(e) => updateFormData("transferReference", e.target.value)}
                          className={errors.transferReference ? "border-destructive" : ""}
                        />
                        {errors.transferReference && (
                          <p className="text-sm text-destructive mt-1">{errors.transferReference}</p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>

                  {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}

                  <Button onClick={handleSubmit} disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Place Order - $${state.total.toFixed(2)}`
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
