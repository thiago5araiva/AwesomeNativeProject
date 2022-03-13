import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { ChevronRight } from '_icons/';
import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Column, Container } from '_atoms/';
import { DEFAULT_THEME } from '_themes/';

const GoBackComponent = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <Column customStyle={styles.container}>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronRight />
        </TouchableOpacity>
      </Container>
    </Column>
  );
};
const { colors } = DEFAULT_THEME;
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.1,
    backgroundColor: colors.background,
  },
});

export default GoBackComponent;
