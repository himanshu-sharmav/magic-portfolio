# Cal.com Integration Setup Guide

## Step 1: Create Your Cal.com Account

1. Visit [cal.com](https://cal.com) and sign up for a free account
2. Complete your profile setup:
   - Add your name and bio
   - Set your availability (working hours)
   - Connect your calendar (Google Calendar, Outlook, etc.)

## Step 2: Create an Event Type

1. Go to "Event Types" in your Cal.com dashboard
2. Click "New Event Type"
3. Configure your meeting:
   - **Event name**: "30 Minute Meeting" or "Coffee Chat"
   - **Duration**: 30 minutes (or your preference)
   - **Location**: Google Meet, Zoom, or Phone call
   - **Description**: Add a description about what the meeting is for
4. Set your availability and buffer times
5. Save the event type

## Step 3: Get Your Booking Link

After creating your event type, you'll get a booking link like:
```
https://cal.com/your-username/30min
```

Or if you want people to see all your event types:
```
https://cal.com/your-username
```

## Step 4: Update Your Portfolio

Once you have your Cal.com link, I've already prepared the integration. You just need to:

1. Copy your Cal.com booking link
2. Update the `calendar.link` in `src/resources/content.tsx`
3. The "Schedule a call" button will appear on your About page

## Current Configuration

The calendar integration is currently **disabled** in your portfolio. Once you have your Cal.com link, update this line in `src/resources/content.tsx`:

```typescript
calendar: {
  display: true,  // Change from false to true
  link: "https://cal.com/your-username/30min",  // Add your actual Cal.com link
},
```

## Features

When enabled, the calendar integration will:
- Display a "Schedule a call" button on your About page
- Open your Cal.com booking page when clicked
- Allow visitors to book meetings directly with you
- Automatically sync with your connected calendar

## Customization Options

You can customize your Cal.com booking page:
- **Branding**: Add your logo and brand colors (Pro plan)
- **Questions**: Add custom questions for bookers
- **Notifications**: Set up email/SMS reminders
- **Integrations**: Connect with Zoom, Google Meet, Slack, etc.

## Alternative: Calendly

If you prefer Calendly instead of Cal.com:
1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Get your scheduling link
3. Use the same configuration in content.tsx

## Testing

After enabling:
1. Run your portfolio locally: `npm run dev`
2. Visit the About page
3. You should see a "Schedule a call" button at the top
4. Click it to test the booking flow

## Tips

1. **Set buffer times**: Add 5-10 minutes between meetings
2. **Limit daily meetings**: Set a maximum number of meetings per day
3. **Add meeting prep time**: Include time before meetings to prepare
4. **Use different event types**: Create different durations (15min, 30min, 60min)
5. **Add a cancellation policy**: Set minimum notice for cancellations

## Privacy

Cal.com is open-source and privacy-focused. Your data is:
- Encrypted in transit and at rest
- Not sold to third parties
- Compliant with GDPR and privacy regulations

## Next Steps

1. ✅ Create Cal.com account
2. ✅ Set up your availability
3. ✅ Create event type(s)
4. ✅ Get your booking link
5. ✅ Update content.tsx with your link
6. ✅ Enable calendar display
7. ✅ Test the integration
