import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransferScreen() {
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
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Move Money</Text>
          <Text style={styles.pageSubtitle}>Send, transfer, and pay bills quickly and securely.</Text>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <IconSymbol name="arrow.up.right" size={28} color="#EC0000" />
            </View>
            <Text style={styles.actionTitle}>Send Money</Text>
            <Text style={styles.actionDescription}>Transfer to friends, family, or accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <IconSymbol name="arrow.left.arrow.right" size={28} color="#EC0000" />
            </View>
            <Text style={styles.actionTitle}>Transfer</Text>
            <Text style={styles.actionDescription}>Move between your accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <IconSymbol name="doc.text" size={28} color="#EC0000" />
            </View>
            <Text style={styles.actionTitle}>Pay Bills</Text>
            <Text style={styles.actionDescription}>Pay your bills on time</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <IconSymbol name="person.2" size={28} color="#EC0000" />
            </View>
            <Text style={styles.actionTitle}>Zelle®</Text>
            <Text style={styles.actionDescription}>Send money instantly</Text>
          </TouchableOpacity>
        </View>

        {/* Scheduled Payments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scheduled Payments</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.paymentCard}>
            <View style={styles.paymentLeft}>
              <IconSymbol name="bolt.fill" size={20} color="#EC0000" />
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>Electric Bill - ConEd</Text>
                <Text style={styles.paymentDate}>Due Jan 15, 2026</Text>
              </View>
            </View>
            <Text style={styles.paymentAmount}>$125.30</Text>
          </View>

          <View style={styles.paymentCard}>
            <View style={styles.paymentLeft}>
              <IconSymbol name="wifi" size={20} color="#EC0000" />
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>Internet - Verizon</Text>
                <Text style={styles.paymentDate}>Due Jan 20, 2026</Text>
              </View>
            </View>
            <Text style={styles.paymentAmount}>$79.99</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityLeft}>
              <View style={[styles.activityIcon, { backgroundColor: '#E8FFE8' }]}>
                <IconSymbol name="arrow.down" size={16} color="#00AA00" />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>Received from John Doe</Text>
                <Text style={styles.activityDate}>Today, 2:30 PM</Text>
              </View>
            </View>
            <Text style={[styles.activityAmount, { color: '#00AA00' }]}>+$150.00</Text>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityLeft}>
              <View style={[styles.activityIcon, { backgroundColor: '#E8FFE8' }]}>
                <IconSymbol name="arrow.down" size={16} color="#00AA00" />
              </View>
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>Received from ABC Corp</Text>
                <Text style={styles.activityDate}>Yesterday, 9:15 AM</Text>
              </View>
            </View>
            <Text style={[styles.activityAmount, { color: '#00AA00' }]}>+$2,500.00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
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
  titleSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  actionCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  actionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  section: {
    margin: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  viewAllText: {
    fontSize: 14,
    color: '#EC0000',
    fontWeight: '600',
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentInfo: {
    marginLeft: 12,
  },
  paymentName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  paymentDate: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityInfo: {
    marginLeft: 12,
  },
  activityName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  activityDate: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
});


