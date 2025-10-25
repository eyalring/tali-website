# Image Management

## Directory Structure

```
public/
└── images/
    ├── gallery/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   ├── 4.jpg
    │   ├── 5.jpg
    │   └── 6.jpg
    └── tali-portrait.jpg
```

## Image Requirements

### Profile Image (tali-portrait.jpg)

- Recommended size: 1000x1000px minimum
- Format: JPG or PNG
- Should be professional and high-quality
- Will be displayed in the About Me section

### Gallery Images (1.jpg - 6.jpg)

- Recommended size: 1200x800px or similar aspect ratio
- Format: JPG or PNG
- High resolution for lightbox viewing
- Images should show:
  - Lectures in progress
  - Audience engagement
  - Different settings (schools, community centers, etc.)
  - Dr. Tali presenting
  - Group photos

## Optimizing Images

Before adding images, optimize them:

### Online Tools

- [TinyPNG](https://tinypng.com/) - Compress PNG and JPG
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app

### Recommended Settings

- Quality: 80-85%
- Format: JPG for photos, PNG for graphics
- Remove EXIF data for privacy

## Next.js Image Optimization

Next.js automatically optimizes images, but you should still:

1. Use appropriate source sizes
2. Compress before uploading
3. Use modern formats when possible

## Adding Images to Components

### About Me Image

In `src/components/AboutMe.tsx`, uncomment:

```tsx
<Image
  src="/images/tali-portrait.jpg"
  alt="ד״ר טלי סופרין-רינגוולד"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

### Gallery Images

In `src/components/Gallery.tsx`, uncomment:

```tsx
<Image
  src={`/images/gallery/${image.id}.jpg`}
  alt={image.title}
  fill
  className="object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## Placeholder Images

While you don't have real images yet, the components use emoji-based placeholders that look decent and maintain the layout.

## Need Help?

If you need assistance with:

- Image editing/cropping
- Removing backgrounds
- Color correction

Consider using:

- [Canva](https://canva.com) - Free design tool
- [Remove.bg](https://remove.bg) - Remove backgrounds
- [Photopea](https://photopea.com) - Free Photoshop alternative
