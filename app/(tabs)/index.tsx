import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, G, Path } from 'react-native-svg';

export default function AccountsScreen() {
  const router = useRouter();

  // Credit score data
  const creditScore = 710;
  const scoreCategory = 'Excellent'; // 710 is in Excellent range (700+)
  const scoreChange = 12;
  const scoreChangeDirection = 'up';

  // Calculate score color based on FICO range
  const getScoreColor = (score: number) => {
    if (score >= 700) return '#4ECB71'; // Excellent
    if (score >= 670) return '#FFD93D'; // Good
    if (score >= 580) return '#FFA94D'; // Fair
    return '#EC0000'; // Poor
  };
  const scoreColor = getScoreColor(creditScore);

  // Calculate indicator position for gauge (710 is ~74.5% of 300-850 range)
  const minScore = 300;
  const maxScore = 850;
  const scoreRange = maxScore - minScore;
  const progress = (creditScore - minScore) / scoreRange; // 0.745
  const indicatorAngle = 180 * progress; // ~134 degrees
  const indicatorRadius = 37;
  const indicatorX = 50 + indicatorRadius * Math.cos((indicatorAngle - 90) * Math.PI / 180);
  const indicatorY = 50 + indicatorRadius * Math.sin((indicatorAngle - 90) * Math.PI / 180);

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
            <Text style={styles.balanceDollar}>$</Text>
            <Text style={styles.balanceAmount}>8,429.</Text>
            <Text style={styles.balanceCents}>67</Text>
          </View>
          <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
        </View>

        {/* Open Account Button */}
        <TouchableOpacity style={styles.openAccountButton}>
          <IconSymbol name="plus" size={18} color="#EC0000" />
          <Text style={styles.openAccountText}>Open an Account</Text>
        </TouchableOpacity>

        {/* Credit Score Widget */}
        <TouchableOpacity 
          style={styles.creditScoreWidget}
          onPress={() => router.push('/credit-journey')}
          activeOpacity={0.9}
        >
          <View style={styles.widgetHeader}>
            <View style={styles.widgetTitleRow}>
              <Text style={styles.widgetTitle}>Credit Journey</Text>
              <View style={styles.freeTag}>
                <Text style={styles.freeTagText}>FREE</Text>
              </View>
            </View>
            <IconSymbol name="chevron.right" size={18} color="#888888" />
          </View>
          
          <View style={styles.widgetContent}>
            {/* Mini Gauge - Semicircular */}
            <View style={styles.miniGaugeContainer}>
              <Svg width={100} height={58} viewBox="0 0 100 58">
                <G>
                  {/* Background track */}
                  <Path
                    d="M 10 52 A 40 40 0 0 1 90 52"
                    fill="none"
                    stroke="#EEEEEE"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Red segment (Poor) */}
                  <Path
                    d="M 10 52 A 40 40 0 0 1 22 22"
                    fill="none"
                    stroke="#EC0000"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Orange segment (Fair) */}
                  <Path
                    d="M 26 17 A 40 40 0 0 1 45 10"
                    fill="none"
                    stroke="#FFA94D"
                    strokeWidth="8"
                  />
                  {/* Yellow segment (Good) */}
                  <Path
                    d="M 50 9 A 40 40 0 0 1 70 14"
                    fill="none"
                    stroke="#FFD93D"
                    strokeWidth="8"
                  />
                  {/* Green segment (Excellent) */}
                  <Path
                    d="M 75 20 A 40 40 0 0 1 90 52"
                    fill="none"
                    stroke="#4ECB71"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Needle indicator at score position (710 = ~74.5%) */}
                  <Circle
                    cx={indicatorX}
                    cy={indicatorY}
                    r="5"
                    fill="white"
                    stroke={scoreColor}
                    strokeWidth="2"
                  />
                </G>
              </Svg>
              <View style={styles.gaugeLabelRow}>
                <Text style={styles.gaugeLabel}>300</Text>
                <Text style={styles.gaugeLabel}>850</Text>
              </View>
            </View>
            
            {/* Score Display */}
            <View style={styles.scoreDisplay}>
              <Text style={styles.scoreValue}>{creditScore}</Text>
              <View style={styles.scoreDetails}>
                <View style={styles.scoreLabelBadge}>
                  <View style={[styles.scoreIndicatorDot, { backgroundColor: scoreColor }]} />
                  <Text style={styles.scoreLabelText}>{scoreCategory}</Text>
                </View>
                <Text style={styles.scoreProvider}>FICO® Score 8</Text>
              </View>
            </View>
            
            {/* Score Change */}
            <View style={styles.scoreChangeWidget}>
              <IconSymbol name={scoreChangeDirection === 'up' ? 'arrow.up' : 'arrow.down'} size={12} color={scoreChangeDirection === 'up' ? '#4ECB71' : '#EC0000'} />
              <Text style={[styles.scoreChangeTextWidget, { color: scoreChangeDirection === 'up' ? '#4ECB71' : '#EC0000' }]}>{scoreChange} pts</Text>
            </View>
          </View>
          
          <View style={styles.widgetFooter}>
            <Text style={styles.widgetFooterText}>Updated Jan 5, 2026 • Tap to view details</Text>
          </View>
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
  balanceDollar: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000000',
    marginTop: 4,
  },
  balanceAmount: {
    fontSize: 48,
    fontWeight: '300',
    color: '#000000',
  },
  balanceCents: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000000',
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
  creditScoreWidget: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
  },
  widgetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  widgetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  freeTag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  freeTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4ECB71',
    letterSpacing: 0.5,
  },
  widgetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  miniGaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  gaugeLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 86,
    marginTop: 2,
  },
  gaugeLabel: {
    fontSize: 10,
    color: '#999999',
    fontWeight: '600',
  },
  scoreDisplay: {
    flex: 1,
  },
  scoreValue: {
    fontSize: 42,
    fontWeight: '300',
    color: '#000000',
    letterSpacing: -1,
  },
  scoreDetails: {
    marginTop: -4,
  },
  scoreLabelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  scoreIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  scoreLabelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  scoreProvider: {
    fontSize: 11,
    color: '#AAAAAA',
    marginTop: 2,
  },
  scoreChangeWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBEB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  scoreChangeTextWidget: {
    fontSize: 13,
    fontWeight: '600',
    color: '#EC0000',
  },
  widgetFooter: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  widgetFooterText: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
  },
});
