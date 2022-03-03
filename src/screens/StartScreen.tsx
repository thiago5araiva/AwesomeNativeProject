import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { OnlineGifting } from '_images/';
import { Text, Container, Column, Button } from '_atoms/';
import { DEFAULT_THEME } from '_themes/';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '_/router`';

type HomeScreenPropTypes = StackNavigationProp<RootStackParamList, 'SignIn'>;

const StartScreen = (): JSX.Element => {
  const { navigate } = useNavigation<HomeScreenPropTypes>();
  const { container, image, title, text } = bindStyles();
  const { width } = Dimensions.get('window');

  return (
    <Container customStyle={container}>
      <OnlineGifting size={width} customStyle={image} />
      <Column>
        <Text customStyle={title} type={'heading'}>
          Lore Ipsum
        </Text>
        <Text customStyle={text} type={'description'}>
          Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi.
          Mauris aliquet nunc non turpis scelerisque, eget.Suco de cevadiss
          deixa as pessoas mais interessantis.
        </Text>
      </Column>
      <Button onPress={() => navigate('SignIn')} title="Lorem Ipsum" small />
    </Container>
  );
};

export default StartScreen;

const bindStyles = () => {
  const { spacing } = DEFAULT_THEME;
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.md.primary,
    },
    title: {
      marginBottom: spacing.md.primary,
    },
    text: {
      marginBottom: spacing.lg.primary,
    },
  });
  return style;
};
