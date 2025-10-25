# Deployment Checklist

## Before Deployment

- [ ] Replace all placeholder images with real photos
- [ ] Update About Me photo (`public/images/tali-portrait.jpg`)
- [ ] Add gallery images (`public/images/gallery/`)
- [ ] Set up contact form backend (Formspree or EmailJS)
- [ ] Add Facebook page URL in Footer and Contact components
- [ ] Test contact form
- [ ] Test all sections on mobile and desktop
- [ ] Review all Hebrew text for accuracy
- [ ] Check all links work

## Deployment Steps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### 3. Add Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your domain
3. Follow DNS setup instructions
4. Wait for SSL certificate (automatic)

### 4. DNS Configuration

At your domain registrar, add:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## After Deployment

- [ ] Test site on production URL
- [ ] Test contact form sends emails
- [ ] Test on mobile devices (iOS and Android)
- [ ] Run Lighthouse audit
- [ ] Set up Google Analytics (optional)
- [ ] Share with stakeholders for feedback

## Testing URLs

- Development: http://localhost:3000
- Production: https://your-domain.com

## Support

For deployment issues:

- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
