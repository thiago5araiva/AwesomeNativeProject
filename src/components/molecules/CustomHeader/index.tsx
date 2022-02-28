import { View, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Container from '_atoms/Container';
import Text from '_atoms/Text';
import { getHeaderTitle } from '@react-navigation/elements';
import { Row } from '_atoms/';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const screen = Dimensions.get('window');

const CustomHeaderComponent = ({
  navigation,
  route,
  options,
  back,
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);

  const { colors } = useTheme();

  const bindStyles = {
    ...styles['container'],
    backgroundColor: colors.background,
  };

  console.log(bindStyles);

  return (
    <SafeAreaView style={bindStyles}>
      <Container>
        <Row>
          <Text type="heading">{title}</Text>
          <Text type="heading">{title}</Text>
        </Row>
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
