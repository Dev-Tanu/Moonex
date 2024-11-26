import { Shield, DollarSign, Workflow, ArrowLeftRightIcon as ArrowsLeftRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: 'Cheapest TXs',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price',
    icon: DollarSign,
  },
  {
    name: 'CerTIK',
    description: 'We are Audited by CertiK, CertiK is the leading security focused ranking platform to',
    icon: Shield,
  },
  {
    name: 'No Contract Sells',
    description: 'No contract sells to fund the marketing wallets',
    icon: Workflow,
  },
  {
    name: 'CrossDex Support',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price',
    icon: ArrowsLeftRight,
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-neue-machina text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="text-yellow-400">Features</span>
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                  <CardTitle className="font-neue-machina text-white">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-raleway text-sm text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

