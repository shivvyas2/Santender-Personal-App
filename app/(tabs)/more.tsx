import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreScreen() {
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

      {/* Unified scroll: search + quick actions + content to eliminate seams */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
          </View>
          <TouchableOpacity style={styles.helpButton}>
            <IconSymbol name="questionmark" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Quick actions */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRow}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="plus" size={16} color="#EC0000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Send | Zelle®</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Deposit checks</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Pay bills</Text></TouchableOpacity>
        </ScrollView>

        {/* Cards */}
        {renderSection('Account Settings', [
          ['person', 'Profile settings'],
          ['bell', 'Notifications'],
          ['lock', 'Security settings'],
          ['creditcard', 'Card management'],
        ])}

        {renderSection('Support', [
          ['questionmark.circle', 'Help center'],
          ['phone', 'Contact us'],
          ['message', 'Live chat'],
          ['location', 'Find branches'],
        ])}

        {renderSection('Benefits & Travel', [
          ['airplane', 'Travel portal'],
          ['star', 'Rewards points'],
          ['gift', 'Card benefits'],
        ])}

        {renderSection('Plan & Track', [
          ['chart.bar', 'Spending insights'],
          ['target', 'Savings goals'],
          ['calendar', 'Budget tracking'],
        ])}

        {renderSection('Business Services', [
          ['building.2', 'Business banking'],
          ['chart.line.uptrend.xyaxis', 'Business insights'],
          ['doc.text', 'Business reports'],
        ])}

        {renderSection('Legal & Privacy', [
          ['doc', 'Terms of service'],
          ['lock.shield', 'Privacy policy'],
          ['info.circle', 'About Santander'],
        ])}
      </ScrollView>
    </SafeAreaView>
  );
}

function renderSection(title: string, rows: [string, string][]) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        {rows.map(([icon, text], idx) => (
          <TouchableOpacity style={[styles.featureItem, idx === rows.length - 1 && { borderBottomWidth: 0 }]} key={text}>
            <IconSymbol name={icon as any} size={24} color="#EC0000" />
            <Text style={styles.featureText}>{text}</Text>
            <IconSymbol name="chevron.right" size={16} color="#999999" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16, backgroundColor: 'white',
    borderBottomWidth: 1, borderBottomColor: '#F0F0F0',
  },
  headerButton: { padding: 8, borderRadius: 8 },
  logoContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 16 },
  santanderLogo: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 4,
  },
  logoText: { fontSize: 22, fontWeight: '700', color: '#EC0000', letterSpacing: 0.5 },
  lastLogin: { fontSize: 12, color: '#666666', fontWeight: '400' },
  logoutButton: { paddingHorizontal: 12, paddingVertical: 6 },
  logoutText: { fontSize: 14, fontWeight: '600', color: '#EC0000', letterSpacing: 0.5 },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24, paddingTop: 0 },

  searchRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginBottom: 12 },
  searchBar: {
    flex: 1, backgroundColor: '#F5F5F5', borderRadius: 16, paddingHorizontal: 20, paddingVertical: 14, marginRight: 12,
  },
  searchPlaceholder: { color: '#8E8E93', fontSize: 17, fontWeight: '400' },
  helpButton: { 
    padding: 12, backgroundColor: '#EC0000', borderRadius: 16, width: 44, height: 44, 
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#EC0000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3,
  },

  quickRow: { paddingRight: 20, marginBottom: 8 },
  actionButton: {
    backgroundColor: '#F8F8F8', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10, marginRight: 10, minHeight: 40,
    alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8E8E8',
  },
  actionText: { fontSize: 13, fontWeight: '600', color: '#1C1C1E', textAlign: 'center' },

  featureCard: { 
    backgroundColor: 'white', borderRadius: 20, marginBottom: 20, overflow: 'hidden', 
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 4, borderWidth: 0,
  },
  cardHeader: { backgroundColor: '#EC0000', paddingHorizontal: 20, paddingVertical: 16 },
  cardHeaderText: { color: 'white', fontSize: 17, fontWeight: '700', letterSpacing: 0.3 },
  cardContent: { padding: 20 },
  featureItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  featureText: { flex: 1, fontSize: 17, fontWeight: '600', color: '#000000', marginLeft: 16 },
});

