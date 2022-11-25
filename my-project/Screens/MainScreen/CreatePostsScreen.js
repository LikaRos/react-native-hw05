import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);

    console.log("photo", photo);
  };
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    //  height: 300,
    //  marginTop: 50,
    flex: 1, //фото зона открывается на весь єкран
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    marginTop: 200,
    color: "#fff",
  },
  snapContainer: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    borderColor: "red",
    borderWidth: 1,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "black",
    borderWidth: 1,
    // height: 200,
    // width: 200,
  },
});
export default CreatePostsScreen;
