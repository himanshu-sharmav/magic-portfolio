# Quick Cal.com Setup - 5 Minutes

## 🚀 Fast Setup

### 1. Create Account (2 minutes)
```
1. Go to: https://cal.com/signup
2. Sign up with Google/GitHub (fastest)
3. Choose username (e.g., himanshu-sharma)
```

### 2. Quick Configuration (2 minutes)
```
1. Skip the onboarding wizard (you can customize later)
2. Go to Event Types
3. Click on the default "30 Min Meeting"
4. Set your availability (or use default)
5. Click "Save"
```

### 3. Get Your Link (30 seconds)
```
Your link will be: https://cal.com/your-username/30min

Example: https://cal.com/himanshu-sharma/30min
```

### 4. Enable in Portfolio (30 seconds)

Open `src/resources/content.tsx` and update:

```typescript
calendar: {
  display: true,  // ← Change this to true
  link: "https://cal.com/himanshu-sharma/30min",  // ← Paste your link here
},
```

### 5. Test It! 
```bash
npm run dev
```

Visit http://localhost:3000/about and you'll see the "Schedule a call" button!

---

## 📸 What It Looks Like

The button will appear at the top of your About page:

```
┌─────────────────────────────────────────┐
│  📅  Schedule a call              →     │
└─────────────────────────────────────────┘
```

When clicked, it opens your Cal.com booking page where visitors can:
- See your availability
- Pick a time slot
- Book a meeting with you
- Get automatic calendar invites

---

## 🎯 Recommended Settings

After basic setup, customize these:

**Event Details:**
- Name: "30 Minute Meeting" or "Coffee Chat"
- Duration: 30 minutes
- Location: Google Meet (free) or Zoom

**Availability:**
- Set your working hours
- Add buffer time: 10 minutes between meetings
- Set max meetings per day: 3-5

**Questions to Ask:**
- What would you like to discuss?
- How did you hear about me?
- LinkedIn profile (optional)

---

## 💡 Pro Tips

1. **Use a professional username**: `himanshu-sharma` not `himanshu123`
2. **Add a profile photo**: Same as your portfolio avatar
3. **Write a good description**: "Let's discuss full-stack development, Django, or potential collaborations"
4. **Set reasonable hours**: Don't burn out - limit availability
5. **Add confirmation message**: Thank them and set expectations

---

## 🔗 Your Cal.com Dashboard

After setup, bookmark these:
- Dashboard: https://cal.com/event-types
- Bookings: https://cal.com/bookings
- Availability: https://cal.com/availability

---

## ✅ Checklist

- [ ] Created Cal.com account
- [ ] Set up basic availability
- [ ] Got booking link
- [ ] Updated content.tsx with link
- [ ] Changed display to `true`
- [ ] Tested on local dev server
- [ ] Verified booking flow works

---

## 🆘 Troubleshooting

**Button doesn't show?**
- Make sure `display: true` in content.tsx
- Restart dev server: `npm run dev`

**Link doesn't work?**
- Verify your Cal.com link is correct
- Make sure event type is published (not draft)

**Want to disable it?**
- Just set `display: false` in content.tsx

---

## 🎨 Customization (Optional)

Want to match your portfolio branding?

1. Go to Cal.com Settings → Appearance
2. Upload your logo
3. Set brand color (match your portfolio theme)
4. Requires Cal.com Pro plan ($12/month)

Free tier works great for most use cases!
