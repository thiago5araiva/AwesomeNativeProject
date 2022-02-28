import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import Container from '_atoms/Container';

const StartScreen = () => {
  const style = styles();
  return (
    <Container customStyle={style.container}>
      <View>
        <Text>StartScreen</Text>
      </View>
    </Container>
  );
};

export default StartScreen;

const styles = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
  });
  return styles;
};
