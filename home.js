import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

// homeScreen component
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>0</Text>
        <Button title="Next" onPress={()=>{
          navigate('NumberView', {a:0,b:1})
        }} />
      </View>);
  }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "silver",
      flex: 1
    },
    heading: {
      fontSize: 100
    }
});
// export HomeScreen
export default HomeScreen;
