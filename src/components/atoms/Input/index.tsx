import React, { useEffect, useRef, useState } from 'react';
import { TextInput, StyleSheet, View, Animated } from 'react-native';
import Text from '_atoms/Text/';
import { Error, Check } from '_icons/';
import COLORS from '_constants/Colors';

import { InputStateTypes, InputTypes } from './types';
const InputComponent = ({
  type,
  inputAutoFocus,
  inputChange,
  inputDefaultValue,
  inputPlaceholder,
  customStyle,
  success,
  error,
}: InputTypes): JSX.Element => {
  const [placeholderValues, setPlaceholderValues] = useState<InputStateTypes>({
    label: false,
    placeholder: inputPlaceholder,
  });
  const animation = useRef(new Animated.Value(0)).current;
  function handleAnimationFadeIn() {
    setPlaceholderValues({
      ...placeholderValues,
      label: true,
      placeholder: '',
    });
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <View style={[styles.container, error && styles.errorContainer]}>
        {placeholderValues.label && (
          <Animated.View
            style={[styles.placeholderContainer, { opacity: animation }]}>
            <Text type="helper" customStyle={[error && styles.errorLabel]}>
              {inputPlaceholder}
            </Text>
          </Animated.View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={type}
            autoFocus={inputAutoFocus}
            blurOnSubmit={true}
            defaultValue={inputDefaultValue}
            onChangeText={inputChange}
            placeholder={placeholderValues.placeholder}
            style={[styles.input, customStyle]}
            onFocus={handleAnimationFadeIn}
          />

          {success && <Check />}
          {error && <Error />}
        </View>
      </View>
      {error && (
        <Text customStyle={[error && styles.errorMessage]} type="helper">
          Error message
        </Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    height: 64,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3.5,
    },
    shadowOpacity: 0.2,
    shadowColor: COLORS.black,
    shadowRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Metropolis-Regular',
    fontSize: 14,
    color: COLORS.black,
  },
  placeholderContainer: { marginBottom: 8, opacity: 1 },
  errorContainer: { borderColor: COLORS.red, borderWidth: 1 },
  errorLabel: { color: COLORS.red },
  errorMessage: { color: COLORS.red, marginTop: 10, marginLeft: 20 },
});
export default InputComponent;
