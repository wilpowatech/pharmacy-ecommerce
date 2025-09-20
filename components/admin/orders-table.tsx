"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UpdateOrderStatusDialog } from "@/components/admin/update-order-status-dialog"
import { Search, Eye } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Order {
  id: string
  customer_name: string
  customer_email: string
  total_amount: string
  payment_method: string
  payment_status: string
  order_status: string
  created_at: string
  order_items: Array<{
    quantity: number
    products: { name: string }
  }>
}

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOrders = orders.filter(
    (order) =>
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <span className="font-mono text-sm">{order.id.slice(0, 8)}...</span>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customer_name}</p>
                      <p className="text-sm text-muted-foreground">{order.customer_email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {order.order_items.slice(0, 2).map((item, index) => (
                        <p key={index}>
                          {item.quantity}x {item.products.name}
                        </p>
                      ))}
                      {order.order_items.length > 2 && (
                        <p className="text-muted-foreground">+{order.order_items.length - 2} more</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>${Number.parseFloat(order.total_amount).toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant="outline">{order.payment_method}</Badge>
                      <Badge className={getPaymentStatusColor(order.payment_status)}>{order.payment_status}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.order_status)}>{order.order_status}</Badge>
                  </TableCell>
                  <TableCell>{formatDistanceToNow(new Date(order.created_at))} ago</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <UpdateOrderStatusDialog order={order}>
                        <Button variant="ghost" size="sm">
                          Update Status
                        </Button>
                      </UpdateOrderStatusDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
