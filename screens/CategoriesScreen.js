import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image ,  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const cards = [
  { title: 'Laptops', copy: 'Laptops', button: 'View Product ', imageId: '1517021897933-0e0319cfbc28' },
  { title: 'Mobiles', copy: 'Mobiles', button: 'View Product', imageId: '1533903345306-15d1c30952de' },
  { title: 'Earbuds', copy: 'Earbuds', button: 'View Product ', imageId: '1545243424-0ce743321e11' },
  { title: 'Smart Watches', copy: 'Smart Watches', button: 'View Product', imageId: '1531306728370-e2ebd9d7bb99' }
];

const Card = ({ title, copy, button, imageId }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate(title);
  };
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: `https://images.unsplash.com/photo-${imageId}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ` }}
        style={styles.cardBackground}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.copy}>{copy}</Text>
        <TouchableOpacity style={styles.button} onPress={handleCardPress}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen = ({ image, header, content }) => {
  return (
<>
<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

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
      flex: 1,
    
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      
      padding: 20,
    },
    card: {
      width: '48%',
      height:'32%',
      marginBottom: 20,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3,
      backgroundColor: 'whitesmoke',
    },
    cardBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '110%',
    },
    content: {
      padding: 16,
      zIndex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 1.2,
      color: 'whitesmoke',
    },
    copy: {
      fontFamily: 'Cardo',
      fontSize: 20,
      fontStyle: 'italic',
      lineHeight: 20,
      color: 'whitesmoke',
      alignSelf:'center',
      fontWeight: 'bold',
      marginTop: 80,
      
    },
    button: {
      marginTop: 100,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: 'black',
      borderRadius: 4,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: 'white',
    },
  });
export default CategoriesScreen
