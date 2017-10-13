import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

// homeScreen component
class NumberView extends Component {
  static navigationOptions = {
    title: 'NumberView',
  };
  render() {
    const { a, b } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{a+b}</Text>
        <Button title="Next" onPress={()=>{
          navigate('NumberView', {a:b,b:a+b})
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
export default NumberView;
