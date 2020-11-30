/* eslint-disable no-use-before-define */
import React from 'react';
import { Button, ThemeProvider, Input } from 'react-native-elements';
import { SafeAreaView, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { LogoInalum } from '../../assets/icon';

const Login = () => (
  <ThemeProvider>

    <SafeAreaView style={styles.container}>
      <Image source={LogoInalum} style={styles.logo} />
      <Input
        placeholder="Username"
        leftIcon={(
          <Icon
            name="user"
            size={24}
            color="black"
          />
        )}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        leftIcon={(
          <Icon
            name="lock"
            size={24}
            color="black"
          />
        )}
      />

      <Button
        title="Login"
        buttonStyle={styles.loginButton}
        containerStyle={styles.loginButtonContainer}
      />
    </SafeAreaView>

  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '97%',
  },

  logo: {
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: 'center',
  },

  loginButton: {
    width: '100%',
    justifyContent: 'center',
  },

  loginButtonContainer: {
    width: '100%',
    alignContent: 'center',
  },

});

export default Login;
