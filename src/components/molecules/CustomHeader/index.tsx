import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Container from '_atoms/Container';
import Text from '_atoms/Text';
import { getHeaderTitle } from '@react-navigation/elements';

const screen = Dimensions.get('window');

const CustomHeaderComponent = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  /**-- navigation config --**/
  // const { options } = scene.descriptor;
  // const title =
  //   options.headerTitle !== undefined
  //     ? options.headerTitle
  //     : options.title !== undefined
  //     ? options.title
  //     : scene.route.name;

  const { colors } = useTheme();

  const bindStyles = {
    ...styles['container'],
    backgroundColor: colors.background,
  };

  console.log(bindStyles);

  return (
    <SafeAreaView style={bindStyles}>
      <Container>
        <Text type="heading">{title}</Text>
        <Text type="heading">{title}</Text>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.2,
    marginTop: 8,
  },
});

export default CustomHeaderComponent;
