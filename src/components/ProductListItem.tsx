import React from 'react';
import { Image,Text,View, StyleSheet, Platform } from 'react-native';
import {Colors} from '../constants/Colors';
import products from '../../assets/data/products';
import{Product} from '../types'

export const defaultPizzaImage=
'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps={
    product: Product;
}

const ProductListItem=({product}: ProductListItemProps)=>{
  return(
    <View style={styles.container}>
<Image source={{ uri: product.image|| defaultPizzaImage}}  style={styles.image}/>

          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
    </View>

  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
  },
  title:{
    fontSize:18, 
    fontWeight: '600',
    marginVertical:10,

  },
  price:{
    color:Colors.light.tint,
    fontWeight:'bold'
  },
  image:{
    width: '100%',
    aspectRatio:1,

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
