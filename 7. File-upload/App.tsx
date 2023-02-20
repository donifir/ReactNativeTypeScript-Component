import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import axios from 'axios';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};


const App = () => {
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2))
  }, [result])


  // send axios
  const btnSend=async()=>{

    const fileToUpload:any = result;
    const formData = new FormData()
    formData.append('nama_gambar','donio')
    formData.append('gambar',fileToUpload[0])

   await axios.post('http://192.168.91.12:8000/api/data/create', 
   formData, header
  //  {
  //     nama_gambar: 'Fred',
  //     gambar: result
  //   }
    )
    .then(function (response) {
      console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
  } 

  return (
    <SafeAreaView>
       <Button
        title="open picker for single selection of pdf file"
        onPress={() => {
          DocumentPicker.pick({
            type: types.images,
          })
            .then(setResult)
            .catch(handleError)
        }}
      />
      <Button
        title="open picker for single file selection"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}
      />
      <Button
        title="open picker for multi file selection"
        onPress={() => {
          DocumentPicker.pickMultiple().then(setResult).catch(handleError);
        }}
      />

      <View>
        <Text>{JSON.stringify(result, null, 2)}</Text>
      </View>

      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={btnSend}>
        <Text style={{color:'blue'}}>kirim</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

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
