import React from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
const CartScreen = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <ScrollView style={{ paddingTop: 15, flex: 1, backgroundColor: "white" }}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              width: "90%",
              marginLeft: 15,

              borderBottomWidth: 1,
              borderBottomColor: "#E9E9E9",
              borderBottomStyle: "solid",
              paddingBottom: 15,
            }}
          >
            <AntDesign name="left" size={12} color="black" />
            <Text style={{ fontWeight: 700 }}>MY CART</Text>
            <Ionicons
              name="ios-notifications-sharp"
              size={20}
              color="#f8c353"
              style={{ marginLeft: 210}}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              marginLeft: 15,
              marginTop: 25,
            }}
          >
            <Text style={{ color: "#8B8B8B" }}>2 items in your cart</Text>
            <Text style={{ color: "#006AE6" }}>+ Add more</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "#E9E9E9",
            borderBottomStyle: "solid",
            paddingBottom: 25,
            paddingTop:25,
            backgroundColor:"#FFFFFF",
            shadowColor: "#393E46",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
            borderRadius:25,
            width:"95%",
            marginLeft:8
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 25,
            }}
          >
            <View>
              <Image
                style={{
                  width: 55,
                  height: 50,
                  resizeMode: "contain",
                  marginLeft: 15,
                }}
                source={{
                  uri: "https://m.media-amazon.com/images/I/41sN+-1hRsL._AC_UF894,1000_QL80_.jpg",
                }}
              ></Image>
            </View>
            <View>
              <Text style={{ fontWeight: 600 }}>Playstation</Text>
              <Text style={{ color: "#8B8B8B", marginTop: 10, fontSize: 12 }}>
                $450
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Pressable>
              <MaterialIcons
                name="delete-outline"
                size={24}
                color="black"
                style={{ marginLeft: 65 }}
              />
            </Pressable>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFF0D1",
                width: 90,
                height: 25,
                marginRight: 10,
                borderRadius: 25,
              }}
            >
              <Pressable>
                <AntDesign name="pluscircle" size={25} color="#222629" />
              </Pressable>
              <Text style={{ marginLeft: 16 }}>1</Text>
              <Pressable>
                <AntDesign
                  name="minuscircle"
                  size={25}
                  color="#222629"
                  style={{ marginLeft: 15 }}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
              borderBottomWidth: 1,
              borderBottomColor: "#E9E9E9",
              borderBottomStyle: "solid",
              paddingBottom: 25,
              paddingTop:25,
              backgroundColor:"#FFFFFF",
              shadowColor: "#393E46",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
              borderRadius:25,
              width:"95%",
              marginLeft:8
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 25,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 55,
                    height: 50,
                    resizeMode: "contain",
                    marginLeft: 15,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/41sN+-1hRsL._AC_UF894,1000_QL80_.jpg",
                  }}
                ></Image>
              </View>
              <View>
                <Text style={{ fontWeight: 600 }}>Playstation</Text>
                <Text style={{ color: "#8B8B8B", marginTop: 10, fontSize: 12 }}>
                  $450
                </Text>
              </View>
            </View>
            <View style={{ display: "flex", gap: 11 }}>
              <Pressable>
                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color="black"
                  style={{ marginLeft: 65 }}
                />
              </Pressable>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF0D1",
                  width: 90,
                  height: 25,
                  marginRight: 10,
                  borderRadius: 25,
                }}
              >
                <Pressable>
                  <AntDesign name="pluscircle" size={25} color="#222629" />
                </Pressable>
                <Text style={{ marginLeft: 16 }}>1</Text>
                <Pressable>
                  <AntDesign
                    name="minuscircle"
                    size={25}
                    color="#222629"
                    style={{ marginLeft: 15 }}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 18 }}>
              Payment summery
            </Text>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "92%",
                  marginLeft: 15,
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 14 }}>
                  Order Total
                </Text>
                <Text>$ 450</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "92%",
                  marginLeft: 15,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 14 }}>
                  Items Discount
                </Text>
                <Text>$ 21</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "92%",
                  marginLeft: 15,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 14 }}>
                  Coupon Discount
                </Text>
                <Text>$ 75</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "92%",
                  marginLeft: 15,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 14 }}>Shipping</Text>
                <Text>Free</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 5,
              borderColor: "#D8D9DA",
              borderWidth: 1,
              borderStyle: "solid",
              height: 38,
              flex: 1,
              marginTop: 25,
              marginLeft: 15,
              width: "92%",
            }}
          >
            <Entypo
              name="price-tag"
              size={22}
              color="gray"
              style={{ marginLeft: 15, marginRight: 5 }}
            />
            <TextInput placeholder="Add coupon" />
            <Ionicons
              name="add-circle-outline"
              size={24}
              color="gray"
              style={{ marginLeft: 160 }}
            />
          </Pressable>
          <Pressable
          style={{
            width: 220,
            backgroundColor: "#f8c353",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10,
            marginTop: 35,
            marginBottom: 35,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#222629",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Checkout
          </Text>
        </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default CartScreen;
