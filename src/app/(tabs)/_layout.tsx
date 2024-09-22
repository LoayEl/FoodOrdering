import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabBarIcon } from '@components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
        <Tabs.Screen name="index" options={{href:null}} />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name="cutlery"  color={color} />
            <FontAwesome name="cutlery" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="menu" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
