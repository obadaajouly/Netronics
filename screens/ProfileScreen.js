import React from "react";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    display: "flex",
    
  },
  profilePicture: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 60,
    marginBottom:0
  },
  name:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal:20,
    marginVertical: 10,
  },
  profileIcon: {
    width: 40,
    height: 50,
  },
  categoryText:{
    fontSize:18,
  },
  lists:{
    marginTop:50
  }
});

const ProfileScreen = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={require("../assets/profile-screen/Profile.png")}
        />
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.lists}>
        <View style={styles.category}>
          <Image
            style={styles.profileIcon}
            resizeMode="contain"
            source={require("../assets/profile-screen/profile-icon.png")}
          />
          <Text style={styles.categoryText}>Edit Profile</Text>
          <Image
            style={styles.arrowRight}
            source={require("../assets/profile-screen/arrow-right.png")}
          />
        </View>
        <View style={styles.category}>
          <Image
            style={styles.profileIcon}
            resizeMode="contain"
            source={require("../assets/profile-screen/location.png")}
          />
          <Text style={styles.categoryText}>Shopping Address</Text>
          <Image
            style={styles.arrowRight}
            source={require("../assets/profile-screen/arrow-right.png")}
          />
        </View>
        <View style={styles.category}>
          <Image
            style={styles.profileIcon}
            resizeMode="contain"
            source={require("../assets/profile-screen/wishlist.png")}
          />
          <Text style={styles.categoryText}>WishList</Text>
          <Image
            style={styles.arrowRight}
            source={require("../assets/profile-screen/arrow-right.png")}
          />
        </View>
        <View style={styles.category}>
          <Image
            style={styles.profileIcon}
            resizeMode="contain"
            source={require("../assets/profile-screen/notification.png")}
          />
          <Text style={styles.categoryText}>Notification</Text>
          <Image
            style={styles.arrowRight}
            source={require("../assets/profile-screen/arrow-right.png")}
          />
        </View>
        <View style={styles.category}>
          <Image
            style={styles.profileIcon}
            resizeMode="contain"
            source={require("../assets/profile-screen/history.png")}
          />
          <Text style={styles.categoryText}>Order History</Text>
          <Image
            style={styles.arrowRight}
            source={require("../assets/profile-screen/arrow-right.png")}
          />
        </View>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
