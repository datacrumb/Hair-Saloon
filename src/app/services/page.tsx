import { Star, Scissors, Palette, Sparkles, Eye, Heart, Zap, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Eyebrow Hair Extensions",
      description: "Professional eyebrow extensions to enhance your natural brows and create fuller, more defined arches.",
      price: "$75",
      duration: "60 min",
      category: "Brows & Lashes",
      icon: Eye,
      features: [
        "Natural-looking extensions",
        "Customized to your face shape",
        "Long-lasting results",
        "Professional application"
      ]
    },
    {
      id: 2,
      name: "Eyelash Extensions",
      description: "Luxurious eyelash extensions for dramatic, voluminous lashes that enhance your natural beauty.",
      price: "$120",
      duration: "90 min",
      category: "Brows & Lashes",
      icon: Eye,
      features: [
        "Individual lash application",
        "Multiple style options",
        "Gentle on natural lashes",
        "Professional maintenance"
      ]
    },
    {
      id: 3,
      name: "Microblading Tattooing",
      description: "Semi-permanent eyebrow tattooing technique that creates natural-looking, defined brows.",
      price: "$350",
      duration: "120 min",
      category: "Brows & Lashes",
      icon: Heart,
      features: [
        "Semi-permanent results",
        "Natural hair-like strokes",
        "Customized design",
        "Touch-up included"
      ]
    },
    {
      id: 4,
      name: "Dermaplaning Facial",
      description: "Advanced exfoliation treatment that removes dead skin cells and peach fuzz for radiant, smooth skin.",
      price: "$85",
      duration: "45 min",
      category: "Skincare",
      icon: Sparkles,
      features: [
        "Deep exfoliation",
        "Removes peach fuzz",
        "Improves product absorption",
        "Immediate results"
      ]
    },
    {
      id: 5,
      name: "Full Body Waxing",
      description: "Professional waxing services for smooth, hair-free skin from head to toe.",
      price: "$150",
      duration: "60 min",
      category: "Hair Removal",
      icon: Zap,
      features: [
        "Professional waxing",
        "All body areas",
        "Long-lasting results",
        "Smooth finish"
      ]
    },
    {
      id: 6,
      name: "Indian Aromatic Massage",
      description: "Traditional Indian massage techniques with aromatic oils for deep relaxation and wellness.",
      price: "$95",
      duration: "75 min",
      category: "Wellness",
      icon: Heart,
      features: [
        "Traditional techniques",
        "Aromatic oils",
        "Deep relaxation",
        "Stress relief"
      ]
    },
    {
      id: 7,
      name: "Hair Styling",
      description: "Professional hair styling services including cuts, color, and styling for all occasions.",
      price: "$65",
      duration: "60 min",
      category: "Hair",
      icon: Scissors,
      features: [
        "Professional styling",
        "Cut and color",
        "Special occasion styling",
        "Expert consultation"
      ]
    },
    {
      id: 8,
      name: "Botox Treatment",
      description: "Professional Botox injections to reduce fine lines and wrinkles for a more youthful appearance.",
      price: "$350",
      duration: "30 min",
      category: "Anti-Aging",
      icon: Sparkles,
      features: [
        "Professional administration",
        "Reduces fine lines",
        "Natural results",
        "Minimal downtime"
      ]
    }
  ];

  const categories = [
    "All Services",
    "Brows & Lashes",
    "Skincare",
    "Hair Removal",
    "Wellness",
    "Hair",
    "Anti-Aging"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Beauty Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty
            and boost your confidence. Located in St. John Shopping Centre, Liverpool - from brows to body, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-pink-600 font-medium bg-pink-50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-pink-500 fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/book-appointment"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-pink-100 mb-6">
            Book your appointment today and experience the difference that professional beauty care can make.
          </p>
          <a
            href="/book-appointment"
            className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}