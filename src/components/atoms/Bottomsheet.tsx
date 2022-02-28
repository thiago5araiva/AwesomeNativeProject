import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useState,
} from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
} from 'react-native';
import { Button } from '.';
import BottomsheetImage from '_assets/images/bottomsheetImage.svg';

export interface BottomSheetInterface {
  close(): void;
  open(): void;
}
export type BottomSheetTypes = {
  children?: React.ReactElement;
  active?: false;
  onPress?: void;
};

const BottomSheetComponent: RefForwardingComponent<
  BottomSheetInterface,
  BottomSheetTypes
> = (props, ref): JSX.Element => {
  const [contentHeight, setContentHeight] = useState(0);
  const backdropVisible = new Animated.Value(0);
  const contentBottom = new Animated.Value(contentHeight);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy >= 10,
    onPanResponderMove: (_, { dy }) => contentBottom.setValue(dy),
    onPanResponderRelease: (_, gestureState) => {
      contentBottom.flattenOffset();
      const percentageToClose = 0.3 * contentHeight;
      if (gestureState.dy > percentageToClose) {
        return close();
      }
      open();
    },
  });

  const animateIn = () => {
    backdropVisible.setValue(1);
    Animated.timing(contentBottom, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.timing(contentBottom, {
      toValue: contentHeight,
      useNativeDriver: true,
    }).start(() => {
      backdropVisible.setValue(0);
    });
  };

  const open = () => animateIn();
  const close = () => animateOut();

  useImperativeHandle(ref, () => ({ open, close }));

  return (
    <>
      <TouchableWithoutFeedback onPress={animateOut}>
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: contentBottom.interpolate({
                inputRange: [0, contentHeight],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
              transform: [
                {
                  translateX: backdropVisible.interpolate({
                    inputRange: [0, 1],
                    outputRange: [3000, 1],
                  }),
                },
              ],
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.content,
          {
            transform: [
              {
                translateY: contentBottom.interpolate({
                  inputRange: [0, contentHeight],
                  outputRange: [0, contentHeight],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
        onLayout={event => setContentHeight(event.nativeEvent.layout.height)}>
        <BottomsheetImage style={styles.image} fill={`blue`} />
        <Text style={styles.title}>Biometria necessária</Text>
        <Text style={styles.subtitle}>
          Para seguir com a atualização é necessária a sua biometria, procure os
          canais de atendimento para mais informações.
        </Text>
        <Button onPress={close} title="Close" />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(10, 25, 30, 0.28);',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 65,
    paddingBottom: 50,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 65,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#EE1D23',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#9C999C',
    marginBottom: 31,
  },
});

export default forwardRef(BottomSheetComponent);
