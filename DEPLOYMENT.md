# Deployment Guide - Santander Personal App

This guide will help you deploy the Santander Personal App to TestFlight using EAS (Expo Application Services).

## Prerequisites

1. **Expo Account**: Sign up at [expo.dev](https://expo.dev) if you don't have one
2. **Apple Developer Account**: You need an active Apple Developer Program membership ($99/year)
3. **App Store Connect Access**: Access to create and manage apps in App Store Connect

## Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

Or use npx (no installation needed):
```bash
npx eas-cli --version
```

## Step 2: Login to Expo

```bash
eas login
```

Enter your Expo account credentials.

## Step 3: Configure Your Project

The project is already configured with:
- `eas.json` - EAS build configuration
- `app.json` - App configuration with bundle identifier: `com.santander.personal`

**Important**: Before building, you may need to:
1. Update the bundle identifier in `app.json` if you want a different one
2. Ensure you have the app icon and splash screen configured

## Step 4: Initialize EAS Project (First Time Only)

```bash
eas build:configure
```

This will link your project to EAS and may update your `eas.json` file.

## Step 5: Build for iOS

### Option A: Build for TestFlight (Production)

```bash
npm run build:ios:production
```

Or directly:
```bash
eas build --platform ios --profile production
```

### Option B: Build for Internal Testing (Preview)

```bash
npm run build:ios:preview
```

Or directly:
```bash
eas build --platform ios --profile preview
```

**During the build process:**
- EAS will ask if you want to create a new app in App Store Connect (if it doesn't exist)
- You'll need to provide your Apple ID and App Store Connect API key (or use interactive mode)
- The build will take 15-30 minutes

## Step 6: Submit to TestFlight

Once the build is complete, submit it to TestFlight:

```bash
npm run submit:ios:production
```

Or directly:
```bash
eas submit --platform ios --profile production
```

**During submission:**
- EAS will ask for your Apple ID credentials
- It will automatically upload the build to App Store Connect
- The build will appear in TestFlight within a few minutes

## Step 7: Configure TestFlight

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Navigate to your app
3. Go to the **TestFlight** tab
4. Add internal testers (up to 100) or external testers
5. Once processing is complete, testers will receive an email invitation

## Troubleshooting

### Build Fails
- Check that your `app.json` has all required fields
- Ensure your Apple Developer account is active
- Verify bundle identifier is unique and matches your App Store Connect app

### Submission Fails
- Ensure you have the correct App Store Connect API key
- Check that the app exists in App Store Connect
- Verify your Apple Developer account has the necessary permissions

### TestFlight Not Showing Build
- Processing can take 10-30 minutes after upload
- Check the App Store Connect dashboard for processing status
- Ensure you've added testers in the TestFlight section

## Configuration Files

### eas.json
- `production` profile: For App Store and TestFlight releases
- `preview` profile: For internal testing
- `development` profile: For development builds

### app.json
- Bundle Identifier: `com.santander.personal`
- Version: `1.0.0`
- Build Number: `1` (increment for each build)

## Next Steps

After successful TestFlight deployment:
1. Test the app thoroughly with your testers
2. Gather feedback
3. Make any necessary updates
4. Increment version/build number for next release
5. Build and submit again when ready

## Useful Commands

```bash
# Check build status
eas build:list

# View build details
eas build:view [BUILD_ID]

# Cancel a build
eas build:cancel [BUILD_ID]

# Update credentials
eas credentials
```

## Support

For EAS-specific issues, visit:
- [EAS Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Build Troubleshooting](https://docs.expo.dev/build/troubleshooting/)
- [Expo Forums](https://forums.expo.dev/)

