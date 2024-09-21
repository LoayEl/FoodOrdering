import React from 'react';
import { View} from 'react-native';
import products from '../../../assets/data/products';
import ProductListItem from '../../components/ProductListItem';


import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export default function MenuScreen() {
  return (<View> 
    <ProductListItem product={products[5]}/>
    <ProductListItem product={products[1]}/>
    
  </View>
  );
}
