import * as React from 'react';
import {Button, View, SafeAreaView, Text, Alert} from 'react-native';
import {styles} from '../core/styles';
import { RadioButton } from 'react-native-paper';
import * as SQLite from 'expo-sqlite';


class Quizz extends React.Component {
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
    async tempo() {
      if(this.state.tableau_questions[this.state.numero_question-1][5] === this.state.tableau_questions[this.state.numero_question-1][this.state.checked]){
              this.setState({score: this.state.score + 1}) 
            }
    }
    
    async validation(){
        const {navigate} = this.props.navigation;

        await this.tempo()  
          
        this.setState({checked: "1"})    
        if (this.state.numero_question < this.state.tableau_questions.length){
        this.setState({numero_question: this.state.numero_question + 1})
        } else {
          const db = SQLite.openDatabase("database.db");
          db.transaction(tx => {tx.executeSql("insert into user (score) values (?)", [this.state.score]);});
          //Alert.alert("C'est terminé votre score est de : "+this.state.score+" / 3")
          navigate('Resultats')
        }
   }
    render(){
        
        console.log("bonne-reponse : "+this.state.tableau_questions[this.state.numero_question-1][5])
        console.log("tableau_questions[X][5] : "+this.state.tableau_questions[this.state.numero_question-1][this.state.checked])
        console.log("current checked : "+this.state.checked)

      return(
        <SafeAreaView style={styles.container}>
            <View>
            <Text>Question n° {this.state.numero_question} :  {this.state.tableau_questions[this.state.numero_question-1][0]}</Text>
            <View style={styles.ligne}>
            <RadioButton
                value = "1"
                status={ this.state.checked === '1' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({checked:"1"})}            
            />
            <Text>{this.state.tableau_questions[this.state.numero_question-1][1]}</Text>
            </View>
            <View style={styles.ligne}>
            <RadioButton
                value="2"
                status={ this.state.checked === '2' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({checked:"2"})}
            />
            <Text>{this.state.tableau_questions[this.state.numero_question-1][2]}</Text>
            </View>
            <View style={styles.ligne}>
            <RadioButton
                value="3"
                status={ this.state.checked === '3' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({checked:"3"})}
            />
            <Text>{this.state.tableau_questions[this.state.numero_question-1][3]}</Text>
            </View>
            <View style={styles.ligne}>
            <RadioButton
                value="4"
                status={ this.state.checked === '4' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({checked:"4"})}
            />
            <Text>{this.state.tableau_questions[this.state.numero_question-1][4]}</Text>
            </View>
            <Text>Votre score est de : {this.state.score}</Text>
            <View style={styles.bouton}>
              <Button
                title="Valider"
                color= "royalblue"
                onPress={() => this.validation()}
              />
              </View>
             </View>
          </SafeAreaView>
      )
    }
  
  }
  
  export default Quizz;