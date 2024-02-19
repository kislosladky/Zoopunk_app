
import React, { Component } from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View}
  from 'react-native';
import { SwipeListView } from
    'react-native-swipe-list-view';

class App extends Component {
  constructor() {
    super();

    // Initialize the state with a list of items
    this.state = {
      itemList: [
        { key: '1', description: 'Item 1' },
        { key: '2', description: 'Item 2' },
        { key: '3', description: 'Item 3' },
        { key: '4', description: 'Item 4' },
        { key: '5', description: 'Item 5' },
      ],
    };
  }

  // Function to delete an item from the list
  deleteItem = (rowMap, rowKey) => {
    // this.closeRow(rowMap, rowKey);
    const newData = [...this.state.itemList];
    const prevIndex = this.state.itemList
      .findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    this.setState({ itemList: newData });
  };

  // Function to handle row open event
  onRowOpen = rowKey => {
    console.log('Opened row with key:', rowKey);
  };

  // Function to render each list item
  renderItem = rowData => (
    <TouchableOpacity
      onPress={() => console.log('Item touched')}
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>
        {rowData.item.description}
      </Text>
    </TouchableOpacity>
  );

  // Function to render hidden swipe actions
  renderHiddenItem = (rowData, rowMap) => (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={() => this.deleteItem(rowMap, rowData.item.key)}
      >
        <Text style={styles.buttonText}>Убрать</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <ImageBackground source={require("../../../assets/MainBackground.png")} resizeMode="cover" style={{height: "100%", width: "100%", backgroundColor: "rgba(253,253,241,0.87)"}}>

        <View style={styles.container}>
          {/* Header */}
          <View style ={{backgroundColor: 'white', borderRadius: 20, marginTop: '20%', marginBottom:'10%', elevation: 10}}>
            <Text style={styles.heading}>Хочу посетить</Text>
          </View>


          {/* SwipeListView */}
          <SwipeListView
            data={this.state.itemList}
            renderItem={this.renderItem}
            renderHiddenItem={this.renderHiddenItem}
            rightOpenValue={-80}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={this.onRowOpen}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: `url("")`,
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontFamily: 'monserratBold',
    overflow:'hidden',
    width: '100%'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#404040',
    margin: 20,
    textAlign: 'center',
    fontFamily: 'monserratBold'
  },
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark Gray
    margin: 10,
    textAlign: 'center',

  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF', // White
    borderBottomColor: '#E0E0E0', // Lighter Gray
    borderBottomWidth: 1,
    height: 80,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
    fontFamily: 'monserratBold'
  },
  itemText: {
    color: '#333', // Dark Gray
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monserratBold'
  },
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 80,
    borderRadius: 20,
    fontFamily: 'monserratBold'
  },
  hiddenButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 80,
    fontFamily: 'monserratBold'
  },
  deleteButton: {
    backgroundColor: '#E74C3C', // Red
    borderRadius: 20,
    fontFamily: 'monserratBold',
    marginRight:1
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monserratBold'
  },
});

export default App;
