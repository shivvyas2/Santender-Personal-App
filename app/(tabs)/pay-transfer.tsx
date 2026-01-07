import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PayTransferScreen() {
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

      {/* Pay & Transfer Section */}
      <ScrollView style={styles.payTransferSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pay & Transfer</Text>
          <TouchableOpacity>
            <IconSymbol name="ellipsis" size={20} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Quick Actions</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.up.right" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Send money</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.down.left" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Request money</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.left.arrow.right" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Transfer between accounts</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="creditcard" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Pay credit card</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bill Pay Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Bill Pay</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="doc.text" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Pay bills</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="plus" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Add payee</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#EC0000" />
              <Text style={styles.featureText}>Schedule payments</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Recent Transactions</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.up.right" size={24} color="#00AA00" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Sent to John Doe</Text>
                <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
              </View>
              <Text style={styles.transactionAmount}>-$150.00</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="arrow.down.left" size={24} color="#EC0000" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Deposit from ABC Corp</Text>
                <Text style={styles.transactionDate}>Yesterday, 9:15 AM</Text>
              </View>
              <Text style={styles.transactionAmount}>+$2,500.00</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="creditcard" size={24} color="#FF6B35" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Credit card payment</Text>
                <Text style={styles.transactionDate}>2 days ago</Text>
              </View>
              <Text style={styles.transactionAmount}>-$89.50</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scheduled Payments Card */}
        <View style={styles.featureCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Scheduled Payments</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#EC0000" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Electric Bill - ConEd</Text>
                <Text style={styles.transactionDate}>Due Dec 15, 2024</Text>
              </View>
              <Text style={styles.transactionAmount}>$125.30</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.featureItem}>
              <IconSymbol name="calendar" size={24} color="#EC0000" />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionText}>Internet Bill - Verizon</Text>
                <Text style={styles.transactionDate}>Due Dec 20, 2024</Text>
              </View>
              <Text style={styles.transactionAmount}>$79.99</Text>
            </TouchableOpacity>
          </View>
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
  payTransferSection: {
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
  featureCard: {
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
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  featureText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginLeft: 16,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 16,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

