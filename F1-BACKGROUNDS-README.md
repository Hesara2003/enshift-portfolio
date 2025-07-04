# F1 Background Images Setup

## Overview
This portfolio now includes F1-themed parallax backgrounds for each section. The backgrounds use different parallax speeds to create an immersive racing experience.

## F1 Image Files Required

Replace the placeholder files with actual F1 PNG images:

### 1. Hero Section - `/public/images/f1-hero-bg.png`
- **Theme**: F1 race start, grid formation, or dramatic racing action
- **Recommended**: Wide shot of F1 cars on track, starting line, or championship celebration
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency for better layering

### 2. About Section - `/public/images/f1-about-bg.png`
- **Theme**: F1 garage, team, or engineering focus
- **Recommended**: F1 car close-up, engineers working, or technical details
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency

### 3. Services Section - `/public/images/f1-services-bg.png`
- **Theme**: F1 pit stop, mechanics, or service area
- **Recommended**: Pit crew in action, tire change, or garage equipment
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency

### 4. Portfolio Section - `/public/images/f1-portfolio-bg.png`
- **Theme**: F1 victory, racing action, or championship moments
- **Recommended**: Multiple F1 cars racing, victory celebration, or trophy
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency

### 5. Testimonials Section - `/public/images/f1-testimonials-bg.png`
- **Theme**: F1 podium, celebration, or team success
- **Recommended**: Podium ceremony, team celebration, or victory moments
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency

### 6. Contact Section - `/public/images/f1-contact-bg.png`
- **Theme**: F1 finish line, checkered flag, or communication
- **Recommended**: Finish line crossing, checkered flag, or communication equipment
- **Size**: 1920x1080 or higher resolution
- **Format**: PNG with transparency

## Parallax Effects

Each section has unique parallax movement:
- **Hero**: Slow upward movement (50% scroll speed)
- **About**: Slow downward movement (-20% scroll speed)
- **Services**: Medium downward movement (-30% scroll speed)
- **Portfolio**: Fast downward movement (-40% scroll speed)
- **Testimonials**: Faster downward movement (-50% scroll speed)
- **Contact**: Fastest downward movement (-60% scroll speed)

## Image Optimization Tips

1. **Use high-quality F1 images** with good contrast
2. **Optimize file sizes** - compress images while maintaining quality
3. **Use PNG format** for transparency support
4. **Consider image positioning** - images should work well with text overlay
5. **Test on different devices** - ensure images look good on mobile and desktop

## Where to Find F1 Images

- **Official F1 Website**: formula1.com (check licensing)
- **Free Stock Images**: Unsplash, Pexels (search "Formula 1" or "F1")
- **Getty Images**: High-quality F1 images (paid)
- **Shutterstock**: Professional F1 photography (paid)

## Installation

1. Replace the placeholder files with actual F1 PNG images
2. Ensure all images are properly optimized
3. Test the parallax effects by scrolling through the page
4. Adjust opacity values in the code if needed for better text readability

## Customization

You can adjust the parallax effects by modifying the transform values in `app/page.tsx`:

```tsx
// Example: Adjust parallax speed
const aboutParallaxY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-30%"]) // Faster
const aboutParallaxY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-10%"]) // Slower
```

You can also adjust the opacity of backgrounds by changing the opacity classes in each section:

```tsx
className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 f1-parallax-bg"
//                                                                    ^^^ Adjust this value
```

## Performance Notes

- All parallax effects use hardware acceleration
- Images are loaded lazily for better performance
- CSS transforms are optimized for smooth scrolling
- Background images use `will-change: transform` for better performance
