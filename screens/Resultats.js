import * as React from 'react';
import {Button, View, SafeAreaView, TextInput, Text} from 'react-native';
import {styles} from '../core/styles';
import * as SQLite from 'expo-sqlite';


class Resultats extends React.Component {
    constructor(props){
      super(props);
      this.state={
        numero_question: 1,
          checked: "1",
          score: 0,
          tableau_questions: [
            ["Où a eu lieu le baptême de Clovis ?", "Reims","Bordeaux","Annecy", "Nantes", "Reims"],
            ["Quelle est la couleur du cheval blanc d'Henry IV ?", "Bleu","Rouge","Blanc", "Noir", "Blanc"],
            ["Quelle est le langage utilisé pour ce quiz ?", "PHP","ReactNative","Python", "JAVA", "ReactNative"]
        ]
      }
      
    }
    rejouer() {
        navigate('Quizz')
      }
    render(){
      const {navigate} = this.props.navigation;

      return(
        <SafeAreaView style={styles.container}>
            <View>
            <View>
                <Text style={styles.titre}>Résultats du Quizz</Text>
                <Text>C'est terminé votre score est de : {this.state.score} / 3</Text>
                <Text>Les 5 meilleurs joueurs : </Text>
                <Text></Text>
            </View>
            
            <View style={styles.bouton}>
              <Button
                title="Rejouer"
                color= "royalblue"
                onPress={() => rejouer()}
              />
              </View>
             </View>
          </SafeAreaView>
      )
    }
  
  }
  
  export default Resultats;