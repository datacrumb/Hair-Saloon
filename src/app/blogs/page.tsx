import { ChevronDown, Calendar, User, Tag } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "5 Essential Hair Care Tips for Healthy Locks",
      excerpt: "Discover the fundamental practices that will keep your hair healthy, shiny, and beautiful all year round.",
      content: "Maintaining healthy hair requires a combination of proper care, good products, and healthy habits. Here are five essential tips that will transform your hair care routine...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Hair Care",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "The Complete Guide to Hair Coloring: What You Need to Know",
      excerpt: "Everything you need to know about hair coloring, from choosing the right shade to maintaining your color.",
      content: "Hair coloring is an art that combines science with creativity. Whether you're going for a subtle change or a dramatic transformation, understanding the process is key...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "Hair Coloring",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Summer Hair Protection: How to Shield Your Hair from UV Damage",
      excerpt: "Learn how to protect your hair from sun damage and keep it looking great all summer long.",
      content: "Summer brings sunshine and outdoor activities, but it also brings challenges for your hair. UV rays can cause significant damage, leading to dryness, color fading, and breakage...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Seasonal Care",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my appointment?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially for popular time slots and special occasions. For major services like color treatments or special event styling, 2-3 weeks notice is ideal."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "For your first visit, please bring photos of styles you like, information about any previous hair treatments, and arrive with clean, dry hair unless otherwise instructed by your stylist."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes! We offer complimentary consultations for new clients and for major changes. During your consultation, we'll discuss your goals, assess your hair, and create a personalized plan."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24 hours notice for cancellations. Late cancellations or no-shows may be charged a fee. We understand emergencies happen, so please call us as soon as possible if you need to reschedule."
    },
    {
      question: "Do you use professional products?",
      answer: "Absolutely! We use only premium, professional-grade products that are safe, effective, and designed for salon use. We also offer retail products so you can maintain your look at home."
    },
    {
      question: "How long do color treatments typically last?",
      answer: "Color longevity varies depending on the type of service, your hair type, and maintenance. Generally, permanent color lasts 6-8 weeks, while highlights can last 8-12 weeks with proper care."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blogs & FAQs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest hair care tips, trends, and answers to frequently asked questions.
          </p>
        </div>

        {/* Blogs Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-pink-600 font-medium">{blog.category}</span>
                    <span className="text-sm text-gray-500">• {blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-pink-100 mb-6">
            We're here to help! Contact us for personalized advice and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/dashboard"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 