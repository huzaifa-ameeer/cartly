# Cartly

Cartly is a modern client-side e-commerce storefront built with React, TypeScript, and Vite. It is an original shopping experience with a considered, minimal visual language and no backend, authentication, or real payment processing.

## Features

- Home page with editorial hero, category navigation, trending products, new arrivals, and membership promotion
- Product browsing across 45 products and 9 categories
- Client-side search across product names, brands, and categories
- Product filters for brand, price, rating, and stock availability
- Sorting by featured, price, rating, and newest
- Product detail pages with gallery, specifications, quantity controls, related products, and mock checkout
- Wishlist and cart persistence through `localStorage`
- Responsive navigation and layouts for desktop, tablet, and mobile
- Empty states and a custom 404 page

## Getting Started

Requirements:

- Node.js 18 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:5173/`.

## Scripts

```bash
npm run dev      # Start Vite in development mode
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Project Structure

```text
src/
  components/
    Header.tsx         Search header shell
    Navbar.tsx         Primary navigation links and badges
    Hero.tsx           Homepage hero section
    ProductCard.tsx    Reusable product card
    SectionHeader.tsx  Shared section heading and action link
    ListingPage.tsx    Search, filters, sorting, and product grid
    ProductDetailPage.tsx Product detail and related products
    CartPage.tsx       Cart items and order summary
    WishlistPage.tsx   Saved product grid
    UtilityPages.tsx   Categories, checkout, and 404 pages
    Footer.tsx         Shared footer
    ui.ts              Shared UI helpers and cart persistence
    HomePage.tsx       Homepage composition
  data.ts              Product catalog, categories, and product types
  App.tsx              Hash routing, page composition, and shared state
  App.css              Cartly visual system and responsive layout styles
  index.css            Font loading and global base styles
  main.tsx             React entry point
```

The main application is composed from reusable React pieces such as product cards, section headers, listing filters, product detail views, cart views, wishlist views, and shared footer/navigation surfaces. `SectionHeader` is kept as a standalone component because it is reused across multiple page sections.

## Routes

Cartly uses lightweight hash routing so it works as a static client-side app:

| Route | Purpose |
| --- | --- |
| `#/home` | Storefront homepage |
| `#/shop` | Full product collection |
| `#/category/:name` | Products within a category |
| `#/search/:query` | Search results |
| `#/product/:id` | Product details |
| `#/cart` | Shopping cart |
| `#/wishlist` | Saved products |
| `#/checkout` | Mock checkout summary |
| `#/categories` | Category index |

## Data and Persistence

The catalog lives in `src/data.ts`. Products include pricing, discounts, category, brand, ratings, reviews, stock, images, tags, and specifications.

The cart and wishlist are stored in the browser under:

- `cartly-cart`
- `cartly-wishlist`

The checkout screen is intentionally a demonstration only. It does not submit payment details or call an external service.

## Design Direction

- Headings use Space Grotesk
- Body text, prices, labels, and metadata use JetBrains Mono
- Palette uses warm paper, moss green, and a restrained coral accent
- Product imagery is sourced from Unsplash URLs for the local demo catalog
- Responsive behavior is handled with CSS media queries in `src/App.css`
