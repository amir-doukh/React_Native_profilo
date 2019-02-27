import React from 'react';
import { View,TextInput ,Button,StyleSheet,FlatList,Vibration} from 'react-native';
import films from './helpers/filmsData';
import FilmItems from './componants/filmItems';

const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];


export default class App extends React.Component {

  StartVibration(){
Vibration.vibrate(PATTERN);
  }
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={StyleSheet.textinput} placeholder="entrer votre nom" ></TextInput>
        <Button title="recherche" onPress={this.StartVibration}> </Button>
        <FlatList

  data={films}

  keyExtractor={(item) => item.id.toString()}

  renderItem={({item}) => <FilmItems film={item}/>}

/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  main_container:{
    marginTop:50,
    flex:1,
  },
  textinput:{
    height:50,
    marginLeft:8,
    marginRight:15,
    borderColor:'#000000',
    paddingLeft:10 ,
    borderWidth:3
  }
})
