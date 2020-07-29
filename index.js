import { AppRegistry, StatusBar } from 'react-native';
import {name as appName} from './app.json';
import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import HomeScreen from './src/containers/HomeScreen';
import React from 'react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3f51b5',
    accent: '#ab47bc',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#002984" />
      <Appbar>
        <Appbar.Action icon="emoticon-tongue-outline" onPress={() => {}} />
        <Appbar.Content title="Meme Generator" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar>
      <HomeScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
