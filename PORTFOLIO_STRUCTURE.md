# Portfolio Structure

## Navigation Structure

Your portfolio now has three main sections:

### 1. About (`/about`)
**Content:**
- Introduction
- Education
- Technical Skills

**Purpose:** Personal background and qualifications

### 2. Work (`/work`)
**Content:**
- Work Experience (3 internships)
  - Digital Alpha (Jan 2025 - Present)
  - Alemeno (Nov 2024 - Dec 2024)
  - ATG.World (Jun 2024 - Oct 2024)

**Features:**
- Company logos displayed next to company names
- Clickable company names linking to their websites
- Support for work images (add more images to showcase your work at each company)

**Purpose:** Professional work experience and internships

### 3. Projects (`/projects`)
**Content:**
- All project cards (4 projects)
  - Choolha Chowka
  - EpiphAI
  - ChatSphere
  - Hospital Management System

**Purpose:** Showcase your development projects

## Adding Work Images

To add images showcasing your work at companies, update the `images` array in `src/resources/content.tsx`:

```typescript
{
  company: "Digital Alpha",
  // ... other fields
  images: [
    {
      src: "/images/companies/digitalalpha_logo.jpeg", // Logo (always first)
      alt: "Digital Alpha",
      width: 8,
      height: 4,
    },
    // Add more images below to showcase your work
    {
      src: "/images/companies/digital-alpha-work-1.jpg",
      alt: "EpiphAI Dashboard",
      width: 16,
      height: 9,
    },
    {
      src: "/images/companies/digital-alpha-work-2.jpg",
      alt: "Chatbot Interface",
      width: 16,
      height: 9,
    },
  ],
}
```

**Image Guidelines:**
- First image: Company logo (32x32px, used as icon)
- Additional images: Work screenshots (displayed below achievements)
- Recommended size: 1600x900px (16:9 ratio)
- Format: JPG or PNG

## File Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── work/
│   │   ├── page.tsx          # Work experience page
│   │   └── projects/         # Project MDX files (source)
│   │       ├── choolha-chowka-saas-mess-management.mdx
│   │       ├── epiphai-ai-automation-platform.mdx
│   │       ├── chatsphere-realtime-messaging.mdx
│   │       └── hospital-management-system.mdx
│   └── projects/
│       ├── page.tsx          # Projects listing page
│       └── [slug]/
│           └── page.tsx      # Individual project pages
└── resources/
    └── content.tsx           # All content configuration

public/
└── images/
    ├── avatar.jpg            # Your profile photo
    ├── companies/            # Company logos and work images
    │   ├── digitalalpha_logo.jpeg
    │   ├── alemeno.jpeg
    │   └── across_the_globe_atg__logo.jpeg
    └── projects/             # Project screenshots
        ├── choolha-chowka/
        ├── epiphai/
        ├── chatsphere/
        └── hospital-management/
```

## Routes

- `/` - Home page (featured project)
- `/about` - About page
- `/work` - Work experience
- `/projects` - Projects listing
- `/projects/[slug]` - Individual project pages

## Next Steps

1. ✅ Structure is complete
2. ⏳ Add work images to showcase your contributions at each company
3. ⏳ Add EpiphAI project screenshots (4 images needed)
4. ✅ Cal.com integration enabled
5. ✅ Company logos and links working

## Adding Work Images

Create these directories and add images:
```bash
# Digital Alpha work images
public/images/companies/digital-alpha-work-1.jpg
public/images/companies/digital-alpha-work-2.jpg
public/images/companies/digital-alpha-work-3.jpg

# Alemeno work images
public/images/companies/alemeno-work-1.jpg
public/images/companies/alemeno-work-2.jpg

# ATG.World work images
public/images/companies/atg-work-1.jpg
public/images/companies/atg-work-2.jpg
```

Then update the images array in content.tsx for each company!
