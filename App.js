import React from 'react';
import { View,TextInput ,Button,StyleSheet,FlatList,Vibration,CameraRoll,ScrollView} from 'react-native';
import films from './helpers/filmsData';
import FilmItems from './componants/filmItems';

const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];


export default class App extends React.Component {

  StartVibration(){
Vibration.vibrate(PATTERN);
  }
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
         console.log("erreur");
      });
    };
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={StyleSheet.textinput} placeholder="entrer votre nom" ></TextInput>
        <Button title="recherche" onPress={this._handleButtonPress}> </Button>
        <FlatList

  data={films}

  keyExtractor={(item) => item.id.toString()}

  renderItem={({item}) => <FilmItems film={item}/>}

/>
<View>
<ScrollView>
       {this.state.photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}
     </ScrollView>
</View>
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
