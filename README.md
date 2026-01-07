# Santander Personal Banking App

A modern, beautifully designed mobile banking application built with React Native and Expo, featuring a complete Santander-branded UI with credit journey functionality.

## Features

- 🏦 **Account Management**: View and manage checking, savings, and credit card accounts
- 💳 **Credit Journey**: Comprehensive credit score tracking with detailed breakdowns, alerts, and personalized offers
- 💸 **Pay & Transfer**: Send money, pay bills, and transfer between accounts
- 🎨 **Modern UI**: Clean, modern design with Santander red branding
- 📱 **Responsive Design**: Optimized for iOS and Android

## Screens

- **Accounts**: View all bank accounts and credit cards with balances
- **Pay & Transfer**: Quick actions for sending money and paying bills
- **Credit Journey**: Credit score tracking, alerts, and offers
- **More**: Settings, support, and additional features

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [TypeScript](https://www.typescriptlang.org/)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (optional, can use npx)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Santender Personal App"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run on your device:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## Project Structure

```
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Accounts screen
│   │   ├── credit-journey.tsx
│   │   ├── pay-transfer.tsx
│   │   └── more.tsx
│   └── _layout.tsx         # Root layout
├── components/             # Reusable components
├── constants/              # Theme and constants
├── hooks/                  # Custom React hooks
└── assets/                 # Images and static assets
```

## Design System

- **Primary Color**: Santander Red (`#EC0000`)
- **Typography**: System fonts with modern weights
- **Spacing**: Consistent 20px padding, 16-20px margins
- **Border Radius**: 20px for cards, 16px for buttons
- **Shadows**: Modern elevation with subtle shadows

## Development

### Running the App

```bash
# Start Expo development server
npx expo start

# Run on iOS
npx expo start --ios

# Run on Android
npx expo start --android

# Run on Web
npx expo start --web
```

### Building

```bash
# Build for production
npx expo build:android
npx expo build:ios
```

## License

This project is for demonstration purposes.

## Contributing

This is a personal project. Feel free to fork and modify for your own use.

---

Built with ❤️ using Expo and React Native
