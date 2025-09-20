import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

interface Order {
  id: string
  customer_name: string
  total_amount: string
  order_status: string
  created_at: string
  order_items: Array<{
    quantity: number
    products: { name: string }
  }>
}

interface RecentOrdersProps {
  orders: Order[]
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">No orders yet</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{order.customer_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.order_items.length} item(s) • {formatDistanceToNow(new Date(order.created_at))} ago
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium">${Number.parseFloat(order.total_amount).toFixed(2)}</p>
                  <Badge className={getStatusColor(order.order_status)}>{order.order_status}</Badge>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
