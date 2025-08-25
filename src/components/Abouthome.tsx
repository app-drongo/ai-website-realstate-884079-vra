// Abouthome Component
// Generated: 2025-08-25T10:14:43.934Z
// Template: about-c001
// Context: Home
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Abouthome() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused Excellence",
      description: "Every client receives personalized attention and white-glove service throughout their luxury real estate journey."
    },
    {
      icon: Lightbulb,
      title: "Market Innovation",
      description: "We leverage cutting-edge marketing strategies and technology to showcase luxury properties to discerning buyers worldwide."
    },
    {
      icon: Heart,
      title: "Relationship Driven",
      description: "Building lasting relationships with clients, ensuring their real estate goals are not just met, but exceeded with integrity."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected to international luxury markets, bringing together buyers and sellers from around the world."
    }
  ]

  const stats = [
    { value: "2015", label: "Established", icon: Award },
    { value: "500+", label: "Luxury Sales", icon: Users },
    { value: "$2.5B+", label: "Sales Volume", icon: TrendingUp },
    { value: "15+", label: "Years Experience", icon: Globe }
  ]

  const team = [
    {
      name: "Amanda Foster",
      role: "Principal & Luxury Specialist",
      image: "AF",
      bio: "Beverly Hills luxury expert with $2.5B+ in career sales and exclusive market insights."
    },
    {
      name: "Michael Sterling",
      role: "Senior Associate", 
      image: "MS",
      bio: "Investment property specialist with deep knowledge of luxury market trends."
    },
    {
      name: "Sophia Chen",
      role: "Marketing Director",
      image: "SC",
      bio: "Award-winning luxury property marketing expert with global reach and vision."
    },
    {
      name: "James Rodriguez",
      role: "Client Relations Manager",
      image: "JR",
      bio: "Dedicated to providing exceptional service and seamless luxury home transactions."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Defining Luxury Real Estate
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              in Beverly Hills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Amanda Foster Luxury Homes represents the pinnacle of Beverly Hills real estate, 
            delivering unparalleled service and expertise to the world's most discerning clientele.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 with a vision to redefine luxury real estate service, Amanda Foster 
                has become synonymous with excellence in Beverly Hills' most prestigious neighborhoods.
              </p>
              <p>
                With over $2.5 billion in career sales, Amanda's deep market knowledge and unwavering 
                commitment to client success has earned the trust of celebrities, executives, and 
                international investors seeking the finest properties.
              </p>
              <p>
                Today, we continue to set the standard for luxury real estate, combining traditional 
                white-glove service with innovative marketing strategies to achieve exceptional results.
              </p>
            </div>
            <Button className="group">
              View Our Portfolio
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Luxury isn't just about price—it's about creating extraordinary experiences for every client."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Amanda Foster, Principal</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Principles</h3>
            <p className="text-muted-foreground">
              The core values that guide our approach to luxury real estate and client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Expert Team</h3>
            <p className="text-muted-foreground">
              Dedicated professionals committed to delivering exceptional results in luxury real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Amanda's expertise and dedication made our luxury home purchase seamless. 
                Her market knowledge and attention to detail are truly exceptional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Williams</div>
                  <div className="text-sm text-muted-foreground">CEO, Williams Entertainment Group</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}