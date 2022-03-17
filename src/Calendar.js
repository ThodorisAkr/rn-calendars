import React, { useState } from 'react';
import {
View, Text,
StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';


const Calendar = (props) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null)


const onDateChange = (date) => {
    setSelectedStartDate(date);
}


const startDate = selectedStartDate ? selectedStartDate.toString() : null;

return (
    <View style={styles.container}>
        <CalendarStrip isEnglish showWeekNumber showEnglishLunar
            selectedDate={this.state.selectedDate} onPressDate={(date) => { this.setState({ selectedDate: date });
            }}
            onPressGoToday={(today) => { this.setState({ selectedDate: today });
            }}
            onSwipeDown={() => { alert('onSwipeDown');
            }}
            markedDate={['2020-03-04', '2020-03-15', '2020-03-04', '2020-03-01']}
            weekStartsOn={1}
        />
    </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#b3fff3', marginTop: 100,
    }
});

export default Calendar;