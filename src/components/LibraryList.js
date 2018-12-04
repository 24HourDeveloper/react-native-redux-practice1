import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderList = list => {
    return <ListItem showList={list} />;
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.libraries}
        renderItem={this.renderList}
        keyExtractor={libraries => libraries.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
