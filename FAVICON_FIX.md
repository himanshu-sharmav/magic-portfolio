# Fix Favicon (Browser Tab Icon)

## The Issue
The browser tab is showing the old placeholder image instead of your photo.

## The Solution
Replace `src/app/favicon.ico` with your own favicon.

## Quick Steps

### Option 1: Convert Your Avatar to Favicon (Recommended)

1. **Go to**: https://favicon.io/favicon-converter/
2. **Upload** your `public/images/avatar.jpeg`
3. **Download** the generated favicon package
4. **Extract** the zip file
5. **Copy** the `favicon.ico` file
6. **Replace** `src/app/favicon.ico` with the new file

### Option 2: Use Online Tool

1. **Go to**: https://realfavicongenerator.net/
2. **Upload** your avatar image
3. **Generate** favicons
4. **Download** the package
5. **Replace** `src/app/favicon.ico`

### Option 3: Using Command Line (Mac/Linux)

If you have ImageMagick installed:
```bash
# Convert your avatar to favicon
convert public/images/avatar.jpeg -resize 32x32 src/app/favicon.ico
```

### Option 4: Manual Copy (Temporary)

```bash
# Copy your avatar as favicon (will work but not optimized)
cp public/images/avatar.jpeg src/app/favicon.ico
```

## After Replacing

1. **Restart your dev server**
2. **Hard refresh your browser**: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. **Clear browser cache** if still showing old icon
4. **Close and reopen the tab**

## File Location

```
src/app/favicon.ico  ← Replace this file
```

## Recommended Favicon Specs

- **Size**: 32x32 pixels (or 16x16, 48x48)
- **Format**: .ico (supports multiple sizes in one file)
- **Background**: Transparent or solid color
- **Style**: Simple, recognizable at small size

## Additional Icons (Optional)

For better cross-platform support, you can also add:

```
public/
├── apple-touch-icon.png (180x180)
├── favicon-16x16.png
├── favicon-32x32.png
└── android-chrome-192x192.png
```

Then update `src/app/layout.tsx` to reference them.

## Testing

After replacing, test on:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Why It's Important

The favicon appears in:
- Browser tabs
- Bookmarks
- History
- Mobile home screen shortcuts
- Search engine results (sometimes)

A professional favicon makes your portfolio more memorable and polished!
