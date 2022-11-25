import { useRoute } from "./router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const routing = useRoute({}); // useRoute({})
  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
