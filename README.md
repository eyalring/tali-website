# Dr. Tali Sufrin-Ringwald - Website

A modern, responsive single-page website for Dr. Tali Sufrin-Ringwald, featuring enrichment lectures in genetics, virology, and life sciences.

## 🎯 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Language**: Hebrew (RTL support)

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation with active section highlighting
- ✅ Animated hero section
- ✅ Expandable lecture cards
- ✅ Auto-rotating testimonials slider
- ✅ Gallery with lightbox functionality
- ✅ Contact form with validation
- ✅ RTL (Right-to-Left) support for Hebrew
- ✅ Modern, clean, and professional design
- ✅ Accessibility-focused
- ✅ SEO optimized

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
tali/
├── public/
│   └── images/           # Place your images here
│       ├── gallery/      # Gallery images
│       └── tali-portrait.jpg  # About Me image
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/
│       ├── Navigation.tsx    # Sticky navigation bar
│       ├── Hero.tsx          # Hero section
│       ├── MyLectures.tsx    # Lectures section
│       ├── WhatIOffer.tsx    # Services section
│       ├── AboutMe.tsx       # About section
│       ├── Testimonials.tsx  # Testimonials slider
│       ├── Gallery.tsx       # Gallery with lightbox
│       ├── Contact.tsx       # Contact form
│       └── Footer.tsx        # Footer
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🖼️ Adding Images

### About Me Image

1. Add Dr. Tali's portrait image to `public/images/tali-portrait.jpg`
2. Update `src/components/AboutMe.tsx` - uncomment the Image component

### Gallery Images

1. Add gallery images to `public/images/gallery/1.jpg`, `2.jpg`, etc.
2. Update `src/components/Gallery.tsx` - uncomment the Image components
3. Update the `galleryImages` array with proper descriptions

## 📧 Setting Up Contact Form

The contact form is ready but needs a backend service to actually send emails. Here are some options:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update `src/components/Contact.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Follow their React integration guide

### Option 3: API Route (Next.js)

1. Create `src/app/api/contact/route.ts`
2. Use a service like SendGrid, Resend, or Nodemailer
3. Update the form to call this API endpoint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the company behind Next.js and offers the best integration:

1. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**

   - Go to [vercel.com](https://vercel.com/)
   - Sign up / Log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Custom Domain:**

   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions
   - Vercel automatically provisions SSL certificates

### Deploy to Netlify

1. **Push code to GitHub** (same as above)

2. **Deploy on Netlify:**

   - Go to [netlify.com](https://netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Custom Domain:**
   - Go to "Domain settings"
   - Add your custom domain
   - Follow DNS configuration instructions

### DNS Configuration for Custom Domain

If you own a domain (e.g., `talisufrin.com`), you need to point it to your hosting:

#### For Vercel:

Add these DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:

```
Type: CNAME
Name: @
Value: YOUR_NETLIFY_SUBDOMAIN.netlify.app
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

### Content

All content is in the component files. Search for Hebrew text and replace with your actual content.

### Fonts

To change fonts, edit `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

## 📱 Testing

### Responsive Design

Test on:

- Mobile: Chrome DevTools responsive mode
- Tablet: iPad simulator or real device
- Desktop: Various browser widths

### Browser Compatibility

Test on:

- Chrome
- Firefox
- Safari
- Edge

### Performance

Run Lighthouse audit in Chrome DevTools:

```
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit for Performance, Accessibility, Best Practices, SEO
```

## 🔧 Build for Production

```bash
npm run build
npm run start
```

This creates an optimized production build.

## 📊 Analytics (Optional)

### Google Analytics

1. Get your GA4 measurement ID
2. Add to `src/app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

## 🐛 Troubleshooting

### Images not showing

- Make sure images are in the `public` folder
- Check file paths and extensions
- Verify image names match the code

### Build errors

- Run `npm run build` locally to catch errors
- Check TypeScript errors: `npm run lint`
- Ensure all dependencies are installed

### Styling issues

- Clear your browser cache
- Check if Tailwind classes are correct
- Verify `tailwind.config.ts` paths

## 📝 TODO After Deployment

- [ ] Add real images to replace placeholders
- [ ] Set up contact form backend (Formspree/EmailJS)
- [ ] Test contact form thoroughly
- [ ] Add Facebook page link in Footer and Contact
- [ ] Set up Google Analytics (optional)
- [ ] Test on real mobile devices
- [ ] Run final Lighthouse audit
- [ ] Share the site and gather feedback

## 📞 Support

For questions or issues with the website code, please refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

This website is created for Dr. Tali Sufrin-Ringwald. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
