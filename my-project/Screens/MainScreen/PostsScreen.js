import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default PostsScreen;
