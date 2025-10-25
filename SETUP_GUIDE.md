# 🎓 Complete Setup Guide - For Backend Developers New to Web Development

This guide will help you understand and set up your website step by step.

## 📚 Understanding the Tech Stack

### What is Next.js?

Next.js is a React framework that makes building websites easier. Think of it like a web framework similar to Express.js, but for the frontend. It handles:

- Routing (no need for React Router)
- Server-side rendering for better SEO
- Image optimization
- Easy deployment

### What is TypeScript?

TypeScript is JavaScript with types - similar to typed languages you might know from backend development. It catches errors before runtime.

### What is Tailwind CSS?

Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you use pre-defined classes like `bg-blue-500`, `text-center`, `p-4`.

### What is Framer Motion?

A library for animations. We use it for smooth transitions and interactive elements.

## 🚀 Step-by-Step Setup

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Go to https://nodejs.org/
2. Download and install the LTS version (20.x or later)
3. Verify installation:

```bash
node --version
npm --version
```

### Step 2: Install Dependencies

In your terminal, navigate to the project folder and run:

```bash
cd /Users/eyal/Projects/tali
npm install
```

This installs all required packages listed in `package.json`. It's similar to `pip install` in Python or `go mod download` in Go.

**What gets installed:**

- React & React DOM (UI library)
- Next.js (framework)
- TypeScript (type checking)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Hook Form (form handling)
- React Icons (icon library)

### Step 3: Run Development Server

```bash
npm run dev
```

This starts a local development server at http://localhost:3000

**What's happening:**

- Next.js compiles your TypeScript files
- Tailwind processes your CSS
- Hot reload is enabled (changes appear instantly)

### Step 4: Understanding the File Structure

```
tali/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (like a base template)
│   │   ├── page.tsx        # Home page (main entry point)
│   │   └── globals.css     # Global CSS styles
│   └── components/
│       ├── Navigation.tsx  # Nav bar component
│       ├── Hero.tsx        # Hero section component
│       └── ...             # Other section components
├── public/                 # Static files (images, etc.)
├── package.json            # Dependencies (like requirements.txt)
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── next.config.js         # Next.js configuration
```

**Key Concepts:**

1. **Components**: Reusable UI pieces (like functions in backend)

   ```tsx
   export default function Hero() {
     return <div>Content</div>;
   }
   ```

2. **Props**: Data passed to components (like function parameters)

   ```tsx
   function Button({ text, onClick }) {
     return <button onClick={onClick}>{text}</button>;
   }
   ```

3. **State**: Data that changes over time
   ```tsx
   const [count, setCount] = useState(0);
   ```

## 🛠️ Common Development Tasks

### Adding a New Section

1. Create a new component file: `src/components/NewSection.tsx`
2. Import it in `src/app/page.tsx`
3. Add it to the page

Example:

```tsx
// src/components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section" className="section-container">
      <h2 className="section-title">New Section</h2>
      <p>Content here</p>
    </section>
  );
}

// src/app/page.tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MyLectures />
      <NewSection /> {/* Add here */}
      {/* ... */}
    </>
  );
}
```

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0d9999',  // Change this hex color
  },
}
```

### Changing Text Content

Text is in Hebrew inside the component files. Search for the text you want to change and update it directly.

Example in `Hero.tsx`:

```tsx
<h1>ד"ר טלי סופרין-רינגוולד</h1> // Change here
```

## 📸 Adding Real Images

### Step 1: Prepare Images

1. Optimize images using https://tinypng.com/
2. Rename them appropriately:
   - Profile: `tali-portrait.jpg`
   - Gallery: `1.jpg`, `2.jpg`, etc.

### Step 2: Add to Project

Place images in:

- `public/images/tali-portrait.jpg`
- `public/images/gallery/1.jpg`, `2.jpg`, etc.

### Step 3: Update Components

In `src/components/AboutMe.tsx`, uncomment the Image component:

```tsx
// Remove the placeholder div and uncomment:
<Image
  src="/images/tali-portrait.jpg"
  alt="ד״ר טלי סופרין-רינגוולד"
  fill
  className="object-cover"
/>
```

Do the same in `Gallery.tsx` for gallery images.

## 📧 Setting Up Contact Form

The form is built but needs a backend to send emails.

### Option 1: Formspree (Recommended for beginners)

1. Sign up at https://formspree.io/ (free tier available)
2. Create a new form
3. Copy your form endpoint URL
4. Update `src/components/Contact.tsx`:

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

### Option 2: Build Your Own API (More control)

As a backend developer, you might prefer this:

1. Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  // Use nodemailer or any email service
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: "talisuf@gmail.com",
    subject: `Contact from ${data.name}`,
    text: data.message,
  });

  return NextResponse.json({ success: true });
}
```

2. Update form to call this endpoint:

```typescript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

## 🚢 Deployment

### Quick Deployment with Vercel (5 minutes)

1. **Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Deploy:**

- Go to https://vercel.com/
- Sign up with GitHub
- Click "New Project"
- Select your repository
- Click "Deploy"

3. **Add Custom Domain:**

- In project settings → Domains
- Add your domain
- Update DNS at your domain registrar

### Environment Variables

If you use API keys (for email, analytics, etc.):

1. Create `.env.local` (not committed to git):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. Add to Vercel:

- Project Settings → Environment Variables
- Add each variable

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### Module not found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors

```bash
# Check for TypeScript errors
npm run lint

# Try building locally
npm run build
```

### Styling not working

```bash
# Make sure Tailwind is watching
# It should auto-compile with npm run dev
```

## 📖 Learning Resources

### Next.js

- Official Tutorial: https://nextjs.org/learn
- Documentation: https://nextjs.org/docs

### React (Next.js uses React)

- Official Tutorial: https://react.dev/learn
- Very similar to Vue.js or Angular if you know those

### TypeScript

- Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- For backend devs: Similar to Java/C# type systems

### Tailwind CSS

- Documentation: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/

## 💡 Tips for Backend Developers

1. **Think of Components as Functions**: They take inputs (props) and return UI
2. **State Management**: Like variables in your backend, but triggers re-renders
3. **Async Operations**: Use async/await just like in backend (fetch, axios)
4. **File-based Routing**: Files in `app/` folder become routes automatically
5. **API Routes**: Next.js can be backend too! Add files to `app/api/`

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ⏹️ Browse the site at http://localhost:3000
4. ⏹️ Add real images to `public/images/`
5. ⏹️ Set up contact form with Formspree
6. ⏹️ Customize content in component files
7. ⏹️ Test on mobile (Chrome DevTools → Device Mode)
8. ⏹️ Deploy to Vercel
9. ⏹️ Add custom domain

## 🆘 Getting Help

If you get stuck:

1. Check the README.md for specific topics
2. Read error messages carefully (TypeScript errors are helpful!)
3. Check Next.js documentation
4. Search on Stack Overflow
5. Use ChatGPT/Claude for specific questions

## 🎉 You're Ready!

You now have:

- ✅ A fully functional modern website
- ✅ Responsive design for all devices
- ✅ Professional animations and interactions
- ✅ SEO-optimized structure
- ✅ Easy deployment pipeline
- ✅ Type-safe codebase

Good luck with your website! 🚀
