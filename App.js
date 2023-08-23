import { StyleSheet } from "react-native";
import StackNavigator from "./navigator/StackNavigator";
import { CartContextProvider } from "./context/CartContext";

export default function App() {
  return (
    <>
      <CartContextProvider>
        <StackNavigator />
      </CartContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
