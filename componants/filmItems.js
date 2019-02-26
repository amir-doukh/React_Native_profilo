import React from 'react';
import { View,StyleSheet,Text,Image} from 'react-native';

import films from '.././helpers/filmsData';
 class FilmItems extends React.Component {
  render() { 
    data={films}
     const film = this.props.film;
      console.log(this.props);
      console.log(film.title);
    return (
      <View style={styles.main_container}>
      <View  style={{ flex: 1, backgroundColor: 'yellow',borderWidth:3 }}>
      <Image style={styles.image} source={{uri: "image"}}/>
      </View>
      <View  style={{ flex: 2, backgroundColor: 'red',flexDirection: 'column' }}>
      <View style={{flex:1,backgroundColor:'green',borderWidth:2,flexDirection: 'row'}}>
      <Text style={styles.title_text}>{film.title}</Text>
      <View style={{ backgroundColor:'orange',height: 50,width: 50, fontWeight: 'bold'}}>
      <Text>note de vote : {film.vote_average}</Text></View>
      </View>
      <View style={{flex:2 ,borderWidth:2}}>
      <Text style={styles.title_text} numberOfLines={5}>{film.overview}</Text>
      </View>
      <View style={{flex:1,borderWidth:2,backgroundColor:'#EE82EE'}}>
      <Text style={styles.title_text}>sorti le: {film.release_date}</Text>
      </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container:{
    flexDirection: 'row',
    height:200,
   
  },
  title_text:{
    
  }
})
export default FilmItems