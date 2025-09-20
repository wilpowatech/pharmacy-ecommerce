import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Truck, Clock } from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  const categories = [...new Set(products?.map((p) => p.category) || [])]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Your Health, <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Quality medications and health products delivered safely to your door. Trusted by thousands of customers
              nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                Licensed Pharmacy
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button variant="outline">View All Products</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
