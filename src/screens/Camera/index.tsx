import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import { styles } from './styles';
interface IPhoto {
    height: string
    uri: string
    width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const[photo, setPhoto] = useState<IPhoto>()
  const ref = useRef(null)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos de permissão para acessar a câmera!!!</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
        const picture = await ref.current.takePictureAsync()
        console.log(picture)
        setPhoto(picture)
    }
  }

  return (
    <View style={styles.container}>
        <ComponentButtonInterface title='Flip' type='secondary' onPressI={toggleCameraType} />
        <Camera style={styles.camera} type={type} ref={ref} />
        <ComponentButtonInterface title='Tirar Foto' type='secondary' onPressI={takePicture}/>
        {photo && photo.uri && (
            <Image source={{ uri: photo.uri }} style={styles.img} />
        )}
    </View>
  );
}
