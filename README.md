# Company Profile Website - Compro

A fully functional company profile website built with React, Vite, Tailwind CSS, and GSAP animations.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
compro/
├── public/
│   └── data/
│       ├── portfolio.json
│       ├── services.json
│       ├── tech-stack.json
│       ├── testimonials.json
│       └── company-info.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Portfolio.jsx
│   │   ├── PortfolioCard.jsx
│   │   ├── TechStack.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

### Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Landing section with animated title and CTA buttons
- **About**: Company information section
- **Services**: Service cards with hover effects
- **Portfolio**: Projects showcase with category filtering
- **TechStack**: Technologies showcase with marquee animation
- **Testimonials**: Client feedback carousel
- **CTA**: Call-to-action section
- **Contact**: Contact form with WhatsApp integration
- **Footer**: Footer with links and information

### Animations

- Hero title/subtitle fade + slide up (GSAP Timeline)
- Scroll trigger reveals for sections
- Stagger animations for grid items
- Hover scale effects on cards
- Tech stack infinite marquee scroll

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fully responsive navigation and components

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS 3
- **Animations**: GSAP 3
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "gsap": "^3.12.2",
  "swiper": "^11.0.0"
}
```

## 🎯 Color Scheme

- **Primary**: `#0f172a` (Dark Navy)
- **Accent Green**: `#22c55e`
- **Accent Blue**: `#3b82f6`
- **Gray 50**: `#f9fafb`
- **Gray 900**: `#111827`

## 🔗 Data Structure

### Portfolio Item

```json
{
  "id": "uuid",
  "title": "Project Name",
  "description": "Short description",
  "image": "/images/project.png",
  "category": "web-app|mobile-app|company-profile",
  "tech": ["React", "Node.js", "MongoDB"],
  "link": "https://demo.com",
  "details": "Extended description"
}
```

### Service Item

```json
{
  "id": "uuid",
  "name": "Service Name",
  "description": "Short description",
  "icon": "emoji",
  "details": "Extended details"
}
```

## 🚀 Deployment

### Vercel

```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Netlify

```bash
npm run build
# Drag and drop dist folder to Netlify
```

## 📝 Customization

1. **Update company info**: Edit `public/data/company-info.json`
2. **Add projects**: Update `public/data/portfolio.json`
3. **Add services**: Update `public/data/services.json`
4. **Modify colors**: Edit `tailwind.config.js`
5. **Update text**: Modify component JSX files

## 🔐 Environment Variables

Create `.env` file if needed:

```
VITE_API_URL=your_api_url
VITE_WHATSAPP_NUMBER=62XXXXXXXXXX
```

## 📄 License

MIT License

## 👥 Support

For questions or support, contact us at contact@vibecoding.com

---

**Created with ❤️ by Vibe Coding**
