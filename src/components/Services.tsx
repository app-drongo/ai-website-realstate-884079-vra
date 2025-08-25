// Services Component
// Generated: 2025-08-25T10:14:43.934Z
// Template: services-c002
// Context: Home
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "luxury-home-sales",
      title: "Luxury Home Sales",
      description: "Exclusive marketing for Beverly Hills' finest properties",
      longDescription: "Our luxury home sales service provides white-glove treatment for high-end properties. We leverage our extensive network, premium marketing strategies, and deep market knowledge to achieve record-breaking sales for our discerning clients.",
      icon: BarChart3,
      benefits: [
        "Professional photography and virtual staging",
        "Exclusive buyer network and private showings",
        "Strategic pricing and market positioning",
        "Comprehensive marketing across luxury platforms"
      ],
      pricing: "Competitive commission rates",
      timeline: "30-90 days average market time",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "buyer-representation",
      title: "Luxury Buyer Services",
      description: "Personalized guidance for discerning home buyers",
      longDescription: "We provide exclusive buyer representation services for luxury home purchases in Beverly Hills and surrounding areas. Our deep market knowledge and industry connections ensure you find the perfect property at the best possible terms.",
      icon: Code2,
      benefits: [
        "Access to off-market and pre-market listings",
        "Neighborhood expertise and market analysis",
        "Negotiation and contract management",
        "Coordination with inspectors and contractors"
      ],
      pricing: "Buyer representation at no cost",
      timeline: "Customized to your timeline"
    },
    {
      id: "investment-consulting",
      title: "Investment Property Consulting",
      description: "Strategic guidance for luxury real estate investments",
      longDescription: "Our investment consulting services help clients build wealth through strategic luxury real estate acquisitions. We analyze market trends, identify opportunities, and provide comprehensive investment guidance.",
      icon: Palette,
      benefits: [
        "Market analysis and investment projections",
        "Portfolio diversification strategies",
        "Rental property management connections",
        "Tax advantage consultation coordination"
      ],
      pricing: "Consultation fees vary by scope",
      timeline: "Ongoing advisory relationship"
    },
    {
      id: "property-valuation",
      title: "Property Valuation & Market Analysis",
      description: "Comprehensive property assessments and market insights",
      longDescription: "Get accurate property valuations and detailed market analysis from Beverly Hills' luxury real estate expert. Our comprehensive reports provide the insights you need for informed real estate decisions.",
      icon: Shield,
      benefits: [
        "Comparative market analysis (CMA)",
        "Property condition assessment",
        "Market trend analysis and forecasting",
        "Renovation and improvement recommendations"
      ],
      pricing: "Complimentary for qualified properties",
      timeline: "48-72 hours turnaround",
      badge: "Essential"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Luxury Real Estate Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Exceptional Service for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Luxury Properties
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive real estate services tailored for Beverly Hills' most discerning clients
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Learn More
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Experience Luxury Real Estate Excellence?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether buying, selling, or investing, Amanda Foster Luxury Homes provides unparalleled service and expertise in Beverly Hills' luxury market.
          </p>
          <Button size="lg">
            Schedule Your Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}