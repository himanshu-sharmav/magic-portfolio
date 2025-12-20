# GitHub Pages Deployment Setup

## ✅ Configuration Complete!

I've configured your portfolio for GitHub Pages deployment.

## What I Changed:

1. **next.config.mjs** - Added static export configuration
2. **.github/workflows/deploy.yml** - Created GitHub Actions workflow
3. **public/.nojekyll** - Prevents Jekyll processing

## ⚠️ Important Limitations

With GitHub Pages static export, these features **won't work**:
- ❌ Individual project pages (`/projects/project-name`)
- ❌ API routes
- ❌ Server-side rendering
- ❌ Image optimization
- ❌ Dynamic routes

**What will work:**
- ✅ Home page
- ✅ About page
- ✅ Work page
- ✅ Projects listing page
- ✅ All static content

## 🚀 Deploy Steps

### 1. Commit and Push

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin master
```

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/himanshu-sharmavv/portfolio
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select: **GitHub Actions**
5. Save

### 3. Wait for Deployment

- Go to **Actions** tab
- Watch the "Deploy to GitHub Pages" workflow
- Takes 2-3 minutes
- Green checkmark = Success! ✅

### 4. Visit Your Site

Your portfolio will be live at:
```
https://himanshu-sharmavv.github.io/portfolio/
```

## 🔧 Troubleshooting

### Build Fails

Check the Actions tab for errors. Common issues:
- Missing dependencies
- Build errors
- Image issues

### 404 Errors

If you get 404s:
1. Make sure GitHub Pages is enabled
2. Check the Actions workflow completed
3. Wait a few minutes for DNS propagation

### Styles Not Loading

If CSS doesn't load:
1. Hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`
2. Clear browser cache
3. Check browser console for errors

## 📝 Custom Domain (Optional)

### If you have a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "himanshusharma.dev" > public/CNAME
   ```

2. **Update DNS** (at your domain registrar):
   ```
   Type: CNAME
   Name: www
   Value: himanshu-sharmavv.github.io
   
   Type: A
   Name: @
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. **Update baseURL** in `src/resources/once-ui.config.ts`:
   ```typescript
   const baseURL: string = "https://himanshusharma.dev";
   ```

4. **In GitHub Settings → Pages**:
   - Add custom domain: `himanshusharma.dev`
   - Enable "Enforce HTTPS"

## 🔄 Automatic Deployments

Every time you push to `master` branch:
1. GitHub Actions automatically builds your site
2. Deploys to GitHub Pages
3. Your site updates in 2-3 minutes

## 📊 Check Deployment Status

```bash
# View recent deployments
gh run list

# View specific run
gh run view

# Watch live
gh run watch
```

## 🎯 Next Steps

1. **Push your code** to trigger first deployment
2. **Enable GitHub Pages** in repository settings
3. **Wait for build** to complete
4. **Visit your site** and test
5. **Share your portfolio** 🎉

## 💡 Recommendation

If you need the full features (especially individual project pages), consider deploying to **Vercel** instead:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

Vercel is free and supports all Next.js features!

## 🆘 Need Help?

If deployment fails:
1. Check Actions tab for error logs
2. Ensure all dependencies are in package.json
3. Test build locally: `npm run build`
4. Check that `out/` folder is created

---

Ready to deploy? Run:

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin master
```

Then enable GitHub Pages in repository settings!
