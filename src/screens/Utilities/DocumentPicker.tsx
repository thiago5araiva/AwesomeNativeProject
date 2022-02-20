import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { UserContext } from '_contexts/';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';

type DocumentPickerState =
  | Array<DocumentPickerResponse>
  | DirectoryPickerResponse
  | undefined
  | null;

const DocumentPickerScreen = () => {
  const [result, setResult] = useState<DocumentPickerState>();

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      // console.warn(
      //   'multiple pickers were opened, only the last will be considered',
      // );
    } else {
      throw err;
    }
  };

  const handlePicker = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      setResult([pickerResult]);
    } catch (e) {
      handleError(e);
    }
  };
  return (
    <View style={styles.container}>
      <Button
        title="open picker for single file selection"
        onPress={async () => handlePicker()}
      />
      {/* <Button
        title="open picker for multi file selection"
        onPress={() => {
          DocumentPicker.pickMultiple().then(setResult).catch(handleError);
        }}
      />
      <Button
        title="open picker for multi selection of word files"
        onPress={() => {
          DocumentPicker.pick({
            allowMultiSelection: true,
            type: [types.doc, types.docx],
          })
            .then(setResult)
            .catch(handleError);
        }}
      />
      <Button
        title="open picker for single selection of pdf file"
        onPress={() => {
          DocumentPicker.pick({
            type: types.pdf,
          })
            .then(setResult)
            .catch(handleError);
        }}
      />
      <Button
        title="releaseSecureAccess"
        onPress={() => {
          DocumentPicker.releaseSecureAccess([])
            .then(() => {
              console.warn('releaseSecureAccess: success');
            })
            .catch(handleError);
        }}
      />
      <Button
        title="open directory picker"
        onPress={() => {
          DocumentPicker.pickDirectory().then(setResult).catch(handleError);
        }}
      /> */}

      <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default DocumentPickerScreen;
