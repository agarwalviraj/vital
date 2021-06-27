/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import CreateChannelId from './components/CreateChannelId';
import {name as appName} from './app.json';
import { sendMessage } from './components/Notifications';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage'


messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
messaging().onMessage(async remoteMessage => {
     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
     //const channelId = CreateChannelId();
     //const channelId =await AsyncStorage.getItem("channel_id");

     //console.log('channel_id',channelId);
      sendMessage(["fcm_fallback_notification_channel", "channel-id"], "Hi", "Test Notification");
    });


AppRegistry.registerComponent(appName, () => App);
