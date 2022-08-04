// it is the react native core component
import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

//Here we want to display - input where user can input can number
// also a button to confirm that number THESE both button are custom buttons are in use
// also a button to reset that number
// some tittle for instruction

function StartGameScreen() {
  const [enteredNumber, setEnterednumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnterednumber(enteredText);
  }
  function resetInputHandler() {
    setEnterednumber('');
  }

  // input validation here , input should be a number
  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber); //this fun convert the usestate as a number
    // this is pre define funtion = Not a Number isNaN()
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      //show alrt here
      Alert.alert(
        "Invalid number !",
        "Number has to be a number between 1 t 99",
        [{text: 'Okay'  , style:'destructive' , onPress:resetInputHandler}]
      );
      return;
    }
    console.log('Valid Number !')
  }

  return (
    <View style={Styles.inputConatiner}>
      <TextInput
        style={Styles.textInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={Styles.buttonsContainer}>
        <View style={Styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
        </View>
        <View style={Styles.buttonContainer}>
          <PrimaryButton> varify </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const Styles = StyleSheet.create({
  inputConatiner: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "maroon",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 6,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    borderColor: "yellow",
    color: "yellow",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    // height: "10%",
    // width: "30%",
  },
});
