import Beers from './views/Beers';
import Beer from './views/Beer';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Beers},
  Beer: {screen: Beer},
});

const App = createAppContainer(MainNavigator);

export default App;