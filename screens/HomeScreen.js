import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import DialogInput from 'react-native-dialog-input'
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more new faces right now</Text>
      </View>
    )
  }
}

const cards = [
  {name: '1', image: 'https://s.hdnux.com/photos/51/23/24/10827008/3/920x920.jpg'},
  {name: '2', image: 'https://s.hdnux.com/photos/26/44/37/5916641/3/900x900.jpg'},
  {name: '3', image: 'https://s.hdnux.com/photos/26/61/12/5968559/3/900x900.jpg'},
  {name: '4', image: 'https://s.hdnux.com/photos/26/00/02/5767305/25/900x900.jpg'},
]

const cards2 = []

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false,
      isDialogVisible: false
    }
  }

  handleYup = card => {
    console.log("yup")
    this.setState({isDialogVisible: true});
  }

  handleNope = card => {
    console.log("nope")
  }

  // Not currently used -- useful if we want to have a "backup" deck of cards
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  sendInput = name => {
    // Not yet implemented, send name and card ID to database
    this.showDialog(false)
  }

  showDialog = (isShown) => {
    this.setState({isDialogVisible: isShown});
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          showYup={false}
          showNope={false}
          showMaybe={false}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Great!"}
            message={"Please enter their name."}
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

HomeScreen.navigationOptions = {
  title: 'New Faces',
};

const styles = StyleSheet.create({
  popup: {
    marginBottom: 150,
  },

  popupBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)'
  },

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  card: {
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 450,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})