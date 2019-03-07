import React from 'react';
import { View,TextInput ,Button,StyleSheet,FlatList,Vibration,ActivityIndicator} from 'react-native';
import films from './helpers/filmsData';
import FilmItems from './componants/filmItems';
import { getFilms} from './API/TMDB'
const DURATION = 500;
const PATTERN = [1000, 2000, 3000];


export default class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = { films: [],
   isLoading:false
   }
this.searchText="" 
  }
  //a tester componentWillMount pour le get de API
  
  StartVibration(){
Vibration.vibrate(DURATION);
  }
  displayLoading(){
    if(this.state.isLoading){
      return (
    <View style={styles.loading_container}>
      <ActivityIndicator size='large'/>
    </View>
      ) 
    }
  }
  loadFilm(){
    this.setState({ isLoading:true})
    if(this.searchText.length>0){
     getFilms(this.searchText).then(data => 
       this.setState({ 
        films: data,
       isLoading:false})
      
         )
        
     }
    Vibration.vibrate(PATTERN);
   
  }
  searchTextinput(text){
    this.searchText=text
  }
  render() {
    //console.log(this.state.isLoading);
    return (
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this.searchTextinput(text)} style={StyleSheet.textinput} placeholder="entrer le nom du film ;)" ></TextInput>
        <Button title="recherche" onPress={()=>this.loadFilm()}> </Button>
        <FlatList


  data={this.state.films}
  
  keyExtractor={(item) => item.id.toString()}

  renderItem={({item}) => <FilmItems film={item}/>}

/>
{this.displayLoading()}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
