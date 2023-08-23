import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const ProfileScreen = () => {
  const [os, setOs] = useState(Platform.OS);
  return (
    <>
      {os === "android" && (
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      )}
      {os === "ios" && <View style={{ marginTop: 50 }}></View>}

      {/* profile picture and name */}
      <ScrollView>
      <View>
        <View
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "60px",
            position: "relative",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingTop: 120,
          }}
        >
          <Ionicons
            name="exit-outline"
            size={24}
            color="white"
            style={{ marginLeft: 320, marginTop: 15, position: "absolute" }}
          />

          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 35,
              position: "absolute",
              left: 135,
              top: 30,
            }}
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 60,
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "thin",
            textAlign: "center",
            marginTop: 3,
          }}
        >
          @John_Doe
        </Text>
        <Text
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            width: "85%",
            marginLeft: 25,
          }}
        ></Text>
        {/* <Pressable
          style={{
            width: 100,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Text>
        </Pressable> */}
        {/*End of profile picture and name section*/}
        {/* Orders Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <Text style={{ fontWeight: 500 }}>No.Orders</Text>
          <Text style={{ fontWeight: 500 }}>Last order</Text>
          <Text style={{ fontWeight: 500 }}>Recent Order</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 8,
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 10 }}>12</Text>
          <Text style={{ fontSize: 10, marginLeft: 15 }}>Deliverd</Text>
          <Text style={{ fontSize: 10 }}>on process</Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginTop: 40,
            marginLeft: 20,
          }}
        >
          My Orders
        </Text>
        <View style={{ flexDirection: "row" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/519KZO0oXaL._AC_.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Samsung Galaxy"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"1299"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.9"}
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/916acEhBkcL._AC_SL1500_.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Apple Watch Ultra"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"900"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.5"}
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6a-0.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Pixel 6a"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"300"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.1"}
                  </Text>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/817HZoT0brL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"CL750 Wired"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"32"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.4"}
                  </Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        {/* End of Orders Section */}
        {/* WishList Section */}
        <View >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginTop: 40,
              marginLeft: 20,
            }}
          >
            
            My WishList <AntDesign name="heart" size={14} color="red" />
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71CxZ653JNL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Wireless Earbuds"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"18"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.8"}
                  </Text>
                </View>
              </View>
            </Pressable>
             <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/71s9NDno3FL._AC_SX679_.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Anker Portable Charger"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"24.3"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.9"}
                  </Text>
                </View>
              </View>
            </Pressable>
             <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"iPhone 14 Pro Max"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"1000"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.7"}
                  </Text>
                </View>
              </View>
            </Pressable>
             <Pressable
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                  source={{
                    uri: "https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-mini-4-0.jpg",
                  }}
                />

                <Text numberOfLines={1} style={{ width: 130, marginTop: 10 }}>
                  {"Apple iPad mini 4"}
                </Text>

                <View
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {"300"} JD
                  </Text>
                  <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                    {"4.4"}
                  </Text>
                </View>
              </View>
            </Pressable>

            {/* End Of WishList Section */}
          </ScrollView>
        </View>
      </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
