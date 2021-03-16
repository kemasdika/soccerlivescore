import React from 'react'
import { View, Button, Text, StyleSheet } from "react-native";
export const DetailScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Detail</Text>
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
