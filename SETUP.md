# Quick Setup Guide

## Prisma + Supabase Integration

Your hair salon application is now configured with Prisma ORM and ready to connect to Supabase PostgreSQL.

### 🚀 Next Steps

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Sign up/login and create a new project
   - Wait for the project to be ready

2. **Get Your Database URL**
   - In your Supabase dashboard, go to **Settings** → **Database**
   - Copy the **Connection string** (URI format)
   - It looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`

3. **Create Environment File**
   - Create a `.env` file in the root directory
   - Add your database URL:
   ```env
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   ```

4. **Push Schema to Database**
   ```bash
   npm run db:push
   ```

5. **Seed with Sample Data**
   ```bash
   npm run db:seed
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

### 📊 Database Schema

Your database now includes:

- **Customers**: Client information with visit tracking
- **Services**: Available services with pricing and duration  
- **Stylists**: Staff members with specialties
- **Appointments**: Booking records with status tracking

### 🔧 Available Commands

```bash
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema to database
npm run db:migrate     # Create migrations (for production)
npm run db:seed        # Seed with sample data
npm run db:studio      # Open Prisma Studio (database GUI)
```

### 🎯 What's Been Updated

✅ **Prisma Schema**: Complete database schema with relationships  
✅ **API Routes**: All endpoints now use Prisma instead of in-memory data  
✅ **Type Safety**: Updated TypeScript types to match Prisma schema  
✅ **Seeding**: Sample data for testing  
✅ **Error Handling**: Proper database error handling  
✅ **Performance**: Optimized queries with indexes  

### 🚨 Important Notes

- The appointment status enum has been updated to uppercase (`SCHEDULED`, `COMPLETED`, etc.)
- Customer phone numbers are now unique
- All relationships have proper foreign keys with cascade deletes
- Database indexes are optimized for common queries

### 🆘 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Use `npm run db:studio` to view your database in a GUI
- Check the Prisma logs for any connection issues
