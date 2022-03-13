import React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Column, Container, Row, Text } from '_atoms/';
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
        <Row>
          <TouchableOpacity
            style={styles.header}
            onPress={() => navigation.goBack()}>
            <ChevronRight />
          </TouchableOpacity>
          <Text customStyle={styles.title} type="title">
            {title}
          </Text>
        </Row>
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
    justifyContent: 'flex-end',
  },
  header: {},
  title: {
    flex: 1,
    textAlign: 'center',
    marginLeft: -24,
  },
});
export default CustomHeaderComponent;
