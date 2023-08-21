import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  barColor,
  Image,
  StatusBar,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import ProductCard from "../components/ProductCard";
import { useNavigation, useRoute } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryTitle } = route.params;
  const [os, setOs] = useState(Platform.OS);
  return (
    <>
      {os === "android" &&(
          <StatusBar barStyle={"dark-content"} backgroundColor={barColor} />
        )}
      {os === "ios"&& (<View style={{ marginTop: 50 }}></View>)}

      <ScrollView style={{ paddingTop: 15, flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "92%",
            marginLeft: 15,
          }}
        >
          <AntDesign name="left" size={12} color="black" />
          <Text style={{ fontSize: 14, fontWeight: 700 }}>
          {categoryTitle} Category
          </Text>
          <Pressable onPress={() => navigation.navigate("Cart")} style={{}}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              color: "black",
              width: "60%",
              fontWeight: "700",
              fontSize: 18,
              marginTop: 30,
              marginLeft: 15,
              fontFamily: "Righteous",
            }}
          >
            Discover our hight quality products
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              width: "96%",
            }}
          >
            <Pressable
              style={{
                width: 100,
                backgroundColor: "#f8c353",
                borderRadius: 15,
                marginLeft: 15,
                padding: 8,
                marginBottom: 35,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#222629",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Top rated
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 100,
                backgroundColor: "#f6f6f6",
                borderRadius: 15,
                marginLeft: 15,

                padding: 8,
                marginBottom: 35,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#222629",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                {" "}
                New
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 100,
                backgroundColor: "#f6f6f6",
                borderRadius: 15,
                marginLeft: 15,

                padding: 8,
                marginBottom: 35,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#222629",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Popular
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width:"90%",
            gap:2,
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:15


          }}
        >
          <View
            style={{
              width: 150,
              height: 170,
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 8,
              marginBottom: 35,
              shadowColor: "#393E46",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
              borderRadius:25,
            }}
          ></View>
          <View
            style={{
              width: 150,
              height: 170,
              backgroundColor: "#fff",
              borderRadius: 15,

              padding: 8,
              marginBottom: 35,
              shadowColor: "#393E46",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
              borderRadius:25,
            }}
          ></View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryScreen;
