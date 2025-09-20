import { Pill, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-width-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">About PharmaCare</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in health and wellness, providing quality medications and healthcare products since
              2020.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At PharmaCare, we are committed to making healthcare accessible and affordable for everyone. We believe
                that quality medications and health products should be within reach of every individual and family.
              </p>
              <p className="text-muted-foreground">
                Our team of licensed pharmacists and healthcare professionals work tirelessly to ensure that every
                product we offer meets the highest standards of quality and safety.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Quality assurance in every product we sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Customer-first approach to healthcare</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fast and reliable delivery service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Pill className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Expert pharmaceutical guidance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Why Choose PharmaCare?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Certified</h3>
                <p className="text-sm text-muted-foreground">
                  All our pharmacists are licensed professionals with years of experience
                </p>
              </div>
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and secure delivery to your doorstep within 24-48 hours
                </p>
              </div>
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Our customer service team is always ready to help you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
