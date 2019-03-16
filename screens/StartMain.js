import{Navigation} from 'react-native-navigation';
const startMain=()=>{
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'awesome-places.MenuList',
                    passProps: {
                      text: 'Menu'
                    }
                  }
                }],
               
              }
            },
            {
              component: {
                name: 'awesome-places.Profil',
                passProps: {
                  text: 'This is tab 2'
                },
                
              }
            }]
          }
        }
      });
};
export default startMain;