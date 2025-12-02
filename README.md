# 🪄 Menu Magic

> Transform your restaurant's digital presence with intelligent menu management and stunning design.

**Menu Magic** is a modern, full-stack restaurant menu application that combines beautiful UI with powerful functionality. Built for restaurateurs who demand both elegance and efficiency.

---

## ✨ Why Menu Magic?

Traditional menu systems are clunky, outdated, and don't capture your restaurant's vibe. Menu Magic changes that with:

- 🎨 **Stunning Visual Design** - Menus that make mouths water before the first bite
- ⚡ **Blazing Fast Updates** - Change prices, dishes, and descriptions in real-time
- 📱 **Mobile-First Experience** - Gorgeous on every device, from phone to desktop
- 🌙 **Dark Mode Ready** - Perfect ambiance for any setting
- 🔐 **Secure Backend** - Powered by Supabase for enterprise-grade reliability
- 📊 **Analytics Ready** - Track what dishes get the most attention

---

## 🎯 Perfect For

- **Restaurants** looking to modernize their digital menu
- **Cafés** wanting an elegant online presence  
- **Food Trucks** needing quick menu updates on the go
- **Catering Services** showcasing seasonal offerings
- **Cloud Kitchens** managing multiple brand menus

---

## 🚀 Tech Stack

Built with the latest and greatest web technologies:

```
Frontend Magic
├── React 18          → Modern UI with concurrent features
├── TypeScript        → Type-safe development
├── Vite + SWC        → Lightning-fast builds
├── Tailwind CSS      → Beautiful, responsive styling
├── shadcn/ui         → 30+ polished UI components
└── Lucide React      → 1000+ crisp icons

Backend Power
├── Supabase          → PostgreSQL database + Auth
├── TanStack Query    → Smart data fetching & caching
└── React Hook Form   → Silky-smooth form handling

Developer Experience
├── ESLint            → Code quality enforcement
├── TypeScript 5.8    → Latest type system features
└── Path Aliases      → Clean '@/' imports
```

---

## 🎨 Features That Shine

### For Customers
- 🍽️ Browse beautiful, organized menus
- 🔍 Search dishes instantly
- 🏷️ Filter by category, dietary needs, or price
- 📸 High-resolution food photography support
- ⭐ See popular and featured items
- 💬 Read dish descriptions and ingredients

### For Restaurant Owners
- ✏️ Edit menus in real-time
- 📋 Organize dishes by categories
- 💰 Update pricing instantly
- 🖼️ Upload and manage food photos
- 📊 Track menu performance
- 🔄 Duplicate seasonal menus easily
- 📱 Manage from any device

### Technical Excellence
- ✅ Fully accessible (WCAG compliant)
- ✅ Optimistic UI updates
- ✅ Offline-ready with smart caching
- ✅ SEO optimized
- ✅ Responsive across all devices
- ✅ Toast notifications for user feedback
- ✅ Error boundaries for graceful failures

---

## 🏃 Quick Start

```bash
# Clone the magic
git clone <your-repo-url>
cd menu-magic

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase credentials to .env

# Start the development server
npm run dev

# Open http://localhost:8080
```

### Environment Setup

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📦 Available Scripts

```bash
npm run dev        # Start dev server at localhost:8080
npm run build      # Production build with optimizations
npm run build:dev  # Development build for testing
npm run lint       # Check code quality
npm run preview    # Preview production build locally
```

---

## 🎭 Component Library

Menu Magic includes a complete design system:

**Navigation & Layout**
- Navigation Menu, Menubar, Tabs
- Resizable Panels, Scroll Area
- Accordion, Collapsible

**Forms & Input**
- Input, Select, Checkbox, Radio Group
- Date Picker, Slider, Switch
- Input OTP, Command Menu (⌘K)

**Feedback & Overlays**
- Toast Notifications (Sonner)
- Dialog, Alert Dialog, Drawer (Vaul)
- Hover Card, Tooltip, Popover

**Data Display**
- Avatar, Card, Badge
- Progress, Separator, Aspect Ratio
- Charts (Recharts integration)

**Interactive**
- Buttons, Toggle, Toggle Group
- Context Menu, Dropdown Menu
- Carousel (Embla)

---

## 📁 Project Structure

```
menu-magic/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   └── menu/        # Menu-specific components
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities & helpers
│   │   ├── supabase.ts  # Database client
│   │   └── utils.ts     # Helper functions
│   ├── types/           # TypeScript definitions
│   └── styles/          # Global styles
├── public/              # Static assets
└── vite.config.ts       # Vite configuration
```

---

## 🛠️ Built With Love Using

| Technology | Purpose |
|------------|---------|
| **React 18** | Modern UI library with concurrent rendering |
| **TypeScript** | Type safety across the entire codebase |
| **Vite** | Next-gen build tool with HMR |
| **Tailwind CSS** | Utility-first styling framework |
| **shadcn/ui** | Beautiful, accessible component system |
| **Supabase** | PostgreSQL database + authentication |
| **TanStack Query** | Powerful server state management |
| **React Router v6** | Client-side routing |
| **React Hook Form** | Performant form handling |
| **Zod** | TypeScript-first schema validation |
| **Lucide React** | Modern icon library |

---

## 🌟 Highlights

- **Zero Config** - Works out of the box
- **Type Safe** - Full TypeScript coverage
- **Modern Stack** - Latest stable versions
- **Best Practices** - Following React & Vite guidelines
- **Developer Friendly** - Great DX with fast HMR
- **Production Ready** - Optimized builds & error handling
- **Extensible** - Easy to add new features

---

## 🎨 Customization

Menu Magic is built to be customized:

```typescript
// Adjust theme colors in tailwind.config.js
// Modify component variants in components/ui/
// Add new routes in src/pages/
// Extend database schema in Supabase
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

<div align="center">
  <strong>Made with ✨ magic and ☕ coffee</strong>
  <br />
  <sub>Built for restaurants, by developers who care</sub>
</div>
