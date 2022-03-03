import React from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Container, Row, Text } from '_atoms/';
import { ChevronRight } from '_icons/';
import { DEFAULT_THEME } from '_themes/';

const CustomHeaderComponent = ({
  navigation,
  route,
  options,
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <SafeAreaView style={styles.header}>
      <Container>
        <Row>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <ChevronRight />
          </TouchableOpacity>
          <Text customStyle={styles.title} type="title">
            {title}
          </Text>
        </Row>
      </Container>
    </SafeAreaView>
  );
};
const { colors } = DEFAULT_THEME;
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    height: screen.height * 0.12,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 57,
    marginLeft: -24,
  },
});
export default CustomHeaderComponent;
