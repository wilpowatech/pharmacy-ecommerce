import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can browse our products, add them to your cart, and proceed to checkout. No account registration is required - you can checkout as a guest with just your contact and shipping information.",
  },
  {
    question: "Do I need a prescription for all medications?",
    answer:
      "Prescription medications require a valid prescription from a licensed healthcare provider. Over-the-counter medications and health products can be purchased without a prescription.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 2-3 business days. Express delivery (1-2 business days) is available for an additional fee. We also offer same-day delivery in select areas.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and bank transfers. All payments are processed securely.",
  },
  {
    question: "Can I return or exchange products?",
    answer:
      "Due to safety regulations, we cannot accept returns on prescription medications. Over-the-counter products can be returned within 30 days if unopened and in original packaging.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
  },
  {
    question: "Are your medications authentic?",
    answer:
      "Yes, all our medications are sourced directly from licensed manufacturers and distributors. We maintain strict quality control standards and proper storage conditions.",
  },
  {
    question: "Do you offer consultation services?",
    answer:
      "Our licensed pharmacists are available for consultation during business hours. You can call us or use our online chat feature for medication-related questions.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, orders, and policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="border rounded-lg">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="mt-16 text-center bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Us
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
