import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppLoading from "expo-app-loading";
import COLORS from "../colors";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
export default function App({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { produce } = route.params;
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.topback }}>
      <View
        style={{ flex: 1.1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={{ width: 300, height: 220 }}>
          <Image
            style={{ height: 220, width: 300, resizeMode: "cover" }}
            source={{ uri: produce.url }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 30,
        }}
      >
        <View style={{ flex: 0.5 }}>
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: 40,
              fontWeight: "600",
            }}
          >
            {produce.name}
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: "row",
            paddingTop: 10,
            alignItems: "baseline",
          }}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={require("./assets/location.png")}
          />
          <Text style={{ marginLeft: 10, marginRight: 40 }}>Mexico</Text>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("./assets/fire.png")}
          />
          <Text style={{ marginLeft: 10 }}>100 Kcal</Text>
        </View>
        <View style={{ flex: 2.5 }}>
          <Text style={{ fontSize: 25, fontWeight: "500" }}>About</Text>
          <Text style={{ fontSize: 15, fontWeight: "300", paddingTop: 10 }}>
            {produce.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const designsheet = { backgroundColor: "white" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
