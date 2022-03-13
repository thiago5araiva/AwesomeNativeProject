import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRight } from '_icons/';

import { Button, Column, Container, Input, Link, Text } from '_atoms/';
import { DEFAULT_THEME } from '_themes/';
const SignInScreen = (): JSX.Element => {
  const [email, onChangeEmail] = useState<string>('Email');
  const [password, onChangePassword] = useState<string>('Password');

  return (
    <Container>
      {/* inputs */}
      <Column customStyle={styles.container}>
        {/* name input */}
        <TextInput
          style={[styles.input, styles.input_email]}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={[styles.input, styles.input_password]}
          onChangeText={onChangePassword}
          value={password}
        />
        {/* singup-screen-link */}
        <Link type="component" customStyle={styles.forgot_password}>
          <Text type="descriptive">Forgot your password?</Text>
          <ArrowRight
            width={12}
            color={DEFAULT_THEME.colors.notification}
            customStyle={styles.icon}
          />
        </Link>

        {/* signupbtn */}
        {/* button */}
        <Button onPress={() => ''} title="LOGIN"></Button>
      </Column>
      {/* social-login */}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: DEFAULT_THEME.spacing.lg.primary,
  },
  input: {
    height: 64,
    padding: 22,
    backgroundColor: DEFAULT_THEME.colors.white,
    fontFamily: 'Metropolis',
    fontSize: 14,
    color: DEFAULT_THEME.colors.grey,
  },
  input_email: {
    marginBottom: DEFAULT_THEME.spacing.sm.tertiary,
  },
  input_password: { marginBottom: DEFAULT_THEME.spacing.md.primary },
  forgot_password: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: DEFAULT_THEME.spacing.md.primary,
    marginBottom: DEFAULT_THEME.spacing.md.secondary,
  },
  icon: {
    marginLeft: DEFAULT_THEME.spacing.sm.secondary,
  },
});

export default SignInScreen;
