import React, {Component} from 'react';

import AppContainer from './src/navigation/navigator'
import NavigationService from './src/navigation/navigation-service'

export default class App extends Component {
  render() {
    return (
      <AppContainer
        // Le hacemos una referencia y se la mandamos a nuestro NavigationService 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}