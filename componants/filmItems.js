import React from 'react';
import { View,StyleSheet,Text,Image} from 'react-native';

import films from '.././helpers/filmsData';
 class FilmItems extends React.Component {
  render() { 
    data={films}
     const film = this.props.film;
      //console.log(this.props);
      console.log(film.id);
    return (
      <View style={styles.main_container}>
      <View  style={{ flex: 1,borderWidth:3 }}>
      <Image style={styles.image} source={{uri: "image"}}/>
      </View>
      <View  style={{ flex: 2,flexDirection: 'column' }}>
      <View style={{flex:1,borderWidth:2,flexDirection: 'row',paddingRight: 5}}>
      <Text style={styles.title_text} numberOfLines={2}>{film.title}</Text>
      
      <Text style={styles.vote_text}>  vote: {film.vote_average}</Text>
      </View>
      <View style={{flex:2 ,borderWidth:2}}>
      <Text style={styles.discrip_text} numberOfLines={5}>{film.overview}</Text>
      </View>
      <View style={{flex:1,borderWidth:2}}>
      <Text >sorti le: {film.release_date}</Text>
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
  
  title_text: {

    fontWeight: 'bold',

    fontSize: 15,

    flex: 1,

    flexWrap: 'wrap',

    paddingRight: 5
  },
  vote_text: {

    fontWeight: 'bold',

    fontSize: 26,

    color: '#666666'

  },
  discrip_text: {

    fontWeight: 'bold',

    fontSize: 13,

    color: '#666666'

  },
})
export default FilmItems