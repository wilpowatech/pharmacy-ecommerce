import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Shield } from "lucide-react"
import Link from "next/link"

export default function AdminSignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-primary">PharmaCare Admin</span>
          </div>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Check Your Email</CardTitle>
            <CardDescription>We've sent you a confirmation link to activate your admin account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Please check your email and click the confirmation link to activate your administrator account.
              </p>
              <p className="text-sm text-muted-foreground">
                Once confirmed, you'll be able to access the admin dashboard.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/admin/login">
                <Button className="w-full">Return to Login</Button>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Store
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
