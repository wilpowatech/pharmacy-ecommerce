import { requireAdmin } from "@/lib/auth-utils"
import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { ProductsTable } from "@/components/admin/products-table"
import { AddProductDialog } from "@/components/admin/add-product-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function AdminProductsPage() {
  const { user, adminUser } = await requireAdmin()
  const supabase = await createClient()

  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} adminUser={adminUser} />

      <div className="container py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Products</h1>
              <p className="text-muted-foreground">Manage your pharmacy inventory</p>
            </div>
            <AddProductDialog>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </AddProductDialog>
          </div>

          <ProductsTable products={products || []} />
        </div>
      </div>
    </div>
  )
}
