import React from 'react'
import { View, Button, Text, StyleSheet } from "react-native";

export const FinishedSreen = () => {
    return (
        <View style={styles.center}>
            <Text>Finished</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
