import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Navigation instance for navigating between screens
  const navigation = useNavigation();

  // Function to handle registration
  const handleRegister = () => {
    navigation.navigate("Home"); // Navigate to the "Home" screen
  };

  return (
    <>
      {/* Set status bar style */}
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      {/* Main content */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{marginBottom:40}}>
          <Image
            style={{ width: 250, height: 100 }}
            source={require('../assets/logo/logo-no-background.png')}
          />
        </View>

        {/* Form for registration */}
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            {/* Title */}
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "#041E42",
              }}
            >
              Register to your Account
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            {/* Input field for name */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Ionicons
                name="ios-person"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: name ? 16 : 16,
                }}
                placeholder="enter your name"
              />
            </View>

            {/* Input field for email */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />

              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="enter your Email"
              />
            </View>
          </View>

          {/* Input field for password */}
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />

              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 16 : 16,
                }}
                placeholder="enter your Password"
              />
            </View>
          </View>

          {/* Register button */}
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></View>

          <View style={{ marginTop: 80 }} />

          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#FEBE10",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
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
              Register
            </Text>
          </Pressable>

          {/* Link to Sign In */}
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default RegisterScreen;
