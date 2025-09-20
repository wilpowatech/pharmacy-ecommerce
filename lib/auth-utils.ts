import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function requireAdmin() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const { data: adminUser, error } = await supabase.from("admin_users").select("*").eq("id", user.id).single()

  if (error || !adminUser) {
    redirect("/admin/login")
  }

  return { user, adminUser }
}
