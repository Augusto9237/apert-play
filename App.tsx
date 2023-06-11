import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" style='light' />
      <Routes />
    </SafeAreaProvider>
  );
}

