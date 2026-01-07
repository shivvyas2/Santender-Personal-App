import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#EC0000',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 4,
          textTransform: 'uppercase',
          letterSpacing: 0.3,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <IconSymbol size={22} name="banknote" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Our Products',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <IconSymbol size={22} name="building.columns" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerButton}>
              <View style={styles.centerButtonInner}>
                <IconSymbol size={24} name="arrow.left.arrow.right" color="#666666" />
                <Text style={styles.dollarSign}>$</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          title: 'Locations',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <IconSymbol size={22} name="location" color={focused ? '#EC0000' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <IconSymbol size={22} name="message" color={focused ? '#EC0000' : color} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>5</Text>
              </View>
            </View>
          ),
        }}
      />
      {/* Hidden screens that can be accessed via navigation */}
      <Tabs.Screen
        name="credit-journey"
        options={{
          href: null, // Hidden from tab bar
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          href: null, // Hidden from tab bar
        }}
      />
      <Tabs.Screen
        name="pay-transfer"
        options={{
          href: null, // Hidden from tab bar
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  activeIconContainer: {
    borderTopWidth: 2,
    borderTopColor: '#EC0000',
    marginTop: -2,
    paddingTop: 6,
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  centerButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  dollarSign: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: '700',
    color: '#666666',
    bottom: 8,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -10,
    backgroundColor: '#EC0000',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
});
