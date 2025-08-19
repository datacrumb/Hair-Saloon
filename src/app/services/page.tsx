import { Scissors, Palette, Sparkles, Clock, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "Hair Cutting",
      icon: Scissors,
      items: [
        {
          name: "Women's Haircut",
          description: "Professional cut and style tailored to your face shape and lifestyle",
          duration: "45-60 min",
          price: "$45-75"
        },
        {
          name: "Men's Haircut",
          description: "Classic or modern cuts with precision styling",
          duration: "30-45 min",
          price: "$25-45"
        },
        {
          name: "Kid's Haircut (12 & under)",
          description: "Gentle and fun haircuts for children",
          duration: "20-30 min",
          price: "$20-30"
        },
        {
          name: "Bang Trim",
          description: "Quick trim to maintain your bangs",
          duration: "15 min",
          price: "$15"
        }
      ]
    },
    {
      category: "Hair Coloring",
      icon: Palette,
      items: [
        {
          name: "Full Color",
          description: "Complete hair color transformation with premium products",
          duration: "2-3 hours",
          price: "$80-150"
        },
        {
          name: "Highlights",
          description: "Partial or full highlights for dimension and brightness",
          duration: "2-3 hours",
          price: "$90-180"
        },
        {
          name: "Balayage",
          description: "Hand-painted highlights for natural-looking dimension",
          duration: "3-4 hours",
          price: "$120-250"
        },
        {
          name: "Color Correction",
          description: "Fix previous color issues and achieve desired results",
          duration: "3-5 hours",
          price: "$150-300"
        },
        {
          name: "Root Touch-up",
          description: "Maintain your color between full appointments",
          duration: "1-1.5 hours",
          price: "$60-100"
        }
      ]
    },
    {
      category: "Styling & Treatments",
      icon: Sparkles,
      items: [
        {
          name: "Blowout & Style",
          description: "Professional blowout with your choice of styling",
          duration: "45-60 min",
          price: "$35-55"
        },
        {
          name: "Updo/Special Occasion",
          description: "Elegant styling for weddings, proms, and special events",
          duration: "1-2 hours",
          price: "$65-120"
        },
        {
          name: "Deep Conditioning Treatment",
          description: "Intensive moisture treatment for damaged or dry hair",
          duration: "30-45 min",
          price: "$25-40"
        },
        {
          name: "Keratin Treatment",
          description: "Smoothing treatment for frizzy or unruly hair",
          duration: "2-3 hours",
          price: "$200-350"
        },
        {
          name: "Hair Extensions",
          description: "Professional extension application and styling",
          duration: "3-5 hours",
          price: "$300-800"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional hair services. 
            From classic cuts to modern treatments, we have everything you need to look and feel your best.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{service.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-pink-600">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-pink-100 mb-6">
            Contact us to schedule your appointment or book online for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Online
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}