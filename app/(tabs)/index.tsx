import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="line.3.horizontal" size={24} color="#000000" />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <View style={styles.santanderLogo}>
            <Text style={styles.logoText}>Santander</Text>
          </View>
          <Text style={styles.lastLogin}>Last log in: 12/12/2025 at 09:46 ET</Text>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
        </View>
        <TouchableOpacity style={styles.helpButton}>
          <IconSymbol name="questionmark" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="plus" size={16} color="#EC0000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Send | Zelle®</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Deposit checks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Pay bills</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Accounts Section */}
      <ScrollView style={styles.accountsSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Accounts</Text>
          <TouchableOpacity>
            <IconSymbol name="ellipsis" size={20} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Bank Accounts */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Bank accounts (2)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>SANTANDER COLLEGE (...8472)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$12,847.32</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Business Checking</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>SANTANDER BUSINESS (...2951)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$8,429.67</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        {/* Credit Cards */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Credit cards (3)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Sapphire Preferred (...7384)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            {/* Credit Card Image */}
            <View style={styles.creditCard}>
              <View style={styles.cardBackground}>
                <View style={styles.cardPattern}>
                  <View style={styles.cardPatternLine} />
                  <View style={styles.cardPatternLine} />
                  <View style={styles.cardPatternLine} />
                </View>
                <Text style={styles.cardText}>SAPPHIRE PREFERRED</Text>
                <View style={styles.cardBottom}>
                  <Text style={styles.cardVisa}>VISA</Text>
                  <Text style={styles.cardSignature}>Signature</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$1,247.89</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="checkmark.circle.fill" size={16} color="#00AA00" />
              <Text style={styles.paymentText}>You don't have a payment due right now.</Text>
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Freedom Unlimited</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Freedom Unlimited (...5629)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$892.45</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="exclamationmark.triangle.fill" size={16} color="#FF4444" />
              <Text style={styles.paymentText}>Payment due in 5 days - $45.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Amazon Prime Rewards</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Amazon Prime (...1847)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$0.00</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="checkmark.circle.fill" size={16} color="#00AA00" />
              <Text style={styles.paymentText}>Account in good standing</Text>
            </View>
          </View>
        </View>

        {/* Link External Accounts */}
        <TouchableOpacity style={styles.linkAccounts}>
          <Text style={styles.linkAccountsText}>Link external accounts</Text>
          <IconSymbol name="chevron.right" size={16} color="#999999" />
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
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerButton: {
    padding: 8,
    borderRadius: 8,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  santanderLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#EC0000',
    letterSpacing: 0.5,
  },
  lastLogin: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '400',
  },
  logoutButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EC0000',
    letterSpacing: 0.5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginRight: 12,
    borderWidth: 0,
  },
  searchPlaceholder: {
    color: '#8E8E93',
    fontSize: 17,
    fontWeight: '400',
  },
  helpButton: {
    padding: 12,
    backgroundColor: '#EC0000',
    borderRadius: 16,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EC0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  quickActions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  accountsSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: -0.5,
  },
  accountCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 0,
  },
  cardHeader: {
    backgroundColor: '#EC0000',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  cardContent: {
    padding: 20,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  accountName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 0.2,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  balanceTextContainer: {
    flex: 1,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  balanceLabel: {
    fontSize: 15,
    color: '#666666',
    fontWeight: '500',
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
    marginLeft: 16,
  },
  creditCard: {
    marginBottom: 16,
    width: 80,
    height: 50,
  },
  cardBackground: {
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
    padding: 8,
    height: 50,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  cardPatternLine: {
    height: 1,
    backgroundColor: '#4A90E2',
    marginVertical: 2,
    transform: [{ rotate: '15deg' }],
  },
  cardText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardVisa: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardSignature: {
    color: 'white',
    fontSize: 6,
  },
  paymentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  paymentText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 8,
  },
  linkAccounts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  linkAccountsText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
});

