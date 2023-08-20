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
import { SliderBox } from "react-native-image-slider-box";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
    </>
  );
};

export default HomeScreen;
