import {StyleSheet} from 'react-native'

export const estilosCreados = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 50,
  },
  contenedor:{
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    alignSelf: "center",
    backgroundColor: "red",
    marginTop: 20
  },
  textTareas:{
    fontSize: 20,
    fontWeight: "500",
    marginTop: 50
  },
  imagen:{
    width: 100,
    height: 100,
  },
  contenedorTarea:{
    flexDirection: "row",
    justifyContent: "space-between"
  }
})