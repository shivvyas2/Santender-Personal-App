import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';

export default function CreditJourneyScreen() {
  const [activeTab, setActiveTab] = useState('credit');
  const [activeSubTab, setActiveSubTab] = useState('overview');

  const CreditScoreGauge = () => (
    <View style={styles.gaugeContainer}>
      <Svg width={400} height={220} viewBox="0 0 400 220">
        {/* Shadow arc (subtle outer glow) */}
        <Path
          d="M 80 180 A 120 120 0 0 1 320 180"
          stroke="#000000"
          strokeOpacity="0.12"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        {/* Track arc (unfilled outline visible under progress) */}
        <Path
          d="M 80 180 A 120 120 0 0 1 320 180"
          stroke="#B71C1C"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        {/* Progress arc (filled portion) */}
        <Path
          d="M 80 180 A 120 120 0 0 1 320 180"
          stroke="#FF6B35"
          strokeWidth="12"
          fill="none"
          strokeDasharray="377"
          strokeDashoffset="250"
          strokeLinecap="round"
        />
        {/* Unfilled outline is preserved by the track arc above. */}
      </Svg>
      
      <View style={styles.scoreInfo}>
        <Text style={styles.scoreCategory}>Poor</Text>
        <Text style={styles.scoreValue}>603</Text>
        <View style={styles.scoreChange}>
          <IconSymbol name="arrow.down" size={20} color="#FF6B35" />
          <Text style={styles.scoreChangeText}>9 points</Text>
        </View>
      </View>
      
      <View style={styles.scoreFooter}>
        <Text style={styles.scoreProvider}>VantageScore® 3.0 provided by Experian™</Text>
        <TouchableOpacity>
          <IconSymbol name="questionmark.circle" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EC0000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Santander Credit Journey</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <IconSymbol name="bell" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreButton}>
            <IconSymbol name="ellipsis" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'credit' && styles.activeTab]}
          onPress={() => setActiveTab('credit')}
        >
          <Text style={[styles.tabText, activeTab === 'credit' && styles.activeTabText]}>
            Credit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'alerts' && styles.activeTab]}
          onPress={() => setActiveTab('alerts')}
        >
          <Text style={[styles.tabText, activeTab === 'alerts' && styles.activeTabText]}>
            Alerts
          </Text>
          <View style={styles.alertBadge}>
            <Text style={styles.alertCount}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'offers' && styles.activeTab]}
          onPress={() => setActiveTab('offers')}
        >
          <Text style={[styles.tabText, activeTab === 'offers' && styles.activeTabText]}>
            Offers
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      {activeTab === 'credit' && (
        <ScrollView style={styles.creditContent} showsVerticalScrollIndicator={false}>
          {/* Credit Score Section */}
          <View style={styles.scoreSection}>
            <View style={styles.scoreHeader}>
              <Text style={styles.scoreDate}>As of 10/29/25</Text>
              <TouchableOpacity>
                <Text style={styles.scoreHistory}>See score history {'>'}</Text>
              </TouchableOpacity>
            </View>
            
            <CreditScoreGauge />
          </View>

          {/* Score Breakdown Card */}
          <View style={styles.breakdownCard}>
            <View style={styles.breakdownTabs}>
              <TouchableOpacity 
                style={[styles.breakdownTab, activeSubTab === 'overview' && styles.activeBreakdownTab]}
                onPress={() => setActiveSubTab('overview')}
              >
                <Text style={[styles.breakdownTabText, activeSubTab === 'overview' && styles.activeBreakdownTabText]}>
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.breakdownTab, activeSubTab === 'breakdown' && styles.activeBreakdownTab]}
                onPress={() => setActiveSubTab('breakdown')}
              >
                <Text style={[styles.breakdownTabText, activeSubTab === 'breakdown' && styles.activeBreakdownTabText]}>
                  Score breakdown
                </Text>
              </TouchableOpacity>
            </View>

            {activeSubTab === 'overview' && (
              <View style={styles.overviewContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Why your score changed</Text>
                  <TouchableOpacity>
                    <IconSymbol name="questionmark.circle" size={16} color="#EC0000" />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.changeList}>
                  <View style={styles.changeItem}>
                    <Text style={styles.changeDescription}>
                      Credit usage increased on your revolving accounts opened in the last year
                    </Text>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>4 point</Text>
                    </View>
                  </View>
                  
                  <View style={styles.changeItem}>
                    <Text style={styles.changeDescription}>
                      Card account balances increased
                    </Text>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>2 point</Text>
                    </View>
                  </View>
                  
                  <View style={styles.changeItem}>
                    <Text style={styles.changeDescription}>
                      Credit usage increased on your accounts
                    </Text>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>1 point</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.errorMessage}>
                  <IconSymbol name="exclamationmark.triangle.fill" size={16} color="#FF4444" />
                  <Text style={styles.errorText}>
                    We&apos;re having trouble showing some of the score change info for your accounts.
                  </Text>
                </View>
              </View>
            )}

            {activeSubTab === 'breakdown' && (
              <View style={styles.breakdownContent}>
                <View style={styles.factorsHeader}>
                  <Text style={styles.factorsTitle}>Factors that impact your score</Text>
                  <Text style={styles.factorsSubtitle}>
                    See each factor for a detailed look at what goes into it and how you&apos;re doing.
                  </Text>
                </View>
                
                <View style={styles.factorsList}>
                  <TouchableOpacity style={styles.factorItem}>
                    <View style={styles.factorIcon}>
                      <IconSymbol name="calendar" size={20} color="#EC0000" />
                    </View>
                    <View style={styles.factorContent}>
                      <Text style={styles.factorName}>Payment history</Text>
                      <Text style={styles.factorImpact}>Very high impact</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color="#999999" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.factorItem}>
                    <View style={styles.factorIcon}>
                      <IconSymbol name="folder" size={20} color="#EC0000" />
                    </View>
                    <View style={styles.factorContent}>
                      <Text style={styles.factorName}>Credit history</Text>
                      <Text style={styles.factorImpact}>High impact</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color="#999999" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.factorItem}>
                    <View style={styles.factorIcon}>
                      <IconSymbol name="creditcard" size={20} color="#EC0000" />
                    </View>
                    <View style={styles.factorContent}>
                      <Text style={styles.factorName}>Credit usage</Text>
                      <Text style={styles.factorImpact}>High impact</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color="#999999" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.factorItem}>
                    <View style={styles.factorIcon}>
                      <IconSymbol name="doc.text" size={20} color="#EC0000" />
                    </View>
                    <View style={styles.factorContent}>
                      <Text style={styles.factorName}>Total balances</Text>
                      <Text style={styles.factorImpact}>Medium impact</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color="#999999" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.factorItem}>
                    <View style={styles.factorIcon}>
                      <IconSymbol name="doc.text" size={20} color="#EC0000" />
                    </View>
                    <View style={styles.factorContent}>
                      <Text style={styles.factorName}>Credit checks</Text>
                      <Text style={styles.factorImpact}>Low impact</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color="#999999" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      )}

      {activeTab === 'alerts' && (
        <ScrollView style={styles.alertsSection} showsVerticalScrollIndicator={false}>
          <View style={styles.alertsHeaderList}>
            <Text style={styles.alertInboxTitle}>Alert Inbox</Text>
          </View>

          {/* Alert rows list */}
          <View style={styles.alertList}>
            <View style={styles.alertRow}>
              <View style={styles.alertIconCircle}>
                <IconSymbol name="bookmark" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>Address change</Text>
              </View>
              <Text style={styles.alertRowDate}>10/10/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={styles.alertIconCircle}>
                <IconSymbol name="creditcard" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>New bank/credit card</Text>
                <Text style={styles.alertRowSubtitle}>JPMCB CARD</Text>
              </View>
              <View style={styles.unreadPill}><Text style={styles.unreadText}>Unread</Text></View>
              <Text style={styles.alertRowDate}>09/29/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={styles.alertIconCircle}>
                <IconSymbol name="megaphone" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>New credit inquiry</Text>
                <Text style={styles.alertRowSubtitle}>JPMCB CARD SERVICES</Text>
              </View>
              <View style={styles.unreadPill}><Text style={styles.unreadText}>Unread</Text></View>
              <Text style={styles.alertRowDate}>09/28/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={[styles.alertIconCircle, { backgroundColor: '#FFF4F4' }]}>
                <IconSymbol name="exclamationmark.triangle" size={18} color="#E03A2F" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>Card over limit</Text>
                <Text style={styles.alertRowSubtitle}>ZOLVE/CONTINENTAL BANK</Text>
              </View>
              <View style={styles.unreadPill}><Text style={styles.unreadText}>Unread</Text></View>
              <Text style={styles.alertRowDate}>09/21/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={[styles.alertIconCircle, { backgroundColor: '#FFF4F4' }]}>
                <IconSymbol name="exclamationmark.triangle" size={18} color="#E03A2F" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>Card over limit</Text>
                <Text style={styles.alertRowSubtitle}>APPLE CARD/GS BANK USA</Text>
              </View>
              <Text style={styles.alertRowDate}>09/07/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={styles.alertIconCircle}>
                <IconSymbol name="megaphone" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>New credit inquiry</Text>
                <Text style={styles.alertRowSubtitle}>JPMCB CARD SERVICES</Text>
              </View>
              <Text style={styles.alertRowDate}>08/28/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={styles.alertIconCircle}>
                <IconSymbol name="bookmark" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>Address change</Text>
              </View>
              <Text style={styles.alertRowDate}>08/20/2025</Text>
            </View>
            <View style={styles.rowDivider} />

            <View style={styles.alertRow}>
              <View style={[styles.alertIconCircle, { backgroundColor: '#FFF4F4' }]}>
                <IconSymbol name="exclamationmark.triangle" size={18} color="#E03A2F" />
              </View>
              <View style={styles.alertRowLeft}>
                <Text style={styles.alertRowTitle}>Card over limit</Text>
                <Text style={styles.alertRowSubtitle}>DISCOVERC</Text>
              </View>
              <Text style={styles.alertRowDate}>08/19/2025</Text>
            </View>
          </View>
        </ScrollView>
      )}

      {activeTab === 'offers' && (
        <ScrollView style={styles.offersSection} showsVerticalScrollIndicator={false}>
          <View style={styles.offersHeader}>
            <Text style={styles.offersTitle}>Credit Offers</Text>
            <Text style={styles.offersSubtitle}>Personalized offers to help improve your credit</Text>
          </View>

          {/* Offer Cards */}
          <View style={styles.offerCard}>
            <View style={styles.offerHeader}>
              <IconSymbol name="star.fill" size={20} color="#FFD700" />
              <Text style={styles.offerType}>Recommended</Text>
            </View>
            <Text style={styles.offerTitle}>Credit Limit Increase</Text>
            <Text style={styles.offerDescription}>
              You&apos;re pre-approved for a $2,000 credit limit increase on your Sapphire Preferred card.
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offerCard}>
            <View style={styles.offerHeader}>
              <IconSymbol name="gift.fill" size={20} color="#EC0000" />
              <Text style={styles.offerType}>Special Offer</Text>
            </View>
            <Text style={styles.offerTitle}>Balance Transfer</Text>
            <Text style={styles.offerDescription}>
              Transfer high-interest balances with 0% APR for 18 months. Save on interest payments.
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC0000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#EC0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  moreButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 24,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 17,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#EC0000',
    fontWeight: '700',
  },
  quickRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  quickLabel: {
    color: '#666666',
    fontSize: 14,
    opacity: 0.9,
  },
  quickPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  quickPillText: {
    color: '#EC0000',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
  quickBadge: {
    marginLeft: 8,
    backgroundColor: '#EC0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  alertBadge: {
    position: 'absolute',
    top: -6,
    right: 2,
    backgroundColor: '#EC0000',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  alertCount: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 10,
  },
  creditContent: {
    flex: 1,
  },
  scoreSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreDate: {
    color: 'white',
    fontSize: 14,
  },
  scoreHistory: {
    color: '#FF6B6B',
    fontSize: 14,
  },
  gaugeContainer: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 2,
    paddingVertical: 10,
  },
  scoreInfo: {
    alignItems: 'center',
    marginTop: -112,
  },
  scoreCategory: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
  },
  scoreValue: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreChangeText: {
    color: '#FF6B35',
    fontSize: 18,
    marginLeft: 4,
    fontWeight: '600',
  },
  scoreFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  scoreProvider: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },
  breakdownCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 24,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  breakdownTabs: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  breakdownTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  activeBreakdownTab: {
    backgroundColor: '#EC0000',
    shadowColor: '#EC0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  breakdownTabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666666',
  },
  activeBreakdownTabText: {
    color: 'white',
    fontWeight: '700',
  },
  overviewContent: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  changeList: {
    marginBottom: 16,
  },
  changeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  changeDescription: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    marginRight: 16,
  },
  changeImpact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changePoints: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
    marginLeft: 4,
  },
  errorMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF4444',
  },
  errorText: {
    fontSize: 14,
    color: '#FF4444',
    marginLeft: 8,
    flex: 1,
  },
  breakdownContent: {
    flex: 1,
  },
  factorsHeader: {
    marginBottom: 20,
  },
  factorsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  factorsSubtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  factorsList: {
    flex: 1,
  },
  factorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  factorIcon: {
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  factorContent: {
    flex: 1,
  },
  factorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  factorImpact: {
    fontSize: 14,
    color: '#EC0000',
  },
  alertsSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  alertsHeaderList: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  alertInboxTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: -0.5,
  },
  alertList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#EDEDED',
  },
  alertIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertRowLeft: {
    flex: 1,
  },
  alertRowTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  alertRowSubtitle: {
    fontSize: 13,
    color: '#8A8A8E',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  alertRowDate: {
    fontSize: 14,
    color: '#8A8A8E',
    marginLeft: 8,
  },
  unreadPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#E8F1FF',
    borderRadius: 14,
    marginRight: 8,
  },
  unreadText: {
    color: '#EC0000',
    fontSize: 12,
    fontWeight: '700',
  },
  alertCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertType: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    marginLeft: 8,
    textTransform: 'uppercase',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  alertDescription: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 8,
  },
  alertDate: {
    fontSize: 12,
    color: '#666666',
  },
  offersSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  offersHeader: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  offersTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  offersSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  offerCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  offerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  offerType: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    marginLeft: 8,
    textTransform: 'uppercase',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 16,
  },
  offerButton: {
    backgroundColor: '#EC0000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

