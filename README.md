# AINAS Website

The official website for **AINAS** (African Initiative for Nature-Based Solutions) - an NGO dedicated to empowering African communities with innovative nature-based solutions to combat climate change, restore ecosystems, and create sustainable livelihoods.

## About AINAS

AINAS is on a mission to transform African communities through:
- 🌱 Restoring ecosystems and promoting biodiversity
- 🌍 Building resilience to climate change
- 👥 Creating sustainable livelihoods for communities
- 🚰 Expanding access to clean water and energy
- 🌾 Improving agricultural productivity through sustainable practices
- 📚 Capacity building and knowledge transfer


## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **UI Components**: Lucide React icons, custom components
- **Content Management**: Markdown-based content with Gray Matter
- **Carousel**: Swiper.js for image galleries
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ainas-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.


## Content Management

### Adding Blog Posts

Create new markdown files in `content/blog/` with the following frontmatter:

```markdown
---
title: 'Your Post Title'
date: '2024-01-01'
author: 'Author Name'
excerpt: 'Brief description of the post'
coverImage: '/images/your-image.jpg'
category: 'Category Name'
---

Your content here...
```

### Adding Team Members

Add team member profiles in `content/team/` and update the main team data in `data/team.ts`.

### Adding Reports

Place report markdown files in `content/reports/` with appropriate metadata.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Dependencies

- **Next.js** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Gray Matter** - Markdown frontmatter parser
- **Remark** - Markdown processor
- **Swiper** - Touch slider library
- **Lucide React** - Icon library

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## SEO & Performance

The website is optimized for:
- ✅ Search Engine Optimization (SEO)
- ✅ Core Web Vitals
- ✅ Mobile responsiveness
- ✅ Accessibility standards
- ✅ Social media sharing (Open Graph)

## Contact & Support

For technical issues or questions about the website:
- Create an issue in this repository
- Contact the development team

For AINAS-related inquiries:
- Visit the [Contact page](https://www.ainas.org/contact)
- Email: tech@ainas.org

## License

This project is the property of AINAS (African Initiative for Nature-Based Solutions).

---

**Built with ❤️ for a sustainable Africa**
