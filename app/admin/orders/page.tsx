import { requireAdmin } from "@/lib/auth-utils"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { OrdersTable } from "@/components/admin/orders-table"

export default async function AdminOrdersPage() {
  const { user, adminUser } = await requireAdmin()
  const supabase = await createClient()

  const { data: orders } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (
        *,
        products (name)
      )
    `)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} adminUser={adminUser} />

      <div className="container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="text-muted-foreground">Manage customer orders and fulfillment</p>
          </div>

          <OrdersTable orders={orders || []} />
        </div>
      </div>
    </div>
  )
}
