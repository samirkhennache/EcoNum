import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import SelectList from "../components/SelectList";
import Product from "../components/Product";
const category = "smartphone";
const mark = "Apple";
const model = "Iphone X";
import Comparatif from "../components/Comparatif";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default class LinksScreen extends React.Component {
  state = {
    category: "",
    mark: "",
    model: "",
    isDisplayCompare: false
  };

  getCriteria = (category, mark, model) => {
    // console.log("getCriteria", category, mark, model);
    this.setState({
      category,
      mark,
      model
    });
  };

  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../img/LogoEcoNum.png")}
        style={{ width: 156, height: 51, marginBottom: 15 }}
      />
    )
  };

  handlePressCompare = () => {
    this.setState({ isDisplayCompare: true });
  };

  handlePress = () => {
    console.log("ok");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={require("../img/phoneImage.jpg")}
          style={{
            width: 418,
            height: 288,
            marginTop: -20
          }}
        />
        <Text style={styles.titleCompare}> Je compare mon appareil </Text>
        <SelectList getCriteria={this.getCriteria} />
        <View style={styles.homeButton}>
          <View style={styles.button}>
            {/* <Button
              onPress={this.handlePressCompare}
              title="Comparer avec un 2ème produit"
            /> */}
            <AwesomeButton
              onPress={this.handlePressCompare}
              backgroundColor="#75a579"
              width={150}
            >
              Comparer avec un 2ème produit
            </AwesomeButton>
          </View>
          <View style={styles.button}>
            {/* <Button
              onPress={this.handlePress}
              title="Trouver une alternative"
            /> */}
            <AwesomeButton
              onPress={this.handlePress}
              backgroundColor="#75a579"
              width={150}
            >
              Trouver une alternative
            </AwesomeButton>
          </View>
        </View>
        {this.state.isDisplayCompare && (
          <Comparatif
            category={this.state.category}
            mark={this.state.mark}
            model={this.state.model}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  titleCompare: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  homeButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  button: {
    width: "40%",
    marginLeft: 2,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  }
});

// Hello Prudence
