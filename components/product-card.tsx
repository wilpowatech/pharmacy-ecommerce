"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, AlertCircle } from "lucide-react"
import { useCart } from "@/components/cart-provider"

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock_quantity: number
  category: string
  image_url?: string
  requires_prescription: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
      },
    })
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-4">
        <div className="aspect-square rounded-lg bg-muted mb-4 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">No Image</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-sm leading-tight">{product.name}</h3>
            {product.requires_prescription && (
              <Badge variant="secondary" className="text-xs">
                <AlertCircle className="h-3 w-3 mr-1" />
                Rx
              </Badge>
            )}
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-primary">${product.price.toFixed(2)}</span>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground">Stock: {product.stock_quantity} available</p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={addToCart} disabled={product.stock_quantity === 0} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock_quantity === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
