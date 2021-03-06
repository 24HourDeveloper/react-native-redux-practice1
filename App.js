import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import LibraryList from "./src/components/LibraryList";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
