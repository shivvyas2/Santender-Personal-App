# Quick Start - Deploy to TestFlight

## Prerequisites Checklist
- [ ] Expo account (sign up at expo.dev)
- [ ] Apple Developer account ($99/year)
- [ ] App Store Connect access

## Step-by-Step Commands

### 1. Install EAS CLI (if not already installed)
```bash
npm install -g eas-cli
```

### 2. Login to Expo
```bash
eas login
```

### 3. Initialize EAS (First time only)
```bash
eas build:configure
```

### 4. Build for iOS Production
```bash
eas build --platform ios --profile production
```

**What happens:**
- EAS will ask if you want to create a new app in App Store Connect (say yes if first time)
- You'll need to provide Apple ID credentials
- Build takes 15-30 minutes
- You'll get a build URL to track progress

### 5. Submit to TestFlight
```bash
eas submit --platform ios --profile production
```

**What happens:**
- EAS will ask for Apple ID credentials
- Build will be uploaded to App Store Connect
- Processing takes 10-30 minutes

### 6. Add Testers in App Store Connect
1. Go to https://appstoreconnect.apple.com
2. Select your app → TestFlight tab
3. Add internal testers (up to 100) or external testers
4. Testers receive email invitations once processing completes

## Alternative: Use npm scripts

```bash
# Build
npm run build:ios:production

# Submit
npm run submit:ios:production
```

## Troubleshooting

**Build fails?**
- Check `app.json` has bundle identifier: `com.santander.personal`
- Verify Apple Developer account is active
- Check EAS status: https://status.expo.dev

**Can't submit?**
- Ensure build completed successfully
- Check App Store Connect has the app created
- Verify Apple ID has correct permissions

## Current Configuration

- **Bundle ID**: `com.santander.personal`
- **Version**: `1.0.0`
- **Build Number**: `1`

**Note**: Increment build number for each new build!

## Need Help?

See `DEPLOYMENT.md` for detailed documentation.

