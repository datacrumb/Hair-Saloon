import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clear existing data
  await prisma.appointment.deleteMany()
  await prisma.customer.deleteMany()
  await prisma.service.deleteMany()
  await prisma.stylist.deleteMany()

  // Create services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: "Women's Haircut",
        category: "Hair Cutting",
        duration: 60,
        price: 65.00,
        description: "Professional cut and style tailored to your face shape and lifestyle"
      }
    }),
    prisma.service.create({
      data: {
        name: "Men's Haircut",
        category: "Hair Cutting",
        duration: 45,
        price: 35.00,
        description: "Classic or modern cuts with precision styling"
      }
    }),
    prisma.service.create({
      data: {
        name: "Kid's Haircut (12 & under)",
        category: "Hair Cutting",
        duration: 30,
        price: 25.00,
        description: "Gentle and fun haircuts for children"
      }
    }),
    prisma.service.create({
      data: {
        name: "Full Color",
        category: "Hair Coloring",
        duration: 150,
        price: 120.00,
        description: "Complete hair color transformation with premium products"
      }
    }),
    prisma.service.create({
      data: {
        name: "Highlights",
        category: "Hair Coloring",
        duration: 120,
        price: 140.00,
        description: "Partial or full highlights for dimension and brightness"
      }
    }),
    prisma.service.create({
      data: {
        name: "Balayage",
        category: "Hair Coloring",
        duration: 180,
        price: 200.00,
        description: "Hand-painted highlights for natural-looking dimension"
      }
    }),
    prisma.service.create({
      data: {
        name: "Blowout & Style",
        category: "Styling & Treatments",
        duration: 45,
        price: 45.00,
        description: "Professional blowout with your choice of styling"
      }
    }),
    prisma.service.create({
      data: {
        name: "Updo/Special Occasion",
        category: "Styling & Treatments",
        duration: 90,
        price: 85.00,
        description: "Elegant styling for weddings, proms, and special events"
      }
    })
  ])

  console.log(`✅ Created ${services.length} services`)

  // Create stylists
  const stylists = await Promise.all([
    prisma.stylist.create({
      data: {
        name: "Sarah Johnson",
        email: "sarah.johnson@salon.com",
        phone: "555-0101",
        specialties: ["Color Specialist", "Balayage Expert", "Hair Coloring"]
      }
    }),
    prisma.stylist.create({
      data: {
        name: "Michael Chen",
        email: "michael.chen@salon.com",
        phone: "555-0102",
        specialties: ["Men's Cuts", "Fade Specialist", "Hair Cutting"]
      }
    }),
    prisma.stylist.create({
      data: {
        name: "Emily Rodriguez",
        email: "emily.rodriguez@salon.com",
        phone: "555-0103",
        specialties: ["Updos", "Special Occasions", "Styling & Treatments"]
      }
    }),
    prisma.stylist.create({
      data: {
        name: "David Thompson",
        email: "david.thompson@salon.com",
        phone: "555-0104",
        specialties: ["Women's Cuts", "Highlights", "Hair Cutting", "Hair Coloring"]
      }
    })
  ])

  console.log(`✅ Created ${stylists.length} stylists`)

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: "Jane Smith",
        phone: "555-0123",
        email: "jane.smith@email.com",
        address: "123 Main St, City, State 12345",
        dateOfBirth: new Date("1990-05-15"),
        notes: "Prefers Sarah for cuts, allergic to certain products",
        totalVisits: 5
      }
    }),
    prisma.customer.create({
      data: {
        name: "Mike Johnson",
        phone: "555-0456",
        email: "mike.j@email.com",
        address: "456 Oak Ave, City, State 12345",
        dateOfBirth: new Date("1985-08-22"),
        notes: "Likes short cuts, prefers Michael",
        totalVisits: 3
      }
    }),
    prisma.customer.create({
      data: {
        name: "Lisa Davis",
        phone: "555-0789",
        email: "lisa.davis@email.com",
        address: "789 Pine Rd, City, State 12345",
        dateOfBirth: new Date("1992-12-10"),
        notes: "Regular client, loves highlights",
        totalVisits: 8
      }
    })
  ])

  console.log(`✅ Created ${customers.length} customers`)

  // Create sample appointments
  const appointments = await Promise.all([
    prisma.appointment.create({
      data: {
        customerId: customers[0].id,
        customerName: customers[0].name,
        customerPhone: customers[0].phone,
        customerEmail: customers[0].email,
        serviceId: services[0].id, // Women's Haircut
        serviceName: services[0].name,
        stylistId: stylists[0].id, // Sarah Johnson
        stylistName: stylists[0].name,
        date: "2024-01-20",
        time: "10:00",
        duration: 60,
        price: 65.00,
        status: "SCHEDULED",
        notes: "First time client",
        isWalkIn: false
      }
    }),
    prisma.appointment.create({
      data: {
        customerId: customers[1].id,
        customerName: customers[1].name,
        customerPhone: customers[1].phone,
        customerEmail: customers[1].email,
        serviceId: services[1].id, // Men's Haircut
        serviceName: services[1].name,
        stylistId: stylists[1].id, // Michael Chen
        stylistName: stylists[1].name,
        date: "2024-01-20",
        time: "14:00",
        duration: 45,
        price: 35.00,
        status: "SCHEDULED",
        notes: "Regular client",
        isWalkIn: false
      }
    }),
    prisma.appointment.create({
      data: {
        customerId: customers[2].id,
        customerName: customers[2].name,
        customerPhone: customers[2].phone,
        customerEmail: customers[2].email,
        serviceId: services[4].id, // Highlights
        serviceName: services[4].name,
        stylistId: stylists[3].id, // David Thompson
        stylistName: stylists[3].name,
        date: "2024-01-21",
        time: "11:00",
        duration: 120,
        price: 140.00,
        status: "SCHEDULED",
        notes: "Full highlights, bring reference photos",
        isWalkIn: false
      }
    })
  ])

  console.log(`✅ Created ${appointments.length} appointments`)

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
