# Image Setup Guide for Portfolio

## Directory Structure Created

```
public/images/
├── avatar.jpg                          # Your profile picture
├── companies/                          # Company logos for experience section
│   ├── digital-alpha.jpg              # Digital Alpha logo
│   ├── alemeno.jpg                    # Alemeno logo
│   └── atg-world.jpg                  # ATG.World logo
└── projects/                          # Project screenshots
    ├── choolha-chowka/
    │   ├── cover-01.jpg               # Main project image
    │   ├── cover-02.jpg               # Dashboard screenshot
    │   ├── cover-03.jpg               # Features screenshot
    │   └── cover-04.jpg               # Mobile view (optional)
    ├── chatsphere/
    │   ├── cover-01.jpg               # Main chat interface
    │   ├── cover-02.jpg               # Real-time features
    │   └── cover-03.jpg               # Architecture diagram (optional)
    └── hospital-management/
        ├── cover-01.jpg               # Main HMS interface
        ├── cover-02.jpg               # Patient management
        └── cover-03.jpg               # Appointment system
```

## Images You Need to Add

### 1. Profile Picture
- **Location**: `public/images/avatar.jpg`
- **Recommended size**: 400x400px (square)
- **Format**: JPG or PNG
- **Description**: Your professional headshot

### 2. Company Logos (for Experience Section)

#### Digital Alpha
- **Location**: `public/images/companies/digital-alpha.jpg`
- **Recommended size**: 800x400px or company's official logo dimensions
- **Format**: JPG or PNG (PNG preferred for logos)
- **Where to get**: Company website or LinkedIn

#### Alemeno
- **Location**: `public/images/companies/alemeno.jpg`
- **Recommended size**: 800x400px
- **Format**: JPG or PNG
- **Where to get**: alemeno.com or their LinkedIn

#### ATG.World
- **Location**: `public/images/companies/atg-world.jpg`
- **Recommended size**: 800x400px
- **Format**: JPG or PNG
- **Where to get**: atg.world or their LinkedIn

### 3. Project Screenshots

#### Choolha Chowka
- **Location**: `public/images/projects/choolha-chowka/`
- **Images needed**:
  - `cover-01.jpg` - Homepage or main dashboard (16:9 ratio recommended)
  - `cover-02.jpg` - Meal management interface
  - `cover-03.jpg` - Payment or admin dashboard
  - `cover-04.jpg` - Mobile responsive view (optional)
- **Recommended size**: 1920x1080px or 1600x900px
- **Format**: JPG or PNG
- **Where to get**: Take screenshots from https://www.choolhachowka.com/

#### ChatSphere
- **Location**: `public/images/projects/chatsphere/`
- **Images needed**:
  - `cover-01.jpg` - Main chat interface
  - `cover-02.jpg` - Real-time messaging features
  - `cover-03.jpg` - User list or settings (optional)
- **Recommended size**: 1920x1080px or 1600x900px
- **Format**: JPG or PNG
- **Where to get**: Run the project locally and take screenshots

#### Hospital Management System
- **Location**: `public/images/projects/hospital-management/`
- **Images needed**:
  - `cover-01.jpg` - Main dashboard
  - `cover-02.jpg` - Patient management interface
  - `cover-03.jpg` - Appointment booking system
- **Recommended size**: 1920x1080px or 1600x900px
- **Format**: JPG or PNG
- **Where to get**: Screenshots from your GitHub repo demo or local setup

## How to Add Images

### Option 1: Manual Copy
1. Save your images with the exact names mentioned above
2. Copy them to the respective folders in `public/images/`

### Option 2: Using Terminal
```bash
# Example: Copy your avatar
cp ~/Downloads/my-photo.jpg public/images/avatar.jpg

# Example: Copy company logo
cp ~/Downloads/digital-alpha-logo.png public/images/companies/digital-alpha.jpg

# Example: Copy project screenshot
cp ~/Downloads/choolha-screenshot.png public/images/projects/choolha-chowka/cover-01.jpg
```

## Image Optimization Tips

1. **Compress images** before adding them to reduce load time
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: Keep images under 500KB each

2. **Use appropriate dimensions**:
   - Profile: 400x400px
   - Company logos: 800x400px
   - Project screenshots: 1600x900px (16:9 ratio)

3. **Format recommendations**:
   - Photos/Screenshots: JPG (better compression)
   - Logos with transparency: PNG
   - Consider WebP for better compression (rename to .webp)

## Placeholder Images

Currently, the template uses placeholder images from `public/images/projects/project-01/`. 
Once you add your actual images, the portfolio will automatically display them.

## Next Steps

1. Gather all your images
2. Rename them according to this guide
3. Place them in the correct directories
4. Refresh your portfolio to see the changes
5. If images don't appear, check browser console for 404 errors

## Testing

After adding images, verify they load correctly:
```bash
# Start the development server
npm run dev

# Visit http://localhost:3000 and check:
# - Home page (featured project image)
# - About page (experience section company logos)
# - Work page (all project thumbnails)
# - Individual project pages (project galleries)
```
