import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountsScreen() {
  const router = useRouter();

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
        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>You've got a better way to bank.</Text>
            <Text style={styles.promoSubtitle}>Explore your Santander Select® Checking benefits.</Text>
            <Text style={styles.promoFooter}>Member FDIC</Text>
          </View>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Learn{'\n'}more</Text>
          </TouchableOpacity>
        </View>

        {/* FDIC Notice */}
        <View style={styles.fdicNotice}>
          <Text style={styles.fdicLogo}>FDIC</Text>
          <Text style={styles.fdicText}>FDIC-Insured - Backed by the full faith and credit of the U.S. Government.</Text>
        </View>

        {/* Account Card */}
        <View style={styles.accountCard}>
          <Text style={styles.accountType}>Select Checking (*7525)</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balancePrefix}>-</Text>
            <Text style={styles.balanceDollar}>$</Text>
            <Text style={styles.balanceAmount}>218.</Text>
            <Text style={styles.balanceCents}>25</Text>
          </View>
          <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
        </View>

        {/* Open Account Button */}
        <TouchableOpacity style={styles.openAccountButton}>
          <IconSymbol name="plus" size={18} color="#EC0000" />
          <Text style={styles.openAccountText}>Open an Account</Text>
        </TouchableOpacity>

        {/* Messages and Offers Section */}
        <View style={styles.messagesHeader}>
          <Text style={styles.messagesTitle}>MESSAGES AND OFFERS</Text>
          <TouchableOpacity>
            <Text style={styles.viewOffersText}>VIEW 5 OFFERS</Text>
          </TouchableOpacity>
        </View>

        {/* Offer Card */}
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

        {/* Credit Journey Link */}
        <TouchableOpacity 
          style={styles.creditJourneyCard}
          onPress={() => router.push('/credit-journey')}
        >
          <View style={styles.creditJourneyLeft}>
            <IconSymbol name="chart.bar.fill" size={24} color="#EC0000" />
            <View style={styles.creditJourneyInfo}>
              <Text style={styles.creditJourneyTitle}>Credit Journey</Text>
              <Text style={styles.creditJourneySubtitle}>Check your credit score for free</Text>
            </View>
          </View>
          <IconSymbol name="chevron.right" size={20} color="#888888" />
        </TouchableOpacity>
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
  promoBanner: {
    backgroundColor: '#EC0000',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: 'white',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  promoFooter: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  promoButton: {
    backgroundColor: '#B80000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginLeft: 16,
  },
  promoButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  fdicNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  fdicLogo: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000000',
    marginRight: 12,
    letterSpacing: 1,
  },
  fdicText: {
    flex: 1,
    fontSize: 13,
    color: '#333333',
    fontStyle: 'italic',
  },
  accountCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  accountType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 12,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  balancePrefix: {
    fontSize: 32,
    fontWeight: '300',
    color: '#EC0000',
    marginRight: 2,
  },
  balanceDollar: {
    fontSize: 20,
    fontWeight: '300',
    color: '#EC0000',
    marginTop: 4,
  },
  balanceAmount: {
    fontSize: 48,
    fontWeight: '300',
    color: '#EC0000',
  },
  balanceCents: {
    fontSize: 20,
    fontWeight: '300',
    color: '#EC0000',
    marginTop: 4,
  },
  balanceLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#888888',
    letterSpacing: 1,
  },
  openAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  openAccountText: {
    fontSize: 16,
    color: '#EC0000',
    fontWeight: '500',
    marginLeft: 8,
  },
  messagesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F5F5F5',
  },
  messagesTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 0.5,
  },
  viewOffersText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#EC0000',
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
  creditJourneyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  creditJourneyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditJourneyInfo: {
    marginLeft: 16,
  },
  creditJourneyTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  creditJourneySubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});
