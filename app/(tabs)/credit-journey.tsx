import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Circle, Defs, LinearGradient, Stop, Svg } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function CreditJourneyScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'score' | 'factors' | 'alerts' | 'tips' | 'offers'>('score');

  // Circular Progress Component
  const CircularProgress = () => {
    const score = 710;
    const size = 220;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = ((score - 300) / (850 - 300)) * circumference;
    
    // Get score color based on FICO range
    const getScoreColor = (score: number) => {
      if (score >= 700) return '#4ECB71'; // Excellent
      if (score >= 670) return '#FFD93D'; // Good
      if (score >= 580) return '#FFA94D'; // Fair
      return '#EC0000'; // Poor
    };
    
    const scoreColor = getScoreColor(score);
    const scoreCategory = score >= 700 ? 'Excellent' : score >= 670 ? 'Good' : score >= 580 ? 'Fair' : 'Poor';

    return (
      <View style={styles.circularContainer}>
        <Svg width={size} height={size}>
          <Defs>
            <LinearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={scoreColor} />
              <Stop offset="100%" stopColor={scoreColor} />
            </LinearGradient>
          </Defs>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#F0F0F0"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </Svg>
        <View style={styles.circularCenter}>
          <Text style={styles.circularScore}>{score}</Text>
          <View style={styles.scoreLabelRow}>
            <View style={[styles.scoreDot, { backgroundColor: scoreColor }]} />
            <Text style={styles.circularLabel}>{scoreCategory}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <IconSymbol name="chevron.left" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Credit Score</Text>
        <TouchableOpacity style={styles.moreBtn}>
          <IconSymbol name="ellipsis" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreCardHeader}>
            <Text style={styles.lastUpdated}>Updated Jan 5, 2026</Text>
            <TouchableOpacity style={styles.refreshBtn}>
              <IconSymbol name="arrow.clockwise" size={16} color="#EC0000" />
              <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
          </View>

          <CircularProgress />

          <View style={styles.scoreChange}>
            <IconSymbol name="arrow.up" size={14} color="#4ECB71" />
            <Text style={[styles.scoreChangeText, { color: '#4ECB71' }]}>12 points from last month</Text>
          </View>

          <View style={styles.providerRow}>
            <Text style={styles.providerText}>FICO® Score 8 by Experian</Text>
            <TouchableOpacity>
              <IconSymbol name="info.circle" size={16} color="#888888" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Score Range Legend */}
        <View style={styles.legendCard}>
          <View style={styles.legendItem}>
            <View style={[styles.legendBar, { backgroundColor: '#EC0000' }]} />
            <Text style={styles.legendLabel}>Poor</Text>
            <Text style={styles.legendRange}>300-579</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBar, { backgroundColor: '#FFA94D' }]} />
            <Text style={styles.legendLabel}>Fair</Text>
            <Text style={styles.legendRange}>580-669</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBar, { backgroundColor: '#FFD93D' }]} />
            <Text style={styles.legendLabel}>Good</Text>
            <Text style={styles.legendRange}>670-699</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBar, { backgroundColor: '#4ECB71' }]} />
            <Text style={styles.legendLabel}>Excellent</Text>
            <Text style={styles.legendRange}>700-850</Text>
          </View>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabNav}>
          {(['score', 'factors', 'alerts', 'tips', 'offers'] as const).map((tab) => (
            <TouchableOpacity 
              key={tab}
              style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab === 'score' ? 'Changes' : tab === 'factors' ? 'Factors' : tab === 'alerts' ? 'Alerts' : tab === 'tips' ? 'Tips' : 'Offers'}
              </Text>
              {tab === 'alerts' && (
                <View style={styles.alertBadge}>
                  <Text style={styles.alertBadgeText}>3</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Score/Changes Tab */}
        {activeTab === 'score' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Why Your Score Changed</Text>
            
            <View style={styles.changeCard}>
              <View style={[styles.changeIconBg, { backgroundColor: '#FFEBEB' }]}>
                <IconSymbol name="creditcard.fill" size={16} color="#EC0000" />
              </View>
              <View style={styles.changeContent}>
                <Text style={styles.changeTitle}>Credit utilization increased</Text>
                <Text style={styles.changeDesc}>Card balances increased on 3 revolving accounts</Text>
                <Text style={styles.changeDetail}>Santander Card: $2,450 → $3,200</Text>
              </View>
              <View style={[styles.changePoints, { backgroundColor: '#FFEBEB' }]}>
                <Text style={[styles.changePointsText, { color: '#EC0000' }]}>-7</Text>
              </View>
            </View>

            <View style={styles.changeCard}>
              <View style={[styles.changeIconBg, { backgroundColor: '#FFEBEB' }]}>
                <IconSymbol name="magnifyingglass" size={16} color="#EC0000" />
              </View>
              <View style={styles.changeContent}>
                <Text style={styles.changeTitle}>New credit inquiry</Text>
                <Text style={styles.changeDesc}>Hard inquiry from credit card application</Text>
                <Text style={styles.changeDetail}>Santander Card Services • 2 weeks ago</Text>
              </View>
              <View style={[styles.changePoints, { backgroundColor: '#FFEBEB' }]}>
                <Text style={[styles.changePointsText, { color: '#EC0000' }]}>-3</Text>
              </View>
            </View>

            <View style={styles.changeCard}>
              <View style={[styles.changeIconBg, { backgroundColor: '#E8F5E9' }]}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#4ECB71" />
              </View>
              <View style={styles.changeContent}>
                <Text style={styles.changeTitle}>On-time payment recorded</Text>
                <Text style={styles.changeDesc}>Payment made on time for all accounts</Text>
                <Text style={styles.changeDetail}>4 credit cards • 1 auto loan</Text>
              </View>
              <View style={[styles.changePoints, { backgroundColor: '#E8F5E9' }]}>
                <Text style={[styles.changePointsText, { color: '#4ECB71' }]}>+2</Text>
              </View>
            </View>

            <View style={styles.changeCard}>
              <View style={[styles.changeIconBg, { backgroundColor: '#FFEBEB' }]}>
                <IconSymbol name="arrow.up.right" size={16} color="#EC0000" />
              </View>
              <View style={styles.changeContent}>
                <Text style={styles.changeTitle}>New account opened</Text>
                <Text style={styles.changeDesc}>New credit card account added to report</Text>
                <Text style={styles.changeDetail}>Average account age decreased</Text>
              </View>
              <View style={[styles.changePoints, { backgroundColor: '#FFEBEB' }]}>
                <Text style={[styles.changePointsText, { color: '#EC0000' }]}>-1</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>View Score History</Text>
              <IconSymbol name="chevron.right" size={16} color="#EC0000" />
            </TouchableOpacity>
          </View>
        )}

        {/* Factors Tab */}
        {activeTab === 'factors' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Score Factors</Text>
            
            <TouchableOpacity style={styles.factorCard}>
              <View style={styles.factorLeft}>
                <View style={[styles.factorIcon, { backgroundColor: '#E8F5E9' }]}>
                  <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                </View>
                <View style={styles.factorInfo}>
                  <Text style={styles.factorName}>Payment History</Text>
                  <Text style={styles.factorImpact}>High impact • Excellent</Text>
                  <Text style={styles.factorDetail}>100% on-time • 24 months</Text>
                </View>
              </View>
              <View style={styles.factorRight}>
                <Text style={styles.factorWeight}>35%</Text>
                <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.factorCard}>
              <View style={styles.factorLeft}>
                <View style={[styles.factorIcon, { backgroundColor: '#FFEBEB' }]}>
                  <IconSymbol name="creditcard.fill" size={20} color="#EC0000" />
                </View>
                <View style={styles.factorInfo}>
                  <Text style={styles.factorName}>Credit Utilization</Text>
                  <Text style={styles.factorImpact}>High impact • Good</Text>
                  <Text style={styles.factorDetail}>$12,450 / $16,000 (78%)</Text>
                </View>
              </View>
              <View style={styles.factorRight}>
                <Text style={styles.factorWeight}>30%</Text>
                <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.factorCard}>
              <View style={styles.factorLeft}>
                <View style={[styles.factorIcon, { backgroundColor: '#FFF3E0' }]}>
                  <IconSymbol name="calendar" size={20} color="#FFA94D" />
                </View>
                <View style={styles.factorInfo}>
                  <Text style={styles.factorName}>Credit Age</Text>
                  <Text style={styles.factorImpact}>Medium impact • Fair</Text>
                  <Text style={styles.factorDetail}>Avg: 2.5 yrs • Oldest: 5.2 yrs</Text>
                </View>
              </View>
              <View style={styles.factorRight}>
                <Text style={styles.factorWeight}>15%</Text>
                <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.factorCard}>
              <View style={styles.factorLeft}>
                <View style={[styles.factorIcon, { backgroundColor: '#FFEBEB' }]}>
                  <IconSymbol name="magnifyingglass" size={20} color="#EC0000" />
                </View>
                <View style={styles.factorInfo}>
                  <Text style={styles.factorName}>Credit Inquiries</Text>
                  <Text style={styles.factorImpact}>Low impact • Fair</Text>
                  <Text style={styles.factorDetail}>3 hard inquiries in last 2 years</Text>
                </View>
              </View>
              <View style={styles.factorRight}>
                <Text style={styles.factorWeight}>10%</Text>
                <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.factorCard}>
              <View style={styles.factorLeft}>
                <View style={[styles.factorIcon, { backgroundColor: '#E8F5E9' }]}>
                  <IconSymbol name="list.bullet" size={20} color="#4ECB71" />
                </View>
                <View style={styles.factorInfo}>
                  <Text style={styles.factorName}>Account Mix</Text>
                  <Text style={styles.factorImpact}>Low impact • Good</Text>
                  <Text style={styles.factorDetail}>4 credit cards • 1 auto • 1 mortgage</Text>
                </View>
              </View>
              <View style={styles.factorRight}>
                <Text style={styles.factorWeight}>10%</Text>
                <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Credit Activity Alerts</Text>
            
            <TouchableOpacity style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: '#FFEBEB' }]}>
                <IconSymbol name="exclamationmark.triangle.fill" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertInfo}>
                <View style={styles.alertHeader}>
                  <Text style={styles.alertTitle}>High Credit Utilization</Text>
                  <View style={styles.newTag}>
                    <Text style={styles.newTagText}>NEW</Text>
                  </View>
                </View>
                <Text style={styles.alertSubtitle}>Santander Card at 85% utilization</Text>
                <Text style={styles.alertDate}>Jan 3, 2026</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: '#E3F2FD' }]}>
                <IconSymbol name="creditcard.fill" size={18} color="#2196F3" />
              </View>
              <View style={styles.alertInfo}>
                <View style={styles.alertHeader}>
                  <Text style={styles.alertTitle}>New Credit Card Account</Text>
                  <View style={styles.newTag}>
                    <Text style={styles.newTagText}>NEW</Text>
                  </View>
                </View>
                <Text style={styles.alertSubtitle}>Santander Ultimate Cash Back Card</Text>
                <Text style={styles.alertDate}>Dec 15, 2025</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: '#FFF3E0' }]}>
                <IconSymbol name="magnifyingglass" size={18} color="#FFA94D" />
              </View>
              <View style={styles.alertInfo}>
                <Text style={styles.alertTitle}>Hard Credit Inquiry</Text>
                <Text style={styles.alertSubtitle}>Santander Card Services</Text>
                <Text style={styles.alertDate}>Dec 10, 2025</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: '#E8F5E9' }]}>
                <IconSymbol name="checkmark.circle.fill" size={18} color="#4ECB71" />
              </View>
              <View style={styles.alertInfo}>
                <Text style={styles.alertTitle}>Payment Received</Text>
                <Text style={styles.alertSubtitle}>All accounts paid on time</Text>
                <Text style={styles.alertDate}>Dec 1, 2025</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: '#FFEBEB' }]}>
                <IconSymbol name="arrow.up.right" size={18} color="#EC0000" />
              </View>
              <View style={styles.alertInfo}>
                <Text style={styles.alertTitle}>Balance Increase</Text>
                <Text style={styles.alertSubtitle}>Credit card balance increased by $750</Text>
                <Text style={styles.alertDate}>Nov 28, 2025</Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#CCCCCC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>View All Alerts</Text>
              <IconSymbol name="chevron.right" size={16} color="#EC0000" />
            </TouchableOpacity>
          </View>
        )}

        {/* Tips Tab */}
        {activeTab === 'tips' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Ways to Improve</Text>
            
            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <IconSymbol name="creditcard.fill" size={24} color="#EC0000" />
                </View>
                <View style={[styles.impactTag, { backgroundColor: '#FFEBEB' }]}>
                  <Text style={[styles.impactTagText, { color: '#EC0000' }]}>High Impact</Text>
                </View>
              </View>
              <Text style={styles.tipTitle}>Reduce Credit Utilization</Text>
              <Text style={styles.tipDesc}>Your utilization is 78% ($12,450 of $16,000). Pay down balances to below 30% to improve your score by 40-60 points.</Text>
              <View style={styles.tipDetail}>
                <Text style={styles.tipDetailText}>• Pay $7,650 to reach 30% utilization</Text>
                <Text style={styles.tipDetailText}>• Focus on highest balance cards first</Text>
              </View>
              <View style={styles.tipAction}>
                <Text style={styles.tipActionText}>See payment strategies</Text>
                <IconSymbol name="arrow.right" size={14} color="#EC0000" />
              </View>
            </View>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <IconSymbol name="magnifyingglass" size={24} color="#FFA94D" />
                </View>
                <View style={[styles.impactTag, { backgroundColor: '#FFF3E0' }]}>
                  <Text style={[styles.impactTagText, { color: '#FFA94D' }]}>Medium Impact</Text>
                </View>
              </View>
              <Text style={styles.tipTitle}>Limit Credit Inquiries</Text>
              <Text style={styles.tipDesc}>You have 3 hard inquiries in the last 2 years. Each inquiry can lower your score by 5-10 points and stays on your report for 2 years.</Text>
              <View style={styles.tipDetail}>
                <Text style={styles.tipDetailText}>• Wait 6+ months before new applications</Text>
                <Text style={styles.tipDetailText}>• Inquiries fall off after 24 months</Text>
              </View>
            </View>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <IconSymbol name="clock.fill" size={24} color="#4ECB71" />
                </View>
                <View style={[styles.impactTag, { backgroundColor: '#E8F5E9' }]}>
                  <Text style={[styles.impactTagText, { color: '#4ECB71' }]}>Maintain</Text>
                </View>
              </View>
              <Text style={styles.tipTitle}>Keep On-Time Payment History</Text>
              <Text style={styles.tipDesc}>Your 100% on-time payment record is excellent. Continue making payments on time—this is the most important factor (35% of score).</Text>
              <View style={styles.tipDetail}>
                <Text style={styles.tipDetailText}>• Set up autopay for all accounts</Text>
                <Text style={styles.tipDetailText}>• One late payment can drop score 50-100 points</Text>
              </View>
              <View style={styles.tipAction}>
                <Text style={styles.tipActionText}>Set up autopay</Text>
                <IconSymbol name="arrow.right" size={14} color="#EC0000" />
              </View>
            </View>

            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <View style={styles.tipIconContainer}>
                  <IconSymbol name="calendar" size={24} color="#FFA94D" />
                </View>
                <View style={[styles.impactTag, { backgroundColor: '#FFF3E0' }]}>
                  <Text style={[styles.impactTagText, { color: '#FFA94D' }]}>Long-term</Text>
                </View>
              </View>
              <Text style={styles.tipTitle}>Build Credit Age</Text>
              <Text style={styles.tipDesc}>Your average account age is 2.5 years. Keep older accounts open—they help your credit history and account for 15% of your score.</Text>
              <View style={styles.tipDetail}>
                <Text style={styles.tipDetailText}>• Don't close your oldest credit card</Text>
                <Text style={styles.tipDetailText}>• Oldest account: 5.2 years</Text>
              </View>
            </View>

            {/* Tradelines Section */}
            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>Your Credit Accounts</Text>
              
              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="list.bullet" size={20} color="#EC0000" />
                  <Text style={styles.infoCardTitle}>Total Tradelines</Text>
                </View>
                <View style={styles.infoStatsRow}>
                  <View style={styles.infoStat}>
                    <Text style={styles.infoStatValue}>8</Text>
                    <Text style={styles.infoStatLabel}>Total Accounts</Text>
                  </View>
                  <View style={styles.infoStatDivider} />
                  <View style={styles.infoStat}>
                    <Text style={styles.infoStatValue}>5</Text>
                    <Text style={styles.infoStatLabel}>Open Accounts</Text>
                  </View>
                  <View style={styles.infoStatDivider} />
                  <View style={styles.infoStat}>
                    <Text style={styles.infoStatValue}>3</Text>
                    <Text style={styles.infoStatLabel}>Closed Accounts</Text>
                  </View>
                </View>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="creditcard" size={20} color="#EC0000" />
                  <Text style={styles.infoCardTitle}>Account Types</Text>
                </View>
                <View style={styles.accountTypeList}>
                  <View style={styles.accountTypeItem}>
                    <Text style={styles.accountTypeName}>Credit Cards</Text>
                    <Text style={styles.accountTypeCount}>4 accounts</Text>
                  </View>
                  <View style={styles.accountTypeItem}>
                    <Text style={styles.accountTypeName}>Auto Loan</Text>
                    <Text style={styles.accountTypeCount}>1 account</Text>
                  </View>
                  <View style={styles.accountTypeItem}>
                    <Text style={styles.accountTypeName}>Mortgage</Text>
                    <Text style={styles.accountTypeCount}>1 account</Text>
                  </View>
                  <View style={styles.accountTypeItem}>
                    <Text style={styles.accountTypeName}>Student Loan</Text>
                    <Text style={styles.accountTypeCount}>2 accounts</Text>
                  </View>
                </View>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="chart.bar.fill" size={20} color="#EC0000" />
                  <Text style={styles.infoCardTitle}>Credit Utilization</Text>
                </View>
                <View style={styles.utilizationBar}>
                  <View style={[styles.utilizationFill, { width: '78%' }]} />
                </View>
                <View style={styles.utilizationInfo}>
                  <Text style={styles.utilizationText}>$12,450 of $16,000 used</Text>
                  <Text style={styles.utilizationPercent}>78%</Text>
                </View>
                <Text style={styles.utilizationNote}>Keep utilization below 30% for best scores</Text>
              </View>
            </View>

            {/* Delinquencies Section */}
            <View style={styles.infoSection}>
              <Text style={styles.infoSectionTitle}>Payment History</Text>
              
              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                  <Text style={styles.infoCardTitle}>On-Time Payments</Text>
                </View>
                <View style={styles.paymentStats}>
                  <View style={styles.paymentStat}>
                    <Text style={styles.paymentStatValue}>100%</Text>
                    <Text style={styles.paymentStatLabel}>On-time rate</Text>
                  </View>
                  <View style={styles.paymentStatDivider} />
                  <View style={styles.paymentStat}>
                    <Text style={styles.paymentStatValue}>0</Text>
                    <Text style={styles.paymentStatLabel}>Delinquencies</Text>
                  </View>
                  <View style={styles.paymentStatDivider} />
                  <View style={styles.paymentStat}>
                    <Text style={styles.paymentStatValue}>24</Text>
                    <Text style={styles.paymentStatLabel}>Months on-time</Text>
                  </View>
                </View>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="exclamationmark.triangle.fill" size={20} color="#FFA94D" />
                  <Text style={styles.infoCardTitle}>Delinquencies</Text>
                </View>
                <View style={styles.delinquencyList}>
                  <View style={styles.delinquencyItem}>
                    <View style={styles.delinquencyLeft}>
                      <Text style={styles.delinquencyStatus}>No delinquencies</Text>
                      <Text style={styles.delinquencyDesc}>All accounts are current</Text>
                    </View>
                    <View style={[styles.delinquencyBadge, { backgroundColor: '#E8F5E9' }]}>
                      <Text style={[styles.delinquencyBadgeText, { color: '#4ECB71' }]}>Current</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.delinquencyNote}>Late payments stay on your report for 7 years</Text>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="clock.arrow.circlepath" size={20} color="#EC0000" />
                  <Text style={styles.infoCardTitle}>Account Status</Text>
                </View>
                <View style={styles.statusList}>
                  <View style={styles.statusItem}>
                    <View style={[styles.statusDot, { backgroundColor: '#4ECB71' }]} />
                    <Text style={styles.statusText}>5 accounts current</Text>
                  </View>
                  <View style={styles.statusItem}>
                    <View style={[styles.statusDot, { backgroundColor: '#FFA94D' }]} />
                    <Text style={styles.statusText}>2 accounts with balance</Text>
                  </View>
                  <View style={styles.statusItem}>
                    <View style={[styles.statusDot, { backgroundColor: '#EC0000' }]} />
                    <Text style={styles.statusText}>1 account over limit</Text>
                  </View>
                </View>
              </View>

              <View style={styles.infoCard}>
                <View style={styles.infoCardHeader}>
                  <IconSymbol name="calendar.badge.clock" size={20} color="#EC0000" />
                  <Text style={styles.infoCardTitle}>Account Age</Text>
                </View>
                <View style={styles.ageStats}>
                  <View style={styles.ageStat}>
                    <Text style={styles.ageStatValue}>2.5 years</Text>
                    <Text style={styles.ageStatLabel}>Average age</Text>
                  </View>
                  <View style={styles.ageStatDivider} />
                  <View style={styles.ageStat}>
                    <Text style={styles.ageStatValue}>5.2 years</Text>
                    <Text style={styles.ageStatLabel}>Oldest account</Text>
                  </View>
                  <View style={styles.ageStatDivider} />
                  <View style={styles.ageStat}>
                    <Text style={styles.ageStatValue}>6 months</Text>
                    <Text style={styles.ageStatLabel}>Newest account</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Offers Tab */}
        {activeTab === 'offers' && (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Credit Card Offers</Text>
            
            {/* Santander Ultimate Cash Back Card */}
            <View style={styles.cardOfferContainer}>
              <View style={styles.creditCard}>
                {/* Card Top Section */}
                <View style={styles.cardTopSection}>
                  <Text style={styles.cardWorldText}>world</Text>
                  <View style={styles.cardLogoContainer}>
                    <IconSymbol name="flame.fill" size={20} color="white" />
                    <Text style={styles.cardLogoText}>Santander</Text>
                  </View>
                </View>

                {/* Card Middle Section with Grey Band */}
                <View style={styles.cardMiddleSection}>
                  <View style={styles.cardChipContainer}>
                    <View style={styles.cardChip}>
                      <View style={styles.cardChipInner} />
                    </View>
                    <View style={styles.contactlessIcon}>
                      <View style={styles.contactlessLine1} />
                      <View style={styles.contactlessLine2} />
                      <View style={styles.contactlessLine3} />
                    </View>
                  </View>
                  <View style={styles.cardTitleSection}>
                    <Text style={styles.cardTitleMain}>ULTIMATE</Text>
                    <Text style={styles.cardTitleSub}>CASH BACK®</Text>
                  </View>
                </View>

                {/* Card Number */}
                <View style={styles.cardNumberSection}>
                  <Text style={styles.cardNumber}>5000 1234 5678 9010</Text>
                </View>

                {/* Cardholder Name */}
                <View style={styles.cardNameSection}>
                  <Text style={styles.cardName}>LEE M CARDHOLDER</Text>
                </View>

                {/* Mastercard Logo */}
                <View style={styles.cardMastercardLogo}>
                  <View style={styles.mastercardCircle1} />
                  <View style={styles.mastercardCircle2} />
                </View>
              </View>

              {/* Card Details */}
              <View style={styles.cardDetails}>
                <View style={styles.cardDetailHeader}>
                  <Text style={styles.cardDetailTitle}>Santander® Ultimate Cash Back® Card</Text>
                </View>
                
                <View style={styles.cardBenefitList}>
                  <View style={styles.cardBenefitItem}>
                    <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                    <Text style={styles.cardBenefitText}>3% cash back on every purchase</Text>
                  </View>
                  <View style={styles.cardBenefitItem}>
                    <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                    <Text style={styles.cardBenefitText}>Low intro APR* for easy spending</Text>
                  </View>
                  <View style={styles.cardBenefitItem}>
                    <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                    <Text style={styles.cardBenefitText}>No annual fee</Text>
                  </View>
                  <View style={styles.cardBenefitItem}>
                    <IconSymbol name="checkmark.circle.fill" size={20} color="#4ECB71" />
                    <Text style={styles.cardBenefitText}>Earn up to $600 cash back*</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.cardApplyButton}>
                  <Text style={styles.cardApplyButtonText}>Apply Now</Text>
                </TouchableOpacity>

                <Text style={styles.cardDisclaimer}>
                  *Credit card accounts are subject to approval. Click 'Apply Now' for applicable terms and conditions.
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* CTA Card */}
        <View style={styles.ctaCard}>
          <View style={styles.ctaIcon}>
            <IconSymbol name="person.fill" size={24} color="#EC0000" />
          </View>
          <Text style={styles.ctaTitle}>Need Help?</Text>
          <Text style={styles.ctaDesc}>Talk to a Santander credit specialist for personalized advice.</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Schedule Free Consultation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
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
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  moreBtn: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scoreCard: {
    margin: 16,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  scoreCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  lastUpdated: {
    fontSize: 13,
    color: '#888888',
  },
  refreshBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  refreshText: {
    fontSize: 13,
    color: '#EC0000',
    fontWeight: '500',
  },
  circularContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  circularCenter: {
    position: 'absolute',
    alignItems: 'center',
  },
  circularScore: {
    fontSize: 64,
    fontWeight: '300',
    color: '#000000',
    letterSpacing: -2,
  },
  scoreLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: -4,
  },
  scoreDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  circularLabel: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  scoreChange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },
  scoreChangeText: {
    fontSize: 14,
    color: '#EC0000',
    fontWeight: '500',
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  providerText: {
    fontSize: 12,
    color: '#888888',
  },
  legendCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  legendItem: {
    flex: 1,
    alignItems: 'center',
  },
  legendBar: {
    width: '80%',
    height: 4,
    borderRadius: 2,
    marginBottom: 8,
  },
  legendLabel: {
    fontSize: 11,
    color: '#666666',
    fontWeight: '500',
  },
  legendRange: {
    fontSize: 10,
    color: '#AAAAAA',
    marginTop: 2,
  },
  tabNav: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 4,
  },
  tabItemActive: {
    backgroundColor: '#EC0000',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888888',
  },
  tabTextActive: {
    color: 'white',
  },
  alertBadge: {
    backgroundColor: '#EC0000',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  alertBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
  },
  tabContent: {
    padding: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  changeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },
  changeIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  changeContent: {
    flex: 1,
  },
  changeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  changeDesc: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 2,
  },
  changeDetail: {
    fontSize: 12,
    color: '#AAAAAA',
    fontStyle: 'italic',
  },
  changePoints: {
    backgroundColor: '#FFEBEB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  changePointsText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EC0000',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 16,
  },
  linkButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#EC0000',
  },
  factorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },
  factorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  factorIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  factorInfo: {
    flex: 1,
  },
  factorName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  factorImpact: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 2,
  },
  factorDetail: {
    fontSize: 11,
    color: '#AAAAAA',
  },
  factorRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  factorWeight: {
    fontSize: 14,
    fontWeight: '600',
    color: '#AAAAAA',
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },
  alertIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertInfo: {
    flex: 1,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  alertTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  newTag: {
    backgroundColor: '#EC0000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newTagText: {
    fontSize: 9,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 0.5,
  },
  alertSubtitle: {
    fontSize: 11,
    color: '#888888',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  alertDate: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 2,
  },
  tipCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  tipIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  impactTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  impactTagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  tipDesc: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 8,
  },
  tipDetail: {
    marginTop: 8,
    marginBottom: 8,
    gap: 4,
  },
  tipDetailText: {
    fontSize: 13,
    color: '#888888',
    lineHeight: 18,
  },
  tipAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 12,
  },
  tipActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EC0000',
  },
  ctaCard: {
    margin: 16,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#EC0000',
    borderStyle: 'dashed',
  },
  ctaIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  ctaDesc: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: '#EC0000',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  ctaButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  bottomPadding: {
    height: 40,
  },
  infoSection: {
    marginTop: 24,
  },
  infoSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  infoStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoStat: {
    flex: 1,
    alignItems: 'center',
  },
  infoStatValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  infoStatLabel: {
    fontSize: 12,
    color: '#888888',
  },
  infoStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 8,
  },
  accountTypeList: {
    gap: 12,
  },
  accountTypeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  accountTypeName: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
  },
  accountTypeCount: {
    fontSize: 14,
    color: '#888888',
  },
  utilizationBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  utilizationFill: {
    height: '100%',
    backgroundColor: '#EC0000',
    borderRadius: 4,
  },
  utilizationInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  utilizationText: {
    fontSize: 14,
    color: '#666666',
  },
  utilizationPercent: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EC0000',
  },
  utilizationNote: {
    fontSize: 12,
    color: '#AAAAAA',
    fontStyle: 'italic',
  },
  paymentStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentStat: {
    flex: 1,
    alignItems: 'center',
  },
  paymentStatValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4ECB71',
    marginBottom: 4,
  },
  paymentStatLabel: {
    fontSize: 12,
    color: '#888888',
  },
  paymentStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 8,
  },
  delinquencyList: {
    marginBottom: 12,
  },
  delinquencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  delinquencyLeft: {
    flex: 1,
  },
  delinquencyStatus: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  delinquencyDesc: {
    fontSize: 13,
    color: '#888888',
  },
  delinquencyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  delinquencyBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  delinquencyNote: {
    fontSize: 12,
    color: '#AAAAAA',
    fontStyle: 'italic',
  },
  statusList: {
    gap: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#333333',
  },
  ageStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ageStat: {
    flex: 1,
    alignItems: 'center',
  },
  ageStatValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  ageStatLabel: {
    fontSize: 12,
    color: '#888888',
  },
  ageStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 8,
  },
  cardOfferContainer: {
    marginBottom: 20,
  },
  creditCard: {
    width: '100%',
    height: 220,
    backgroundColor: '#8B0000',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  cardTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardWorldText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
  },
  cardLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardLogoText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  cardMiddleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4A4A4A',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  cardChipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardChip: {
    width: 40,
    height: 32,
    backgroundColor: '#D4AF37',
    borderRadius: 4,
    padding: 4,
    borderWidth: 1,
    borderColor: '#B8941F',
  },
  cardChipInner: {
    flex: 1,
    backgroundColor: '#8B6914',
    borderRadius: 2,
  },
  contactlessIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  contactlessLine1: {
    width: 3,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
  contactlessLine2: {
    width: 3,
    height: 16,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
  contactlessLine3: {
    width: 3,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 1.5,
  },
  cardTitleSection: {
    alignItems: 'flex-end',
  },
  cardTitleMain: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E0E0E0',
    letterSpacing: 2,
  },
  cardTitleSub: {
    fontSize: 10,
    fontWeight: '600',
    color: '#B0B0B0',
    letterSpacing: 1,
    marginTop: 2,
  },
  cardNumberSection: {
    marginBottom: 12,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardNameSection: {
    marginBottom: 8,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardMastercardLogo: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mastercardCircle1: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EB001B',
    borderWidth: 2,
    borderColor: 'white',
    marginRight: -8,
  },
  mastercardCircle2: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F79E1B',
    borderWidth: 2,
    borderColor: 'white',
  },
  cardDetails: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardDetailHeader: {
    marginBottom: 16,
  },
  cardDetailTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  cardBenefitList: {
    marginBottom: 20,
    gap: 12,
  },
  cardBenefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardBenefitText: {
    fontSize: 15,
    color: '#333333',
    flex: 1,
  },
  cardApplyButton: {
    backgroundColor: '#EC0000',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  cardApplyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardDisclaimer: {
    fontSize: 11,
    color: '#888888',
    lineHeight: 16,
    textAlign: 'center',
  },
});

