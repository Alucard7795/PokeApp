import React, {useEffect} from 'react';
import {Image, View, Platform, ImageBackground} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../../navigator/StackNavigator';
import {styles} from './Style';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  GoogleSignin.configure({
    webClientId:
      Platform.OS === 'ios'
        ? '251704032776-qqhr07fmkqikhsl1peglg14dupnaf7dc.apps.googleusercontent.com'
        : '251704032776-pbpph4h7lbq8kf0ia123ve3f3f1n90da.apps.googleusercontent.com',
  });

  const handleGoogleLogin = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  };

  const handleFacebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    return auth().signInWithCredential(facebookCredential);
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            handleGoogleLogin().then(() => navigation.navigate('HomeScreen'))
          }>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Google-favicon-vector.png',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleFacebookLogin().then(() => navigation.navigate('HomeScreen'))
          }>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
