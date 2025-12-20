# Deployment Guide - Host Your Portfolio

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Made by Next.js creators
- Free tier (perfect for portfolios)
- Automatic deployments on git push
- Custom domain support
- Built-in analytics
- Zero configuration needed

### Steps:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com/signup
   - Click "Continue with GitHub"
   - Authorize Vercel

3. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select your repository: `himanshu-sharmavv/portfolio`
   - Click "Import"

4. **Configure (Auto-detected)**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

6. **Your Live URL**
   - You'll get: `https://portfolio-username.vercel.app`
   - Can add custom domain later

### Environment Variables (if needed)
If you have any secrets in `.env`:
- Go to Project Settings → Environment Variables
- Add them there

### Automatic Deployments
Every time you push to GitHub, Vercel automatically deploys! 🚀

---

## Option 2: Netlify

Similar to Vercel, also great for Next.js:

1. **Go to**: https://app.netlify.com/signup
2. **Connect GitHub**
3. **Import repository**
4. **Deploy settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Deploy**

---

## Option 3: GitHub Pages (Static Export)

⚠️ **Limitations**: 
- No server-side features
- No API routes
- No dynamic routes (your projects won't work properly)
- Not recommended for this portfolio

If you still want to try:

### 1. Update next.config.mjs

Add static export configuration:

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // Your repo name
  assetPrefix: '/portfolio/',
};
\`\`\`

### 2. Add GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
\`\`\`

### 3. Enable GitHub Pages

1. Go to repository Settings
2. Pages → Source → GitHub Actions
3. Push your code
4. Visit: `https://himanshu-sharmavv.github.io/portfolio/`

**Note**: Many features won't work with static export!

---

## Option 4: Railway

Great for full-stack apps:

1. **Go to**: https://railway.app
2. **Sign up with GitHub**
3. **New Project** → Deploy from GitHub
4. **Select repository**
5. **Add variables** (if needed)
6. **Deploy**

Free tier: $5 credit/month

---

## Option 5: Render

Another good option:

1. **Go to**: https://render.com
2. **Sign up**
3. **New** → Web Service
4. **Connect GitHub**
5. **Configure**:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. **Deploy**

Free tier available

---

## Recommended: Vercel

For your Next.js portfolio, **Vercel is the best choice**:

✅ Free forever for personal projects
✅ Automatic HTTPS
✅ Global CDN
✅ Automatic deployments
✅ Preview deployments for PRs
✅ Built-in analytics
✅ Custom domains
✅ Zero configuration

### Quick Start with Vercel:

\`\`\`bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from command line
vercel

# Follow prompts
# Done!
\`\`\`

---

## Custom Domain Setup (After Deployment)

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain: `himanshusharma.dev`
3. Follow DNS instructions
4. Wait for DNS propagation (5-30 minutes)

### Update baseURL in your code:
\`\`\`typescript
// src/resources/once-ui.config.ts
const baseURL: string = "https://himanshusharma.dev";
\`\`\`

---

## Post-Deployment Checklist

After deploying:

- [ ] Test all pages work
- [ ] Check project links
- [ ] Verify images load
- [ ] Test on mobile
- [ ] Check Cal.com integration
- [ ] Test contact links
- [ ] Verify SEO meta tags
- [ ] Check performance (Lighthouse)
- [ ] Add to LinkedIn profile
- [ ] Share on social media

---

## Monitoring & Analytics

### Vercel Analytics (Free)
- Go to Project → Analytics
- Enable Web Analytics
- Track visitors, page views, performance

### Google Analytics (Optional)
Add to `src/app/layout.tsx`:

\`\`\`typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
\`\`\`

---

## Troubleshooting

### Build Fails
- Check Node version (use 18 or 20)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Try locally: `npm run build`

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public/` folder
- Verify image extensions match

### 404 Errors
- Check routes are configured
- Verify dynamic routes work
- Check RouteGuard settings

### Slow Performance
- Optimize images
- Enable caching
- Use CDN (Vercel does this automatically)

---

## Cost Comparison

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Vercel** | Unlimited | Next.js (Recommended) |
| Netlify | 100GB bandwidth | Static sites |
| Railway | $5 credit/month | Full-stack apps |
| Render | 750 hours/month | Backend services |
| GitHub Pages | Unlimited | Static only |

---

## Next Steps

1. **Deploy to Vercel** (takes 2 minutes)
2. **Test everything works**
3. **Add custom domain** (optional)
4. **Share your portfolio**
5. **Keep updating with new projects**

Your portfolio is production-ready! 🚀
