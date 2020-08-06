import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import {
  Appbar,
  Button,
  DefaultTheme,
  Dialog,
  Paragraph,
  Portal,
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
  const [visible, setVisible] = React.useState(false);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#002984" />
      <Appbar.Header>
        <Appbar.Action
          icon="emoticon-tongue-outline"
          onPress={() => setVisible(true)}
        />
        <Appbar.Content title="Meme Generator" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Information</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              App developed with React Native
              {'\n'}
              Developer: Anthony Gonzalez
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <HomeScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
