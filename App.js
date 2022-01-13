import React from "react";
import Homepage from './screens/Homepage';
import Resultats from './screens/Resultats';
import Quizz from './screens/Quizz';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen name="Quizz" component={Quizz}/>
          <Stack.Screen name="Resultats" component={Resultats}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;