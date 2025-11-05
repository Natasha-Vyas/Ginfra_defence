# Ginfra Dynamic Solutions Pvt. Ltd. Website

A modern, professional Next.js website for Ginfra Dynamic Solutions Pvt. Ltd., showcasing precision manufacturing capabilities for Defence, Aerospace, and Advanced Robotics applications.

## Features

- **Modern Design**: Professional, responsive design with Tailwind CSS
- **Complete Navigation**: Home, About, Services, and Contact pages
- **Product Showcase**: Detailed presentation of cartridge cases, fuzes, and manufacturing capabilities
- **Contact Forms**: Interactive contact form with inquiry types
- **Mobile Responsive**: Optimized for all device sizes
- **TypeScript**: Full TypeScript support for better development experience

## Project Structure

```
ginfra-travancore/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Header.tsx            # Navigation header
│       ├── Footer.tsx            # Footer component
│       ├── HeroSection.tsx       # Hero section
│       ├── CapabilitiesOverview.tsx
│       ├── ProductionRoadmap.tsx
│       └── ValueProposition.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn package manager

## Installation

1. **Clone or download the project**

2. **Install dependencies**:

   ```bash
   cd ginfra-travancore
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages Overview

### Home Page (`/`)

- Hero section with company overview
- Core manufacturing capabilities
- Staged production roadmap
- Value proposition and benefits

### About Page (`/about`)

- Company mission and vision
- Detailed process flow (9 stages)
- Equipment and technology overview
- Quality assurance and compliance

### Services Page (`/services`)

- Product categories:
  - Cartridge Cases (23MM, 30MM, 40MM, 105MM, 155MM)
  - Combustible Cartridge Cases (120MM & 125MM)
  - Modular Charge Systems (BMCS)
  - Mechanical Fuzes
- Manufacturing capabilities
- Testing and validation processes
- Certifications and standards

### Contact Page (`/contact`)

- Interactive contact form
- Multiple inquiry types
- Contact information
- Business engagement areas

## Key Features

### Manufacturing Capabilities

- Forging & pressing (hot/cold)
- Multi-axis CNC machining
- Controlled-environment assembly
- Electronics integration
- Comprehensive testing
- Traceability & QA systems

### Product Range

- Electronic Point-Detonating Fuze (105mm, 130mm, 155mm)
- Time & Proximity Fuze for artillery
- Proximity Fuze for mortars (81mm & 120mm)
- Pinaka rocket fuzes
- Reserve batteries
- Electrical detonators & relays

### Quality Standards

- ISO 9001 / AS9100 compliance
- Defence certifications
- Complete traceability
- Environmental testing
- Statistical process control

## Customization

### Colors

The website uses a professional color scheme defined in `tailwind.config.js`:

- Primary: Blue tones (#3b82f6)
- Secondary: Gray tones (#64748b)

### Content

All content is based on the provided company documentation and can be easily updated in the respective component files.

### Styling

The website uses Tailwind CSS for styling. Custom components are defined in `globals.css`.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Other Platforms

The built files in `.next` folder can be deployed to any Node.js hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For technical support or customization requests, please contact the development team.

---

**Ginfra Dynamic Solutions Pvt. Ltd.**  
Precision Manufacturing for Defence • Aerospace • Advanced Robotics
