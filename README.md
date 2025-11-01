# Amazon Clone - E-commerce Website

A modern, fully-functional e-commerce website inspired by Amazon, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### 🛍️ Core Functionality
- **Product Browsing**: Browse through a wide selection of products across multiple categories
- **Search**: Search for products by name, description, or category
- **Product Details**: View detailed product information, images, ratings, and reviews
- **Shopping Cart**: Add/remove items, update quantities, and view cart totals
- **Checkout**: Complete checkout process with shipping and payment information
- **User Authentication**: Secure email/password authentication with NextAuth
- **User Account**: Manage account settings, orders, and preferences (protected route)

### 🎨 Design Features
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Amazon-Inspired UI**: Clean, familiar interface inspired by Amazon's design
- **Modern Styling**: Built with Tailwind CSS for a polished, professional look
- **Product Categories**: Electronics, Fashion, Home & Kitchen, Books, Sports, and Toys & Games
- **Prime Badges**: Visual indicators for Prime-eligible products
- **Deals Section**: Featured deals with original and discounted prices

### 🛠️ Technical Features
- **Next.js 14**: Latest version with App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **NextAuth v5**: Secure authentication with Credentials provider
- **Password Hashing**: bcrypt for secure password storage
- **Form Validation**: Zod for client and server-side validation
- **Protected Routes**: Middleware-based route protection
- **Client-Side State Management**: React Context API for shopping cart and sessions
- **Local Storage**: Cart persistence across sessions
- **Image Optimization**: Next.js Image component for optimized loading
- **Static Generation**: Pre-rendered pages for fast loading times

## Project Structure

```
/vercel/sandbox/
├── app/                      # Next.js App Router pages
│   ├── account/             # User account page
│   ├── cart/                # Shopping cart page
│   ├── checkout/            # Checkout page
│   ├── product/[id]/        # Dynamic product detail pages
│   ├── products/            # Product listing page
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── CategoryCard.tsx     # Category display card
│   ├── Footer.tsx           # Site footer
│   ├── Header.tsx           # Site header with navigation
│   └── ProductCard.tsx      # Product display card
├── lib/                     # Utility functions and data
│   ├── CartContext.tsx      # Shopping cart state management
│   └── data.ts              # Mock product and category data
├── types/                   # TypeScript type definitions
│   └── index.ts             # Shared types
└── Configuration files
    ├── next.config.mjs      # Next.js configuration
    ├── tailwind.config.ts   # Tailwind CSS configuration
    ├── tsconfig.json        # TypeScript configuration
    └── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

**Important**: Generate a secure secret for production:
```bash
openssl rand -base64 32
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Homepage (`/`)
- Hero section with call-to-action
- Category navigation grid
- Today's deals section
- Featured products
- Prime membership promotion

### Authentication Pages

#### Login Page (`/login`)
- Email/password login form
- Form validation with error messages
- Redirect to account page on success
- Link to registration page
- Secure credential handling

#### Register Page (`/register`)
- User registration form (name, email, password)
- Password confirmation validation
- Automatic login after registration
- Duplicate email detection
- Password hashing with bcrypt

### Products Page (`/products`)
- Product grid with filtering and sorting
- Category filtering via URL parameters
- Search functionality
- Sidebar with filters (Prime, price range, ratings)
- Sort by: Featured, Price (Low/High), Rating

### Product Detail Page (`/product/[id]`)
- Large product image
- Product name, rating, and reviews
- Price with discounts
- Prime eligibility badge
- Product description and features
- Quantity selector
- Add to Cart and Buy Now buttons
- Customer reviews section

### Shopping Cart (`/cart`)
- List of cart items with images
- Quantity adjustment
- Remove items
- Order summary with totals
- Proceed to checkout button
- Continue shopping link

### Checkout (`/checkout`)
- Shipping address form
- Payment information form
- Order summary sidebar
- Place order functionality

### Account Page (`/account`) - Protected Route
- **Authentication Required**: Redirects to login if not authenticated
- Account overview dashboard with user information
- Display logged-in user's name and email
- Sign out functionality
- Quick access to orders, settings, addresses
- Payment options management
- Prime membership status
- Contact and support links

## Technologies Used

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript 5.5.3
- **Authentication**: NextAuth.js v5 (beta)
- **Password Hashing**: bcryptjs
- **Validation**: Zod
- **Styling**: Tailwind CSS 3.4.4
- **UI Library**: React 18.3.1
- **Image Optimization**: Next.js Image component
- **State Management**: React Context API
- **Routing**: Next.js App Router
- **Build Tool**: Next.js built-in bundler

## Features in Detail

### Authentication System
- **NextAuth v5**: Modern authentication for Next.js App Router
- **Credentials Provider**: Email/password authentication
- **Secure Password Storage**: Passwords hashed with bcrypt (10 salt rounds)
- **Session Management**: JWT-based sessions
- **Protected Routes**: Middleware-based route protection
- **User Store**: JSON file-based user storage (`lib/users.json`)
- **Form Validation**: Client and server-side validation with Zod
- **Auto-login**: Automatic login after successful registration

### Shopping Cart
- Persistent cart using localStorage
- Add/remove items
- Update quantities
- Real-time total calculation
- Cart count in header

### Product Data
- 12 sample products across 6 categories
- Product images from Unsplash
- Realistic pricing with discounts
- Star ratings and review counts
- Prime eligibility flags
- Stock status

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Touch-friendly interface

## Authentication Setup

### Environment Variables

The application requires the following environment variables in `.env.local`:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXTAUTH_SECRET` | Secret key for encrypting tokens | Generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Base URL of your application | `http://localhost:3000` |

### User Storage

Users are stored in `lib/users.json` with the following structure:

```json
[
  {
    "id": "1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "hashedPassword": "$2a$10$...",
    "createdAt": "2025-11-01T00:00:00.000Z"
  }
]
```

**Security Notes**:
- Passwords are never stored in plain text
- All passwords are hashed using bcrypt with 10 salt rounds
- The JSON file is for demonstration purposes only
- For production, use a proper database (PostgreSQL, MongoDB, etc.)

### API Endpoints

- `POST /api/auth/signin` - Sign in with credentials (handled by NextAuth)
- `POST /api/auth/signout` - Sign out (handled by NextAuth)
- `GET /api/auth/session` - Get current session (handled by NextAuth)
- `POST /api/register` - Register new user

### Protected Routes

The following routes require authentication:
- `/account` - User account dashboard

Unauthenticated users are automatically redirected to `/login`.

## Future Enhancements

Potential features to add:
- OAuth providers (Google, GitHub, etc.)
- Email verification
- Password reset functionality
- Real backend API integration
- Product reviews and ratings system
- Wishlist functionality
- Order history and tracking
- Advanced filtering options
- Product recommendations
- Payment gateway integration
- Admin dashboard for product management

## Demo Notes

This is a demonstration project for educational purposes. It includes:
- Mock product data
- Simulated checkout process
- No real payment processing
- No backend database
- Client-side only cart management

## License

This project is for educational purposes only.

## Acknowledgments

- Design inspired by Amazon.com
- Product images from Unsplash
- Built with Next.js and Tailwind CSS
