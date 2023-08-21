import {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const cards = [
  {
    title: "Mobiles",
    copy: "Mobiles",
    button: "View Product ",
    imageId: "https://english.onlinekhabar.com/wp-content/uploads/2021/09/A03s-e1631442371496-300x165.jpg",
  },
  {
    title: "Laptops",
    copy: "Laptops",
    button: "View Product",
    imageId: "https://www.zdnet.com/a/img/resize/bd45ee12d626e1a79d05e6c8abbc4a263d125cc3/2022/02/25/c9d0c484-4a1d-48aa-97ca-534adb533d09/huawei-matebook-x-pro-mwc.jpg?auto=webp&width=1280",
  },
  {
    title: "Headsets",
    copy: "Headsets",
    button: "View Product ",
    imageId: "https://consumer.huawei.com/content/dam/huawei-cbg-site/weu/be/mkt/pdp/audio/freebuds-studio/audio.jpeg",
  },
  {
    title: "Smart Watches",
    copy: "Smart Watches",
    button: "View Product",
    imageId: "https://consumer.huawei.com/content/dam/huawei-cbg-site/weu/common/mkt/plp/wearables/watch-fit2.jpg",
  },
];

const Card = ({ title, copy, button, imageId }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate(title);
  };
  return (
    
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Image
        source={{
          uri: `${imageId}`,
        }}
        style={styles.cardBackground}
      />
       <View style={styles.overlay} />
      <View >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.copy}>{copy}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen = ({ image, header, content }) => {
  const [os, setOs] = useState(Platform.OS);
  return (
    <>
      {os === "android" && (
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      )}
      {os === "ios" && <View style={{ marginTop: 50 }}></View>}

      <View style={styles.pageContent}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pageContent: {
  


    padding: 10,
  },
  card: {
    width: "100%",
    height: "22%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "whitesmoke",
  },
  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "110%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.3, 
  },
  content: {
    padding: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 1.2,
    color: "#f8c353",
  },
  copy: {
    fontFamily: "Cardo",
    fontSize: 20,
    fontStyle: "italic",
    lineHeight: 20,
    color: "whitesmoke",
    alignSelf: "center",

    fontWeight: "bold",
    marginTop: 80,
  },
  
});
export default CategoriesScreen;
