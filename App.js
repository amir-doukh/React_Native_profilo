import React from 'react';
import { View,TextInput ,Button,StyleSheet,FlatList,Vibration,CameraRoll,ScrollView} from 'react-native';
import films from './helpers/filmsData';
import FilmItems from './componants/filmItems';
import { getFilms} from './API/TMDB'
const DURATION = 500;
const PATTERN = [1000, 2000, 3000];


export default class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = { films: [],
   
}
this.searchText="" 
  }

  StartVibration(){
Vibration.vibrate(DURATION);
  }
  loadFilm(){
    if(this.searchText.length>0){
     getFilms(this.searchText).then(data =>this.setState({ films: data.results }));}
    Vibration.vibrate(PATTERN);
    console.log(this.searchText);
  }
  searchTexttnput(text){
    this.searchText=text
  }
  render() {
    console.log("RENDER");
    return (
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this.searchTexttnput(text)} style={StyleSheet.textinput} placeholder="entrer votre nom" ></TextInput>
        <Button title="recherche" onPress={()=>this.loadFilm()}> </Button>
        <FlatList

  data={this.state.films}
  
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
