import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MessagesScreen() {
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
        {/* Alerts History */}
        <TouchableOpacity style={styles.alertsRow}>
          <View style={styles.alertsLeft}>
            <IconSymbol name="bell.fill" size={24} color="#EC0000" />
            <Text style={styles.alertsTitle}>Alerts History</Text>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#666666" />
        </TouchableOpacity>

        {/* Messages and Offers Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>MESSAGES AND OFFERS</Text>
        </View>

        {/* Offer Card 1 */}
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Earn up to $600 cash back* on everything</Text>
          <Text style={styles.offerSubtitle}>Enjoy a low APR* for easy spending and flexibility.</Text>
          <Text style={styles.offerDescription}>
            The Santander® Ultimate Cash Back® Card lets you pay smarter while earning 3% cash back on every purchase. With a low intro APR and no annual fee, managing your balance has never been more rewarding.
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
          <Text style={styles.disclaimer}>
            *Credit card accounts are subject to approval. Click 'Apply Now' for applicable terms and conditions.
          </Text>
        </View>

        {/* Security Card */}
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Don't get fooled by deepfakes.</Text>
          <Text style={styles.offerSubtitle}>How to protect yourself from sophisticated scams.</Text>
          <Text style={styles.offerDescription}>
            Criminals are now using deepfakes (digitally altered videos, images, or sound files) in scams to get at your personal info and money. Learn how to spot them - and stay safe.
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        {/* Offer Card 2 */}
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Apply for the Santander® Ultimate Cash Back® Credit Card</Text>
          <Text style={styles.offerSubtitle}>Earn more cash back and more savings.</Text>
          <Text style={styles.offerDescription}>
            Earn 3% cash back for the first year on qualified purchases, up to $20,000. Thereafter, earn 1.5% cash back on qualified purchases, with no limits on how much you can earn, and no annual or foreign transaction fees.*
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Learn more</Text>
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
  alertsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  alertsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 12,
  },
  sectionHeader: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 0.5,
  },
  offerCard: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#EC0000',
    marginBottom: 8,
    lineHeight: 26,
  },
  offerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 12,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: '#EC0000',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  disclaimer: {
    fontSize: 11,
    color: '#888888',
    lineHeight: 16,
  },
});

