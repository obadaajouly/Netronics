import React from "react";
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

const ProfileScreen = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      {/* profile picture and name */}
      <View>
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 15,
          }}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          John Doe
        </Text>
        <Pressable
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
        </Pressable>
        {/*End of profile picture and name section*/}
        {/* Orders Section */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
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
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }}
                source={{
                  uri: "https://www.stockmustgo.co.uk/cdn/shop/products/Samsung-S20-FE-Red-1-800x800.png?v=1686156320",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
                }}
              />
            </Pressable>
          </ScrollView>
        </View>
        {/* End of Orders Section */}
        {/* WishList Section */}
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 50,
              marginLeft: 20,
            }}
          >
            My WishList <AntDesign name="hearto" size={20} color="black" />
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 120, height: 150, resizeMode: "contain" }}
                source={{
                  uri: "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/versa-4/hero-static/black/versa4-black-device-3qtr.png",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-black.png",
                }}
              />
            </Pressable>
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                marginLeft: 35,
                width: 25,
                height: 25,
                borderRadius: 10,
                shadowColor: "#393E46",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
                padding: 70,
                marginTop: 30,
              }}
            >
              <Image
                style={{ width: 100, height: 110, resizeMode: "contain" }}
                source={{
                  uri: "https://cdn1.smartprix.com/rx-iB0511vCS-w1200-h1200/B0511vCS.jpg",
                }}
              />
            </Pressable>

            {/* End Of WishList Section */}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
