import * as React from 'react';
import {Button, View, SafeAreaView, TextInput, Text} from 'react-native';
import {styles} from '../core/styles';
import * as SQLite from 'expo-sqlite';


class Homepage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        pseudo:""
      }
      
    }
    validation_pseudo(){
      const db = SQLite.openDatabase("database.db");
      db.transaction(tx => {tx.executeSql("create table if not exists user (id integer primary key not null, pseudo text, score integer);");});
      this.props.navigation.navigate('Quizz', {pseudo: this.state.pseudo})//,{nom: this.state.nom, email: this.state.email}
    }

    render(){
      const {navigate} = this.props.navigation;

      return(
        <SafeAreaView style={styles.container}>
            <View>
            <View>
                <Text style={styles.titre}>Entrez votre pseudo pour commencer le Quizz</Text>
            </View>
            <TextInput
                    label="Pseudo"
                    returnKeyType="done"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.pseudo}
                    onChangeText={text => this.setState({pseudo: text})}
                    autoCapitalize="none"
                    placeholder="Pseudo"
                    />
            <View style={styles.bouton}>
              <Button
                title="Jouer"
                color= "royalblue"
                onPress={() => this.validation_pseudo()}              />
              </View>
             </View>
          </SafeAreaView>
      )
    }
  
  }
  
  export default Homepage;