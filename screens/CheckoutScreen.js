import React, { useState } from "react";
import { Text, StatusBar, View } from "react-native";

const CheckoutScreen = () => {
  const steps = [
    { title: "Address", content: "Address" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View>
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              justifyContent: "space-between",
            }}
          >
            {steps?.map((step, index) => (
              <View style={{justifyContent:"center",alignItems:"center"}}>
                {index > 0 && (
                  <View
                    style={[
                      { flex: 1, height: 2, backgroundColor: "green" },
                      index <= currentStep && { backgroundColor: "green" },
                    ]}
                  />
                )}
                <View
                  style={[
                    {
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#ccc",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    index < currentStep && { backgroundColor: "green" },
                  ]}
                >
                  {index < currentStep ? (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      &#10003
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      1
                    </Text>
                  )}
                </View>
                <Text style={{ textAlign: "center", marginTop: 8 }}>
                  {step.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {currentStep == 0 && (
        <View style={{marginHorizontal:20}}>
          <Text style={{fontSize:16,fontWeight:"bold"}}>Select Delivery Address</Text>
        </View>
      ) }
    </>
  );
};

export default CheckoutScreen;
