import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { Input, Button } from '_atoms/';
import { UserContext } from '_contexts/';
import { useTheme } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';

const HomeScreen = ({ navigation }) => {
  const { setState, state } = useContext(UserContext);
  const { colors } = useTheme();

  const handleInput = (value: string) => {
    setState({
      ...state,
      name: value,
    });
  };

  return (
    <SafeAreaView>
      {/* <Input
        type={'default'}
        inputChange={value => handleInput(value)}
        inputDefaultValue={''}
        inputPlaceholder={'Type Your Name Here'}
      /> */}
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to about"
      />
      <View>
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
      </View>
      <TouchableWithoutFeedback>
        <Text style={{ color: colors.text }}>onBlur</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeScreen;
