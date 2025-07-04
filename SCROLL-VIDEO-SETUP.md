# Scroll-Controlled Video Setup

## Overview
A video section has been added to your portfolio that plays progressively based on scroll position. As users scroll through the video section, the video plays from start to finish, creating an immersive cinematic experience. The video is positioned right after the hero section with F1 racing-themed overlays.

## How It Works

### Scroll-Based Video Playback
- **Video Progress**: The video plays based on how far the user has scrolled through the section
- **Sticky Container**: The video stays in view while the user scrolls through the tall section
- **Progress Bar**: Shows video progress and duration
- **Auto-Complete**: When the user finishes scrolling through the section, the video is complete

### Section Height
The video section is set to `200vh` (twice the viewport height) to give users enough scrolling space to experience the full video. The video itself is sticky and stays in view during scrolling.

## How to Add Your Video

### Step 1: Prepare Your Video
1. Create or obtain a video file (recommended formats: MP4, WebM)
2. Keep the video file size reasonable (under 50MB for web performance)
3. Ensure the video is optimized for web (compressed but good quality)
4. Video should be at least 1920x1080 resolution for best results
5. **Important**: Video duration should be 10-30 seconds for optimal scroll experience

### Step 2: Add Video to Your Project
1. Place your video file in the `public` folder
2. Name it `demo-video.mp4` or update the filename in the code
3. Optionally, add a poster image (thumbnail) as `demo-poster.jpg`

### Step 3: Update the Video Path (if needed)
If you use a different filename, update the path in `app/page.tsx`:
```tsx
<ScrollVideo
  src="/your-video-name.mp4"
  poster="/your-poster-image.jpg"
  className="h-full"
/>
```

## Features

### Scroll-Controlled Playback
- **Progressive Play**: Video plays from 0% to 100% based on scroll position
- **No Looping**: Video plays once through as user scrolls
- **Smooth Progress**: Real-time video seeking based on scroll position
- **Auto Pause**: Video pauses when user stops scrolling or leaves the section

### Visual Indicators
- **Progress Bar**: Shows current video time and total duration
- **Status Indicator**: Shows PLAYING, PAUSED, or COMPLETE status
- **Racing Theme**: F1-style overlays and effects

### Sticky Video Experience
- **Sticky Container**: Video stays in view while scrolling through the section
- **Tall Section**: 200vh height provides ample scrolling space
- **Smooth Transition**: Seamless experience as users scroll through

## Customization Options

### Change Section Height
Update the section height in `app/page.tsx`:
```tsx
<section className="relative h-[200vh] bg-black overflow-hidden">
```
Change `h-[200vh]` to `h-[150vh]` for shorter experience or `h-[300vh]` for longer.

### Modify Video Progress Sensitivity
In `components/scroll-video.tsx`, adjust the scroll calculation:
```tsx
const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
```

### Update Overlay Content
Change the text overlay in `app/page.tsx`:
```tsx
<h2 className="text-4xl md:text-6xl font-bold mb-4">
  YOUR CUSTOM TITLE
</h2>
<p className="text-xl md:text-2xl text-gray-300">
  Your custom description
</p>
```

## Video Requirements
- **Format**: MP4 (H.264) recommended
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9 works best
- **Duration**: 10-30 seconds (optimal for scroll experience)
- **Audio**: Not required (video is muted by default)
- **Compression**: Well-compressed for web performance

## Performance Tips
- Use shorter videos (10-30 seconds) for better scroll experience
- Compress videos properly for web
- Consider WebM format for better compression
- Add a poster image for faster initial loading
- Test on different devices and connection speeds

## User Experience
1. **Scroll Into View**: Video section comes into view after hero section
2. **Progressive Playback**: Video plays from 0% to 100% as user scrolls down
3. **Visual Feedback**: Progress bar and status indicators show current state
4. **Completion**: When user finishes scrolling through section, video is complete
5. **Smooth Transition**: Continues to next section seamlessly

## Troubleshooting
- **Video doesn't load**: Check file path and format
- **Choppy playback**: Reduce video file size or use better compression
- **Progress issues**: Ensure video metadata loads properly
- **Performance problems**: Use shorter videos or reduce resolution
- **Scroll sensitivity**: Adjust section height or scroll calculation
