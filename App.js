/*
import {Navigation} from "react-native-navigation";
import {Animated, View,StatusBar,Button,Text, Picker,TextInput ,StyleSheet,FlatList,Vibration,ActivityIndicator,Modal,TouchableHighlight} from 'react-native';
import films from './helpers/filmsData';
import { Container, Header, Title, Content, Footer, FooterTab,  Left, Right, Body, Icon } from 'native-base';
import FilmItems from './componants/filmItems';
import { getFilms} from './API/TMDB';
import FadeInView  from './API/Animationn';*/
/*const DURATION = 500;
const PATTERN = [1000, 2000, 3000];


export default class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = { films: [],
  // isLoading:false
  modalVisible: false,
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
    console.log(this.searchText.length)
    if(this.searchText.length>0){
     getFilms(this.searchText).then(data => 
       this.setState({ 
        films: data.results,
       //isLoading:false
      })
         )
        console.log(data)
     }
    Vibration.vibrate(PATTERN);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  searchTextinput(text){
    this.searchText=text
  }
  render() {
    console.log(this.state.isLoading);
    return (
      
      <View style={styles.main_container}>
      
      <Picker style={styles.picker}>
  <Picker.item label="5" value={5}/>
  <Picker.item label="10" value={10} />
</Picker>
        <TextInput onChangeText={(text) => this.searchTextinput(text)} style={StyleSheet.textinput} placeholder="entrer le nom du film ;)" ></TextInput>
        <Button title="recherche" onPress={()=>this.loadFilm()}> </Button>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>start animation :p</Text>
        </FadeInView>
  <View>
   
  </View>
              <Text>modal view</Text>

              <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
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
  },
  picker:{
    justifyContent:'center',
     
    alignItems:'center'
  }
})*/
import React from 'react';
import Home from "./screens/ScreensList/MenuList";
import Profil from "./screens/ScreensList/Profil";




