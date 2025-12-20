# Replace Avatar Image - Quick Fix

## The Issue

You're seeing a placeholder image (person in orange jacket) instead of your photo. This is the template's default avatar.

## The Solution

Replace the file at `public/images/avatar.jpg` with your own professional headshot.

## Quick Steps

### Option 1: Using Terminal
```bash
# Copy your photo to replace the placeholder
cp /path/to/your-photo.jpg public/images/avatar.jpg

# Example:
cp ~/Downloads/my-photo.jpg public/images/avatar.jpg
```

### Option 2: Using Finder (Mac)
1. Open Finder
2. Navigate to your project folder
3. Go to `public/images/`
4. Delete or rename the existing `avatar.jpg`
5. Copy your photo into this folder
6. Rename it to `avatar.jpg`

### Option 3: Using File Explorer (Windows)
1. Open File Explorer
2. Navigate to your project folder
3. Go to `public\images\`
4. Delete or rename the existing `avatar.jpg`
5. Copy your photo into this folder
6. Rename it to `avatar.jpg`

## Photo Requirements

- **Format**: JPG or PNG (rename to .jpg)
- **Size**: 400x400px (square) recommended
- **Style**: Professional headshot
- **File size**: Under 500KB (compress if needed)
- **Name**: Must be exactly `avatar.jpg`

## After Replacing

1. Refresh your browser (Cmd+R or Ctrl+R)
2. If still showing old image, hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
3. Your photo will now appear everywhere:
   - Browser tab icon
   - About page (large avatar)
   - All project pages
   - Social sharing images

## Compress Your Photo (Optional)

If your photo is too large:
- Use https://tinypng.com
- Use https://squoosh.app
- Or use Preview/Photos app to export at lower quality

## Current Location

The placeholder image is at:
```
public/images/avatar.jpg
```

Just replace this file with your photo!
