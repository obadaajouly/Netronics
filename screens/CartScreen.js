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
import { Entypo } from '@expo/vector-icons';
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
              color="black"
              style={{ marginLeft: 210, color: "#F9D410" }}
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
            alignItems: "center",
            marginTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "#E9E9E9",
            borderBottomStyle: "solid",
            paddingBottom: 25,
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
                color="#6F6F6F"
                style={{ marginLeft: 45 }}
              />
            </Pressable>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#95C6FF",
                width: 70,
                marginRight: 15,
                borderRadius: 25,
              }}
            >
              <Pressable>
                <AntDesign name="pluscircle" size={24} color="#0074FC" />
              </Pressable>
              <Text style={{ marginLeft: 7 }}>1</Text>
              <Pressable>
                <AntDesign
                  name="minuscircle"
                  size={24}
                  color="#0074FC"
                  style={{ marginLeft: 7 }}
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
              alignItems: "center",
              marginTop: 25,
              borderBottomWidth: 1,
              borderBottomColor: "#E9E9E9",
              borderBottomStyle: "solid",
              paddingBottom: 25,
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
                  color="#6F6F6F"
                  style={{ marginLeft: 45 }}
                />
              </Pressable>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#95C6FF",
                  width: 70,
                  marginRight: 15,
                  borderRadius: 25,
                }}
              >
                <Pressable>
                  <AntDesign name="pluscircle" size={24} color="#0074FC" />
                </Pressable>
                <Text style={{ marginLeft: 7 }}>1</Text>
                <Pressable>
                  <AntDesign
                    name="minuscircle"
                    size={24}
                    color="#0074FC"
                    style={{ marginLeft: 7 }}
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
                  width: "90%",
                  marginLeft: 15,
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 15 }}>
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
                  width: "90%",
                  marginLeft: 15,
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 15 }}>
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
                  width: "90%",
                  marginLeft: 15,
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 15 }}>
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
                  width: "90%",
                  marginLeft: 15,
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#838383", fontSize: 15 }}>Shipping</Text>
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
                marginTop:25,
                marginLeft:25,
                width:"85%"
              }}
            >
              <Entypo name="price-tag" size={22} color="gray" style={{ marginLeft:15 , marginRight:5}} />
              <TextInput placeholder="Add coupon" />
              <Ionicons name="add-circle-outline" size={24} color="gray" style={{ marginLeft:135 }}/>
            </Pressable>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#0074FC",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
              marginTop:35
              
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#424242",
                fontSize: 16,
                fontWeight: "bold",
                color:"white"
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
