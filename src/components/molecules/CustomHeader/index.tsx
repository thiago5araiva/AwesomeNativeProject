import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Container from '_atoms/Container';
import Text from '_atoms/Text';
import { getHeaderTitle } from '@react-navigation/elements';
import { Row } from '_atoms/';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ChevronRight } from '_icons/';
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
    backgroundColor: colors?.background,
  };

  return (
    <SafeAreaView style={bindStyles}>
      <Container customStyle={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronRight />
        </TouchableOpacity>
        <Text customStyle={styles.title} type="heading">
          {title}
        </Text>
      </Container>
    </SafeAreaView>
  );
};

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.2,
  },
  header: {
    marginTop: 16,
  },
  title: { marginTop: 34 },
});

export default CustomHeaderComponent;
