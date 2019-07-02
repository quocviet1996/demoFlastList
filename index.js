/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import flastlist from './src/component/flatlist'

AppRegistry.registerComponent(appName, () => flastlist);
