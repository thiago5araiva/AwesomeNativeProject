import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Container, Text } from '_atoms/';
import { ChevronRight } from '_icons/';
import { DEFAULT_THEME } from '_themes/';
const CustomHeaderComponent = ({
  navigation,
  route,
  options,
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <ChevronRight />
        </TouchableOpacity>
        <Text type="heading">{title}</Text>
      </Container>
    </SafeAreaView>
  );
};

const { colors } = DEFAULT_THEME;
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.2,
    backgroundColor: colors.background,
  },
  button: { marginBottom: 16 },
});

export default CustomHeaderComponent;
