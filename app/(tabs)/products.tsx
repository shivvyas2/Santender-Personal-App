import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductsScreen() {
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
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Explore Santander</Text>
          <Text style={styles.heroSubtitle}>
            Explore & discover how our products can help you achieve your financial goals.
          </Text>

          {/* Product Grid */}
          <View style={styles.productGrid}>
            <View style={styles.productRow}>
              <TouchableOpacity style={styles.productCard}>
                <IconSymbol name="creditcard" size={28} color="#EC0000" />
                <Text style={styles.productName}>Checking</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.productCard}>
                <IconSymbol name="dollarsign.circle" size={28} color="#EC0000" />
                <Text style={styles.productName}>Savings &{'\n'}Money Market</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.productRow}>
              <TouchableOpacity style={styles.productCard}>
                <IconSymbol name="chart.line.uptrend.xyaxis" size={28} color="#EC0000" />
                <Text style={styles.productName}>Certificates of Deposit{'\n'}(CDs)</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.productCard}>
                <IconSymbol name="creditcard.fill" size={28} color="#EC0000" />
                <Text style={styles.productName}>Credit Cards</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.productRow}>
              <TouchableOpacity style={styles.productCard}>
                <IconSymbol name="building.columns" size={28} color="#EC0000" />
                <Text style={styles.productName}>Investment{'\n'}Services</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerTitle}>INVESTMENT AND INSURANCE PRODUCTS ARE:</Text>
          <Text style={styles.disclaimerItem}>• NOT FDIC INSURED</Text>
          <Text style={styles.disclaimerItem}>• NOT BANK GUARANTEED</Text>
          <Text style={styles.disclaimerItem}>• MAY LOSE VALUE</Text>
          <Text style={styles.disclaimerItem}>• NOT A BANK DEPOSIT</Text>
          <Text style={styles.disclaimerItem}>• NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</Text>
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
  heroSection: {
    backgroundColor: '#EC0000',
    paddingTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  productGrid: {
    gap: 12,
  },
  productRow: {
    flexDirection: 'row',
    gap: 12,
  },
  productCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'flex-start',
    minHeight: 110,
  },
  productName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginTop: 12,
    lineHeight: 20,
  },
  disclaimer: {
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  disclaimerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  disclaimerItem: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 2,
  },
});

