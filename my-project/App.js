import { useRoute } from "./router";
import { Camera, CameraType } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const routing = useRoute({}); // useRoute({})
  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
