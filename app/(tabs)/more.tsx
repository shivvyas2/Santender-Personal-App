import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <IconSymbol name="person" size={48} color="#EC0000" />
            </View>
            <TouchableOpacity style={styles.cameraButton}>
              <IconSymbol name="camera.fill" size={14} color="#666666" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Sean Kuesia</Text>
        </View>

        {/* Personal Settings */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>PERSONAL SETTINGS</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Profile</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>

        {/* App Settings */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>APP SETTINGS</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Manage Alerts</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Manage Cards</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Quick Balance</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Apple Watch & Siri</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>

        {/* Security Settings */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SECURITY SETTINGS</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Security Center</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>

        {/* Statements */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>STATEMENTS</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Statements & Paperless</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>

        {/* Support */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SUPPORT</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Tutorials</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Help & Support</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Schedule a Meeting</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Share Feedback</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>About & Legal Documents</Text>
          <IconSymbol name="chevron.right" size={18} color="#888888" />
        </TouchableOpacity>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: 'white',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EC0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000000',
  },
  sectionHeader: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '400',
  },
  bottomPadding: {
    height: 40,
  },
});
