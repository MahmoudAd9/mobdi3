# Mobdi3 - Creator-Brand Collaboration Platform

A modern web application built with Next.js that facilitates collaboration between content creators and brands. This platform provides a seamless experience for managing partnerships, campaigns, and communications.

## 🚀 Features

- **User Authentication**
  - Secure login and signup system
  - Role-based access control (Creators, Brands, Admin)

- **Creator Management**
  - Creator profiles and portfolios
  - Campaign management
  - Performance analytics

- **Brand Management**
  - Brand profiles
  - Campaign creation and management
  - Creator discovery and collaboration

- **Admin Dashboard**
  - User management
  - Platform analytics
  - Content moderation

- **Communication**
  - Real-time messaging system
  - Campaign updates and notifications

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context
- **Data Visualization**: Recharts
- **Date Handling**: date-fns
- **Animations**: Tailwind CSS Animate
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   # Add other environment variables as needed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Start the production server:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
mobdi3/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard
│   ├── brand/             # Brand profile
│   ├── brands/            # Brands listing
│   ├── creator/           # Creator profile
│   ├── creators/          # Creators listing
│   ├── login/             # Login page
│   ├── messages/          # Messaging system
│   ├── signup/            # Signup page
│   ├── statistics/        # Analytics
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── styles/               # Global styles and Tailwind configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

[Add your license information here] 

import { API_ROUTES } from '@/constants/apiRoutes';
import { LABELS } from '@/constants/labels';
import { COLORS } from '@/constants/colors'; 

<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  {/* Your content */}
</div> 