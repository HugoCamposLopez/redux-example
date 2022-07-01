import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import { add, del } from "../../store/Slice/NameSlice/NameSlice";

const Redux = () => {
  const state = useSelector((state) => state.name);
  const {value} = useSelector((state)=> state.counter)
  console.log("Names ", state);
  const [name, setName] = useState("");
  return (
    <View style={{ fontSize: 40, marginTop: 30 }}>
      <Text style={{ fontSize: 40, marginTop: 30 }}>Redux</Text>
      <TextInput
        placeholder='Nombre a agregar'
        style={{ borderWidth: 1, padding: 3, fontSize: 18 }}
        onChangeText={setName}
        value={name}
        />

      {state.map((item, index) => {
        return (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>{item} y {value}</Text>
            <View style={{ width: 100 }}>
              <Button title='Borrar' onPress={() => store.dispatch(del(item))}/>
            </View>
          </View>
        );
      })}
      <Button
        title='Agregar nombre'
        onPress={() => store.dispatch(add(name), setName(""))}
      />
    </View>
  );
};

export default Redux;
