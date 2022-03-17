import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, Button, TouchableWithoutFeedback } from 'react-native';
import {Calendar} from 'react-native-calendars';

const App = () =>  {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState)

  return (
    <View style={styles.container}>
      <Text>Hello. This is the first calendar able to customize days</Text>
      <Button onPress={toggleModal} title={'Open/Close'} />
      <Modal
        visible={showModal}
        animationType='fade'>
          <View 
            style={styles.modal}>
            <TouchableWithoutFeedback onPress={toggleModal} >
              <View style={styles.backdrop}></View>
            </TouchableWithoutFeedback>
            <View style={styles.innerModal}>
                <Calendar
                markedDates={{
                  '2022-03-15': { marked: true, dotColor: 'yellow'},
                  '2022-03-16': { marked: true, dotColor: 'blue'},
                  '2022-03-17': {marked: true, dotColor: 'green'},
                  '2022-03-18': {marked: true, dotColor: 'red', activeOpacity: 0.2},
                }}
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                onDayLongPress={day => {
                  console.log('selected day', day.day);
                }}
                enableSwipeMonths={true}
              />
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  backdrop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },

  modal: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerModal: {
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'white'
  }
});

export default App;