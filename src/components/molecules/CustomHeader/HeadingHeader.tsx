import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Column, Container, Text, Link } from '_atoms/';
import { ChevronRight } from '_icons/';
import { DEFAULT_THEME } from '_themes/';
const CustomHeaderComponent = ({
  navigation,
  route,
  options,
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <Column customStyle={styles.container}>
      <Container>
        <Link
          type="component"
          customStyle={styles.button}
          customPress={() => navigation.goBack()}>
          <ChevronRight color={DEFAULT_THEME.colors.black} width={30} />
        </Link>
        <Text type="heading">{title}</Text>
      </Container>
    </Column>
  );
};

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.2,
    backgroundColor: DEFAULT_THEME.colors.background,
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: DEFAULT_THEME.spacing.md.secondary,
    marginLeft: -9,
  },
});

export default CustomHeaderComponent;
