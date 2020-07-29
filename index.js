/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/containers/HomeScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
