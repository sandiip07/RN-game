import { View, Text, Pressable, StyleSheet } from "react-native";

//we can use any name on place of onpress here it is totally up to you
function PrimaryButton({ children , onPress}) {
  function pressHandler(){
    onPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        
        android_ripple={{ color: "black" }}
        
      >
        {/*this property has onPress() function as props*/}

        <Text style={styles.buttonText}>{children}</Text>
        {/*we alos can pass props.children Here*/}
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "red",
    paddingVertical:8,
    paddingHorizontal: 25,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 1,
  },
});
