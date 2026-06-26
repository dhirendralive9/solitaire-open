import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.techfirio.solitaireopen',
  appName: 'Solitaire Open',
  webDir: 'www',
  server: {
    // In production, the game runs from local files (no server needed)
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#14693a',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#000000'
    },
    Haptics: {}
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'Solitaire Open'
  },
  android: {
    backgroundColor: '#14693a'
  }
};

export default config;
