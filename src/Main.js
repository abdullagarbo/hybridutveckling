import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

class Main extends Component {
  render() {
    return (
      <View flex={1}>
        <View style={styles.top}>
          <Text style={styles.title}>Hello world!</Text>
          <Text style={styles.subTitle}>First React Native app</Text>
          <Text style={styles.text}>
            This is a paragraph explaining what this app is all about. As you can see there are already many components
            including text, images and buttons.
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.secondTitle}>What whould you like to get out of this course?</Text>
          <TextInput placeholder="initial text" numberOfLines={7} style={styles.input} />
          <Text style={styles.secondTitle}>Add an emoji describing how you are feeling about the course:</Text>
          <Image style={styles.image} source={require("../assets/icon.png")} />
          <Button title="Submit" />
        </View>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: "#b6cee2",
    justifyContent: "center",
    paddingBottom: 12,
  },
  bottom: {
    flex: 4,
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "normal",
  },
  text: {
    fontSize: 16,
  },
  secondTitle: {
    fontSize: 25,
    fontWeight: "bold",
    width: "70%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: "75%",
    textAlignVertical: "top",
  },
  image: {
    width: 100,
    height: 100,
  },
});
