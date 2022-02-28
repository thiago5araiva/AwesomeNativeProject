import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

const SignOutScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Button
          title="Test Analytics"
          onPress={async () =>
            await analytics().logEvent('TestAnalytics', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            })
          }
        /> */}
    </SafeAreaView>
  );
};

export default SignOutScreen;
