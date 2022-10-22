import { StyleSheet } from "react-native";
const style=StyleSheet.create({
  container: {
    flex:1,
    //padding:10,
    //margin:20
  },
  bagian1: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white'
   
  },
  bagian11: {
    flex:1,
    backgroundColor: 'red',
    borderWidth:1
  },
  bagian12: {
    flex:8,
    backgroundColor:'blue'
  },
  bagian2:{
    flex:10,
    backgroundColor:'grey'
  },
  tulisanku: {
    marginTop:15,
    paddingVertical:8,
    borderWidth:3,
    fontSize:20
  },
});

export{style};