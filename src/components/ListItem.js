import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  NativeModules
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  showDescription = () => {
    if (this.props.showList.item.id === this.props.selectedId) {
      return <Text>{this.props.showList.item.description}</Text>;
    }
  };
  render() {
    const { id } = this.props.showList.item;
    console.log(this.props);
    return (
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <TouchableOpacity onPress={() => this.props.selectedLibrary(id)}>
          <Text style={styles.textStyles}>
            {this.props.showList.item.title}
          </Text>
        </TouchableOpacity>
        {this.showDescription()}
      </View>
    );
  }
}

const styles = {
  textStyles: { fontSize: 20, paddingLeft: 15 }
};

const mapStateToProps = state => {
  return { selectedId: state.selectedLibraryId };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
