import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
          raised
          title="Onwards!"
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
        <Text>some slides</Text>
      </ScrollView>
    );
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
  slideStyle: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
  },
};

export default Slides;
