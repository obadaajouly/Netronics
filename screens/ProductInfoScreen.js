import React , {useState}from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ProductInfoScreen = () => {

    const [isLiked, setIsLiked] = useState(false); 
  
    const toggleLike = () => {
      setIsLiked(!isLiked); 
    };
    const [os, setOs] = useState(Platform.OS);
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  return (
    <>
      {os === "android" &&(
          <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
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
          <Text style={{ fontSize: 14, fontWeight: 700 }}>Product Details</Text>
          <Pressable onPress={() => navigation.navigate("Cart")} style={{}}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{
              uri: "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
            }}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FF3F3F",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  shadowColor: "#393E46",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              SAMSUNG Galaxy S23 Ultra
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                marginTop: 10,
              }}
            >
              <AntDesign name="star" size={24} color="#EDB900" />
              <Text
                style={{
                  color: "#505050",
                  borderRightColor: "#CFCFCF",
                  borderRightWidth: 1,
                  paddingRight: 10,
                }}
              >
                4.9
              </Text>
              <Text
                style={{
                  color: "#f8c353",
                  fontSize: 10,
                }}
              >
                150 Reviews
              </Text>
            </View>
          </View>
          <Pressable onPress={toggleLike}>
      <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color={isLiked ? 'red' : 'black'} />
    </Pressable>
        </View>
        <Text
          style={{
            color: "#4B4B4B",
            fontSize: 12,
            width: "90%",
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          Samsung Galaxy S23 Ultra Cell Phone, Smartphone, 256GB, 200MP Camera,
          Night Mode, Long Battery Life, S Pen, US Version, 2023, Phantom Black
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
            width: "95%",
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            $549.99
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF0D1",
              width: 100,
              height: 30,
              marginRight: 15,
              borderRadius: 25,
            }}
          >
            <Pressable>
              <AntDesign name="pluscircle" size={29} color="#222629" />
            </Pressable>
            <Text style={{ marginLeft: 17 }}>1</Text>
            <Pressable>
              <AntDesign
                name="minuscircle"
                size={29}
                color="#222629"
                style={{ marginLeft: 16 }}
              />
            </Pressable>
          </View>
        </View>

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
      </ScrollView>
    </>
  );
          
};

export default ProductInfoScreen;
