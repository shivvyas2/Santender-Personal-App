import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#EC0000',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 20,
          paddingTop: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <IconSymbol size={24} name="creditcard" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="pay-transfer"
        options={{
          title: 'Pay & transfer',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <IconSymbol size={24} name="dollarsign.circle" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="credit-journey"
        options={{
          title: 'Credit Journey',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <IconSymbol size={24} name="chart.bar" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <IconSymbol size={24} name="line.3.horizontal" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

