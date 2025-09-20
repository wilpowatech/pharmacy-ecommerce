import { requireAdmin } from "@/lib/auth-utils"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { StatsCards } from "@/components/admin/stats-cards"
import { RecentOrders } from "@/components/admin/recent-orders"
import { ProductsOverview } from "@/components/admin/products-overview"

export default async function AdminDashboardPage() {
  const { user, adminUser } = await requireAdmin()
  const supabase = await createClient()

  // Fetch dashboard data
  const [
    { data: products, count: totalProducts },
    { data: orders, count: totalOrders },
    { data: recentOrders },
    { data: lowStockProducts },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact" }),
    supabase.from("orders").select("*", { count: "exact" }),
    supabase
      .from("orders")
      .select(`
        *,
        order_items (
          *,
          products (name)
        )
      `)
      .order("created_at", { ascending: false })
      .limit(5),
    supabase.from("products").select("*").lt("stock_quantity", 10).order("stock_quantity", { ascending: true }),
  ])

  const totalRevenue = orders?.reduce((sum, order) => sum + Number.parseFloat(order.total_amount), 0) || 0
  const pendingOrders = orders?.filter((order) => order.order_status === "processing").length || 0

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} adminUser={adminUser} />

      <div className="container py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {adminUser.full_name}</p>
          </div>

          <StatsCards
            totalProducts={totalProducts || 0}
            totalOrders={totalOrders || 0}
            totalRevenue={totalRevenue}
            pendingOrders={pendingOrders}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecentOrders orders={recentOrders || []} />
            <ProductsOverview products={products || []} lowStockProducts={lowStockProducts || []} />
          </div>
        </div>
      </div>
    </div>
  )
}
