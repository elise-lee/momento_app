import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input'

export default class LinksScreen extends React.Component {

  render() { return (
    <ScrollView style={styles.container}>
        <CustomCard
          img="https://s.hdnux.com/photos/51/23/24/10827008/3/920x920.jpg"
          name="Will Smith"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/44/37/5916641/3/900x900.jpg"
          name="Joe Joseph"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/61/12/5968559/3/900x900.jpg"
          name="Bill Gates"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/00/02/5767305/25/900x900.jpg"
          name="Kobe"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/51/23/24/10827008/3/920x920.jpg"
          name="Will Smith"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/44/37/5916641/3/900x900.jpg"
          name="Joe Joseph"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/61/12/5968559/3/900x900.jpg"
          name="Bill Gates"
        />
        <CustomCard
          img="https://s.hdnux.com/photos/26/00/02/5767305/25/900x900.jpg"
          name="Kobe"
        />
    </ScrollView>
    );
  }
}

class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
    }
  }

  sendInput = name => {
    // Not yet implemented, send name and card ID to database
    this.showDialog(false)
  }

  openDialog = () => {
    this.setState({isDialogVisible: true});
  }

  showDialog = (isShown) => {
    this.setState({isDialogVisible: isShown});
  }

  render() {
    return (
      <View style={styles.card}>
        <Image 
          source={{uri: this.props.img}} 
          style={styles.cardImage}/>
        <Text
          style={styles.cardText}
          >
          {this.props.name}
        </Text>
        <Ionicons
          name='ios-create'
          size={30}
          style={styles.cardIcon}
          onPress={this.openDialog}
        />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"Edit Name"}
           hintInput ={""}
           dialogStyle={styles.popup}
           modalStyle={styles.popupBackground}
           submitInput={ (inputText) => {this.sendInput(inputText)} }
           closeDialog={ () => {this.showDialog(false)}}>
        </DialogInput>
      </View>
    )
  }
}

LinksScreen.navigationOptions = {
  title: 'Previous Names',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#fafafa',
    margin: 2,
    
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin: 10,
  },
  cardText: {
    fontSize: 15,
    paddingLeft: 15,
    color: '#242424',
  },
  cardIcon: {
    color: '#cccccc',
    position: 'absolute',
    right: 15,
  },
  popup: {
    marginBottom: 150,
  },

  popupBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)'
  },
});
