import { Award, Users, Heart, Star } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist & Owner",
      experience: "15+ years",
      specialties: ["Color Specialist", "Balayage Expert"],
      image: "/api/placeholder/300/400"
    },
    {
      name: "Michael Chen",
      role: "Senior Stylist",
      experience: "12+ years",
      specialties: ["Men's Cuts", "Fade Specialist"],
      image: "/api/placeholder/300/400"
    },
    {
      name: "Emily Rodriguez",
      role: "Stylist",
      experience: "8+ years",
      specialties: ["Updos", "Special Occasions"],
      image: "/api/placeholder/300/400"
    },
    {
      name: "David Thompson",
      role: "Junior Stylist",
      experience: "5+ years",
      specialties: ["Women's Cuts", "Highlights"],
      image: "/api/placeholder/300/400"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We're passionate about helping our clients look and feel their best through expert hair care."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every service we provide."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build lasting relationships with our clients and support our local community."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We stay current with the latest trends and techniques in the beauty industry."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Elegance Hair Salon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over a decade, we&apos;ve been creating beautiful transformations and building 
              lasting relationships with our valued clients. Our commitment to excellence 
              and passion for beauty drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2012 by master stylist Sarah Johnson, Elegance Hair Salon began 
                  with a simple mission: to provide exceptional hair care services in a warm, 
                  welcoming environment where every client feels valued and beautiful.
                </p>
                <p>
                  What started as a small salon with just two stylists has grown into a 
                  thriving business with a team of four talented professionals, each bringing 
                  their unique expertise and creative vision to our salon.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of serving thousands of clients, 
                  from brides on their wedding day to professionals looking for the perfect 
                  cut, and families who trust us with their children&apos;s hair care needs.
                </p>
                <p>
                  Our commitment to continuous education and staying current with the latest 
                  trends and techniques ensures that we can offer our clients the best 
                  possible service and results.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To enhance our clients&apos; natural beauty and boost their confidence through 
                expert hair care services, delivered with passion, professionalism, and 
                personalized attention.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the premier destination for hair care in our community, known for 
                exceptional service, innovative techniques, and creating beautiful, 
                long-lasting transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              These core values guide everything we do at Elegance Hair Salon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Our talented team of professionals is dedicated to making you look and feel beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-3">{member.experience} experience</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, specIndex) => (
                    <p key={specIndex} className="text-sm text-gray-500">{specialty}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Clients Choose Elegance Hair Salon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-pink-100">
                Our stylists are certified professionals with years of experience and ongoing training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Products</h3>
              <p className="text-pink-100">
                We use only premium, professional-grade products that are safe and effective.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personalized Care</h3>
              <p className="text-pink-100">
                Every service is tailored to your unique needs, preferences, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 