
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as viewControlActions from '../actions/viewControlActions';

class NavBar extends Component {
  render() {
    const { currentView, viewActions } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=> viewActions.setView("HOME")}underlayColor="orange">
          <Text style={styles.navOption}>
          Home
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=> viewActions.setView("CAPTURE")}underlayColor="orange">
          <Text style={styles.navOption}>
          Capture
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=> viewActions.setView("LIBRARY")}underlayColor="orange">
          <Text style={styles.navOption}>
          Library
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  navOption: {
    fontSize: 20,
    color: 'red',
    marginTop: 10
  },
});

export default connect(state => ({
  currentView: state.viewControl.currentView
}),
(dispatch) => ({
  viewActions: bindActionCreators(viewControlActions, dispatch )
}))(NavBar);
