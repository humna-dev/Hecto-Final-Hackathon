Hecto: A Q-Commerce Marketplace for Chairs & Sofas 🛋️🪑

FurnitureTuck is a dynamic and responsive online marketplace for ordering chairs, sofas, and related furniture. It features a user-friendly interface, seamless navigation, and robust backend integration. This project is designed to offer a top-tier shopping experience for those looking to furnish their homes with quality furniture.

Features 🌟 Dynamic Product Listings: Real-time data fetched from Sanity CMS for chairs, sofas, and related furniture. Search & Filters: Functional search bar and category filters to easily find the perfect piece of furniture. Detailed Pages: Dynamic routing for product detail pages with "Add to Cart" functionality. Responsive Design: Optimized for all screen sizes, from mobile phones to desktop browsers. Secure API Handling: Environment variables ensure secure backend integration. Performance Optimizations: Lazy loading, image compression, and a clean, scalable codebase.

Tech Stack 🔧 Frontend: Next.js 15, Tailwind CSS, TypeScript Backend: Sanity CMS Hosting: Vercel

Install dependencies: npm install Create a .env file: Add the following environment variables to connect with Sanity CMS:

.env NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id NEXT_PUBLIC_SANITY_DATASET=production Run the development server:

npm run dev
 Open the app: Visit http://localhost:3000 in your browser.

Testing 🧪 Types of Tests: Functional Testing: Validates the product listing, search, filters, and detail pages. Performance Testing: Optimized for speed and responsiveness using Lighthouse. Security Testing: Ensures secure API key handling and proper input validations. Test Reports: Testing results are documented in the Testing_Report.csv file available in the repository.

Deployment 🚀 The project is deployed on Vercel.

Once deployment is finalized, the staging environment link will be available here.