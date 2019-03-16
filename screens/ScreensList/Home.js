import React from 'react';
import { View,StatusBar,Button,Text} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profil', {name: 'Jane'})}
        />
        </View>
      );
    }
  }
  export default HomeScreen;