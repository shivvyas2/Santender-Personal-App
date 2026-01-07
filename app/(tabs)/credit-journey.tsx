import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Circle, G, Path, Svg, Text as SvgText } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function CreditJourneyScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'credit' | 'alerts' | 'offers'>('credit');
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'breakdown'>('overview');

  // Credit Score Gauge Component
  const CreditScoreGauge = () => {
    const score = 603;
    const minScore = 300;
    const maxScore = 850;
    const scorePercentage = (score - minScore) / (maxScore - minScore);
    
    const size = width - 80;
    const strokeWidth = 16;
    const radius = (size - strokeWidth) / 2;
    const circumference = Math.PI * radius;
    const progress = circumference * scorePercentage;

    return (
      <View style={styles.gaugeContainer}>
        <Svg width={size} height={size / 2 + 40} viewBox={`0 0 ${size} ${size / 2 + 40}`}>
          {/* Background arc */}
          <Path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            stroke="#3D0000"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <Path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
            stroke="#FF6B35"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
          />
          {/* Score labels */}
          <SvgText x={strokeWidth / 2} y={size / 2 + 30} fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="start">300</SvgText>
          <SvgText x={size - strokeWidth / 2} y={size / 2 + 30} fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="end">850</SvgText>
        </Svg>
        
        <View style={styles.scoreOverlay}>
          <Text style={styles.scoreCategory}>Poor</Text>
          <Text style={styles.scoreValue}>{score}</Text>
          <View style={styles.scoreChangeRow}>
            <IconSymbol name="arrow.down" size={16} color="#FF6B35" />
            <Text style={styles.scoreChangeText}>9 points</Text>
          </View>
        </View>
      </View>
    );
  };

  // Score Factor Component
  const ScoreFactor = ({ 
    icon, 
    title, 
    impact, 
    status 
  }: { 
    icon: string; 
    title: string; 
    impact: string; 
    status: 'good' | 'fair' | 'poor' 
  }) => (
    <TouchableOpacity style={styles.factorCard}>
      <View style={[styles.factorIconContainer, 
        status === 'good' && styles.factorIconGood,
        status === 'fair' && styles.factorIconFair,
        status === 'poor' && styles.factorIconPoor,
      ]}>
        <IconSymbol name={icon as any} size={20} color={
          status === 'good' ? '#00AA00' : status === 'fair' ? '#FFA500' : '#EC0000'
        } />
      </View>
      <View style={styles.factorContent}>
        <Text style={styles.factorTitle}>{title}</Text>
        <Text style={[styles.factorImpact,
          status === 'good' && styles.factorImpactGood,
          status === 'fair' && styles.factorImpactFair,
          status === 'poor' && styles.factorImpactPoor,
        ]}>{impact}</Text>
      </View>
      <IconSymbol name="chevron.right" size={18} color="#888888" />
    </TouchableOpacity>
  );

  // Alert Item Component
  const AlertItem = ({ 
    icon, 
    title, 
    subtitle, 
    date, 
    isUnread,
    isWarning 
  }: { 
    icon: string; 
    title: string; 
    subtitle?: string; 
    date: string; 
    isUnread?: boolean;
    isWarning?: boolean;
  }) => (
    <TouchableOpacity style={styles.alertItem}>
      <View style={[styles.alertIcon, isWarning && styles.alertIconWarning]}>
        <IconSymbol name={icon as any} size={20} color={isWarning ? '#EC0000' : '#EC0000'} />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{title}</Text>
        {subtitle && <Text style={styles.alertSubtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.alertRight}>
        {isUnread && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>Unread</Text>
          </View>
        )}
        <Text style={styles.alertDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#EC0000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <IconSymbol name="chevron.left" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Credit Journey</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconButton}>
            <IconSymbol name="bell" size={22} color="white" />
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <IconSymbol name="ellipsis" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'credit' && styles.activeTab]}
          onPress={() => setActiveTab('credit')}
        >
          <Text style={[styles.tabText, activeTab === 'credit' && styles.activeTabText]}>Credit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'alerts' && styles.activeTab]}
          onPress={() => setActiveTab('alerts')}
        >
          <Text style={[styles.tabText, activeTab === 'alerts' && styles.activeTabText]}>Alerts</Text>
          <View style={styles.tabBadge}>
            <Text style={styles.tabBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'offers' && styles.activeTab]}
          onPress={() => setActiveTab('offers')}
        >
          <Text style={[styles.tabText, activeTab === 'offers' && styles.activeTabText]}>Offers</Text>
        </TouchableOpacity>
      </View>

      {/* Credit Tab Content */}
      {activeTab === 'credit' && (
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Score Section */}
          <View style={styles.scoreSection}>
            <View style={styles.scoreHeader}>
              <Text style={styles.scoreDate}>As of 01/05/26</Text>
              <TouchableOpacity>
                <Text style={styles.scoreHistoryLink}>See score history →</Text>
              </TouchableOpacity>
            </View>
            
            <CreditScoreGauge />
            
            <View style={styles.providerRow}>
              <Text style={styles.providerText}>VantageScore® 3.0 provided by Experian™</Text>
              <TouchableOpacity>
                <IconSymbol name="questionmark.circle" size={16} color="rgba(255,255,255,0.7)" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Score Details Card */}
          <View style={styles.detailsCard}>
            {/* Sub Tabs */}
            <View style={styles.subTabBar}>
              <TouchableOpacity 
                style={[styles.subTab, activeSubTab === 'overview' && styles.activeSubTab]}
                onPress={() => setActiveSubTab('overview')}
              >
                <Text style={[styles.subTabText, activeSubTab === 'overview' && styles.activeSubTabText]}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.subTab, activeSubTab === 'breakdown' && styles.activeSubTab]}
                onPress={() => setActiveSubTab('breakdown')}
              >
                <Text style={[styles.subTabText, activeSubTab === 'breakdown' && styles.activeSubTabText]}>Score breakdown</Text>
              </TouchableOpacity>
            </View>

            {activeSubTab === 'overview' && (
              <View style={styles.overviewContent}>
                <View style={styles.sectionTitleRow}>
                  <Text style={styles.sectionTitle}>Why your score changed</Text>
                  <TouchableOpacity>
                    <IconSymbol name="questionmark.circle" size={16} color="#EC0000" />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.changesList}>
                  <View style={styles.changeItem}>
                    <View style={styles.changeTextContainer}>
                      <Text style={styles.changeText}>Credit usage increased on your revolving accounts opened in the last year</Text>
                    </View>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>4 pt</Text>
                    </View>
                  </View>
                  
                  <View style={styles.changeItem}>
                    <View style={styles.changeTextContainer}>
                      <Text style={styles.changeText}>Card account balances increased</Text>
                    </View>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>2 pt</Text>
                    </View>
                  </View>
                  
                  <View style={styles.changeItem}>
                    <View style={styles.changeTextContainer}>
                      <Text style={styles.changeText}>Credit usage increased on your accounts</Text>
                    </View>
                    <View style={styles.changeImpact}>
                      <IconSymbol name="arrow.down" size={14} color="#FF6B35" />
                      <Text style={styles.changePoints}>1 pt</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.errorBanner}>
                  <IconSymbol name="exclamationmark.triangle.fill" size={18} color="#EC0000" />
                  <Text style={styles.errorText}>We're having trouble showing some of the score change info for your accounts.</Text>
                </View>
              </View>
            )}

            {activeSubTab === 'breakdown' && (
              <View style={styles.breakdownContent}>
                <Text style={styles.breakdownTitle}>Factors that impact your score</Text>
                <Text style={styles.breakdownSubtitle}>See each factor for a detailed look at what goes into it and how you're doing.</Text>
                
                <View style={styles.factorsList}>
                  <ScoreFactor icon="calendar" title="Payment history" impact="Very high impact" status="good" />
                  <ScoreFactor icon="folder" title="Credit history" impact="High impact" status="fair" />
                  <ScoreFactor icon="creditcard" title="Credit usage" impact="High impact" status="poor" />
                  <ScoreFactor icon="doc.text" title="Total balances" impact="Medium impact" status="fair" />
                  <ScoreFactor icon="magnifyingglass" title="Credit checks" impact="Low impact" status="good" />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      )}

      {/* Alerts Tab Content */}
      {activeTab === 'alerts' && (
        <ScrollView style={styles.alertsContent} showsVerticalScrollIndicator={false}>
          <View style={styles.alertsHeader}>
            <Text style={styles.alertsTitle}>Alert Inbox</Text>
          </View>

          <View style={styles.alertsList}>
            <AlertItem 
              icon="bookmark" 
              title="Address change" 
              date="10/10/2025"
            />
            <AlertItem 
              icon="creditcard" 
              title="New bank/credit card" 
              subtitle="JPMCB CARD"
              date="09/29/2025"
              isUnread
            />
            <AlertItem 
              icon="megaphone" 
              title="New credit inquiry" 
              subtitle="JPMCB CARD SERVICES"
              date="09/28/2025"
              isUnread
            />
            <AlertItem 
              icon="exclamationmark.triangle" 
              title="Card over limit" 
              subtitle="ZOLVE/CONTINENTAL BANK"
              date="09/21/2025"
              isUnread
              isWarning
            />
            <AlertItem 
              icon="exclamationmark.triangle" 
              title="Card over limit" 
              subtitle="APPLE CARD/GS BANK USA"
              date="09/07/2025"
              isWarning
            />
            <AlertItem 
              icon="megaphone" 
              title="New credit inquiry" 
              subtitle="JPMCB CARD SERVICES"
              date="08/28/2025"
            />
            <AlertItem 
              icon="bookmark" 
              title="Address change" 
              date="08/20/2025"
            />
            <AlertItem 
              icon="exclamationmark.triangle" 
              title="Card over limit" 
              subtitle="DISCOVER"
              date="08/19/2025"
              isWarning
            />
          </View>
        </ScrollView>
      )}

      {/* Offers Tab Content */}
      {activeTab === 'offers' && (
        <ScrollView style={styles.offersContent} showsVerticalScrollIndicator={false}>
          <View style={styles.offersHeader}>
            <Text style={styles.offersTitle}>Credit Offers</Text>
            <Text style={styles.offersSubtitle}>Personalized offers to help improve your credit</Text>
          </View>

          <View style={styles.offerCard}>
            <View style={styles.offerBadge}>
              <IconSymbol name="star.fill" size={14} color="#FFD700" />
              <Text style={styles.offerBadgeText}>RECOMMENDED</Text>
            </View>
            <Text style={styles.offerTitle}>Credit Limit Increase</Text>
            <Text style={styles.offerDescription}>
              You're pre-approved for a $2,000 credit limit increase on your Santander Ultimate Cash Back card.
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offerCard}>
            <View style={styles.offerBadgeSecondary}>
              <IconSymbol name="gift.fill" size={14} color="#EC0000" />
              <Text style={styles.offerBadgeTextSecondary}>SPECIAL OFFER</Text>
            </View>
            <Text style={styles.offerTitle}>Balance Transfer</Text>
            <Text style={styles.offerDescription}>
              Transfer high-interest balances with 0% APR for 18 months. Save on interest payments.
            </Text>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offerCard}>
            <View style={styles.offerBadgeSecondary}>
              <IconSymbol name="chart.line.uptrend.xyaxis" size={14} color="#EC0000" />
              <Text style={styles.offerBadgeTextSecondary}>BUILD CREDIT</Text>
            </View>
            <Text style={styles.offerTitle}>Secured Credit Card</Text>
            <Text style={styles.offerDescription}>
              Build your credit with a secured card. Make a deposit and get a matching credit limit.
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIconButton: {
    padding: 4,
    position: 'relative',
  },
  headerBadge: {
    position: 'absolute',
    top: -2,
    right: -4,
    backgroundColor: 'white',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  headerBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#EC0000',
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  activeTabText: {
    color: '#EC0000',
  },
  tabBadge: {
    backgroundColor: 'white',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  tabBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#EC0000',
  },
  scrollContent: {
    flex: 1,
  },
  scoreSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  scoreHistoryLink: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  gaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  scoreOverlay: {
    position: 'absolute',
    alignItems: 'center',
    top: '35%',
  },
  scoreCategory: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 56,
    fontWeight: '300',
    color: 'white',
    letterSpacing: -2,
  },
  scoreChangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  scoreChangeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
    marginLeft: 4,
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  providerText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minHeight: 400,
    paddingTop: 20,
  },
  subTabBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 8,
  },
  subTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeSubTab: {
    backgroundColor: '#EC0000',
  },
  subTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  activeSubTabText: {
    color: 'white',
  },
  overviewContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  changesList: {
    gap: 12,
  },
  changeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  changeTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  changeText: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 20,
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
  errorBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#EC0000',
  },
  errorText: {
    flex: 1,
    fontSize: 14,
    color: '#EC0000',
    marginLeft: 12,
    lineHeight: 20,
  },
  breakdownContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  breakdownSubtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 20,
  },
  factorsList: {
    gap: 12,
  },
  factorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 12,
  },
  factorIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  factorIconGood: {
    backgroundColor: '#E8FFE8',
  },
  factorIconFair: {
    backgroundColor: '#FFF8E8',
  },
  factorIconPoor: {
    backgroundColor: '#FFE8E8',
  },
  factorContent: {
    flex: 1,
  },
  factorTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  factorImpact: {
    fontSize: 13,
  },
  factorImpactGood: {
    color: '#00AA00',
  },
  factorImpactFair: {
    color: '#FFA500',
  },
  factorImpactPoor: {
    color: '#EC0000',
  },
  alertsContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  alertsHeader: {
    padding: 20,
    paddingBottom: 12,
  },
  alertsTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  alertsList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  alertIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertIconWarning: {
    backgroundColor: '#FFE8E8',
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  alertSubtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  alertRight: {
    alignItems: 'flex-end',
  },
  unreadBadge: {
    backgroundColor: '#E8F0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 4,
  },
  unreadText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#EC0000',
  },
  alertDate: {
    fontSize: 13,
    color: '#888888',
  },
  offersContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  offersHeader: {
    padding: 20,
  },
  offersTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  offersSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  offerCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  offerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  offerBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFD700',
    letterSpacing: 0.5,
  },
  offerBadgeSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  offerBadgeTextSecondary: {
    fontSize: 11,
    fontWeight: '700',
    color: '#EC0000',
    letterSpacing: 0.5,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 16,
  },
  offerButton: {
    backgroundColor: '#EC0000',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
