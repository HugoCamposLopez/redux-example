import { View, Text, Alert, Button } from "react-native";
import React, { useState, useCallback } from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../store/Slice/CounterSlice/CounterSlice";
export default function HomeScreen() {
  const state = useSelector((state) => state.counter);
  const navigation = useNavigation();
  const [numero, setNumero] = useState(0);
  console.log(state);
  console.log("EStoy en home");
  console.log(store.getState().name)
  return (
    <>
      <View style={{ flex: 1, height: "100%", marginTop: 30 }}>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 30 }}>
          {" "}
          HomeScreen {state.value} {store.getState().name}
        </Text>

        <Button
          title='Aumentar 1'
          onPress={() => store.dispatch(increment())}
        />
        <Button
          title='Decrementar 1'
          onPress={() => store.dispatch(decrement())}
        />

        <Button
          title='Ir a Profile'
          onPress={() => navigation.navigate("Profile")}
        />
         <Button
          title='Ir a Redux'
          onPress={() => navigation.navigate("Redux")}
        />
      </View>
    </>
  );
}

{
  /* <Button
title='Abrir con Linking'
onPress={() =>
  handleLink(
    "https://reactrouter.com/docs/en/v6/getting-started/overview"
    )
  }
  />
  <Button
  title='Abrir con WEB BROWSER'
  onPress={() =>
    handleWebBrowser(
      "https://reactrouter.com/docs/en/v6/getting-started/overview"
            )
          }
        /> */
}
// const handleURL = ({ url }) => {
//   let { hostname, path, queryParams } = Linking.parse(url);
//   console.log(
//     `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
//       queryParams
//     )}`
//   );
// };
// const handleLink = useCallback(async (url) => {
//   const supported = await Linking.canOpenURL(url);
//   console.log(supported);
//   if (supported) {
//     await Linking.openURL(url);
//   } else {
//     Alert.alert("No se puede abrir la url");
//   }
// }, []);

// const handleWebBrowser = useCallback(async (url) => {
//   const supported = await WebBrowser.openBrowserAsync(url);
// }, []);
