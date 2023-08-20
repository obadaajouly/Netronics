import { useState, useEffect,useCallback } from "react";
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
const { list, images, deals, offers,productsList } = require("../List");
import { SliderBox } from "react-native-image-slider-box";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("jewelery");
  const [products, setProducts] = useState(productsList);
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);
  console.log(products)

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);


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
            autoplayInterval={3000}
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <Pressable
              key = {index}
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
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  gap: 15,
                  paddingVertical: 20,
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: 110,
                    resizeMode: "contain",
                    marginTop: 10,
                  }}
                  source={{ uri: item?.image }}
                />

                <View
                  style={{
                    backgroundColor: "#E31837",
                    paddingVertical: 5,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 15,
              width: "45%",
              marginBottom: open ? 50 : 15,
            }}
          >
            <DropDownPicker
              style={{
                borderColor: "#B7B7B7",
                height: 30,
                marginBottom: open ? 120 : 15,
                width:"100%"
              }}
              open={open}
              value={category} //genderValue
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder="choose category"
              placeholderStyle={styles.placeholderStyles}
              onOpen={onGenderOpen}
              // onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {products
              ?.filter((item) => item.category === category)
              .map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
          </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
