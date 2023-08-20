import { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { Feather,Ionicons,MaterialIcons,Entypo,AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
const { list, images, deals, offers } = require("../List");
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = () => {
  console.log(images);
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <ScrollView>
        <View
          style={{
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 7,
                gap: 10,
                backgroundColor: "white",
                borderRadius: 10,
                borderColor: "#D8D9DA",
                borderWidth: 1,
                borderStyle: "solid",
                height: 38,
                flex: 1,
                marginTop: 10,
              }}
            >
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="#393E46"
              />
              <TextInput placeholder="Search netronics" />
            </Pressable>

            <Feather
              name="mic"
              size={24}
              color="#393E46"
              style={{ marginTop: 25 }}
            />
          </View>
          <SliderBox
            images={images}
            autoplay={true}
            circleLoop={true}
            autoplayInterval={1000}
            dotColor={"red"}
            ImageComponentStyle={{
              width: "96%",
              borderRadius: 15,
              marginTop: 10,
            }}
            dotStyle={{
              height: 2,
            }}
          />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 15,
                }}
              >
                <Image
                  style={{ width: 55, height: 50, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "500",
                    marginTop: 5,
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <Text
            style={{
              padding: 10,
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Top seller
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: "white",
            }}
          >
            {deals.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate("Info", {
                    id: item.id,
                    title: item.title,
                    price: item?.price,
                    carouselImages: item.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item,
                  })
                }
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginLeft: 35,
                  width: "35%",
                  height: "40%",
                  borderRadius: 10,
                  shadowColor: "#393E46",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  marginTop: 20,
                }}
              >
                <Image
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                />
                <Image
                  source={{ uri: item?.img }}
                  style={{
                    width: 100,
                    height: 100,
                    position: "absolute",
                    zIndex: 5,
                    top: "-1%",
                    left: "-0.5%",
                  }}
                ></Image>
              </Pressable>
            ))}
          </View>
          <Text
            style={{
              padding: 10,
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Trending deals
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
