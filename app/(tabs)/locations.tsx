import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocationsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="line.3.horizontal" size={24} color="#000000" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <View style={styles.logoRow}>
            <View style={styles.flameIcon}>
              <IconSymbol name="flame.fill" size={18} color="#EC0000" />
            </View>
            <Text style={styles.logoText}>Santander</Text>
            <Text style={styles.trademark}>®</Text>
          </View>
          <Text style={styles.lastLogin}>Last log in: 12/12/2025 at 09:46 ET</Text>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text style={styles.searchTitle}>Find Locations</Text>
          <View style={styles.searchBar}>
            <IconSymbol name="magnifyingglass" size={20} color="#888888" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by city, state, or ZIP code"
              placeholderTextColor="#888888"
            />
          </View>
          
          <TouchableOpacity style={styles.useLocationButton}>
            <IconSymbol name="location.fill" size={18} color="#EC0000" />
            <Text style={styles.useLocationText}>Use my current location</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Options */}
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>FILTER BY</Text>
          <View style={styles.filterOptions}>
            <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
              <Text style={[styles.filterChipText, styles.filterChipTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Branches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>ATMs</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Nearby Locations */}
        <View style={styles.locationsSection}>
          <Text style={styles.locationsTitle}>NEARBY LOCATIONS</Text>
          
          <TouchableOpacity style={styles.locationCard}>
            <View style={styles.locationIcon}>
              <IconSymbol name="building.2" size={24} color="#EC0000" />
            </View>
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>Santander Bank - Main Street</Text>
              <Text style={styles.locationAddress}>123 Main Street, Boston, MA 02101</Text>
              <Text style={styles.locationHours}>Open today: 9:00 AM - 5:00 PM</Text>
              <Text style={styles.locationDistance}>0.3 miles away</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationCard}>
            <View style={styles.locationIcon}>
              <IconSymbol name="dollarsign.square" size={24} color="#EC0000" />
            </View>
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>Santander ATM</Text>
              <Text style={styles.locationAddress}>456 Commerce Ave, Boston, MA 02102</Text>
              <Text style={styles.locationHours}>24 hours</Text>
              <Text style={styles.locationDistance}>0.5 miles away</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationCard}>
            <View style={styles.locationIcon}>
              <IconSymbol name="building.2" size={24} color="#EC0000" />
            </View>
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>Santander Bank - Downtown</Text>
              <Text style={styles.locationAddress}>789 Financial District, Boston, MA 02103</Text>
              <Text style={styles.locationHours}>Open today: 9:00 AM - 6:00 PM</Text>
              <Text style={styles.locationDistance}>0.8 miles away</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color="#888888" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerButton: {
    padding: 8,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flameIcon: {
    marginRight: 4,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#EC0000',
  },
  trademark: {
    fontSize: 12,
    color: '#EC0000',
    marginTop: -8,
  },
  lastLogin: {
    fontSize: 11,
    color: '#666666',
    marginTop: 2,
  },
  logoutButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  logoutText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#EC0000',
  },
  content: {
    flex: 1,
  },
  searchSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  searchTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#000000',
  },
  useLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  useLocationText: {
    fontSize: 16,
    color: '#EC0000',
    fontWeight: '500',
    marginLeft: 8,
  },
  filterSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#F8F8F8',
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  filterOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterChipActive: {
    backgroundColor: '#EC0000',
    borderColor: '#EC0000',
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  filterChipTextActive: {
    color: 'white',
  },
  locationsSection: {
    padding: 20,
  },
  locationsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  locationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  locationHours: {
    fontSize: 13,
    color: '#00AA00',
    marginBottom: 2,
  },
  locationDistance: {
    fontSize: 13,
    color: '#888888',
  },
});

