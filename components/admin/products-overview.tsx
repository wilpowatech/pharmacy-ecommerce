import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  stock_quantity: number
  price: string
}

interface ProductsOverviewProps {
  products: Product[]
  lowStockProducts: Product[]
}

export function ProductsOverview({ products, lowStockProducts }: ProductsOverviewProps) {
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category).length
              return (
                <Badge key={category} variant="secondary">
                  {category} ({count})
                </Badge>
              )
            })}
          </div>
        </div>

        {lowStockProducts.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              Low Stock Alert
            </h4>
            <div className="space-y-2">
              {lowStockProducts.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center justify-between p-2 bg-orange-50 rounded">
                  <span className="text-sm">{product.name}</span>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    {product.stock_quantity} left
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
