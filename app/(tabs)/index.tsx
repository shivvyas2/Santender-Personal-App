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
          <View style={styles.offerTitleRow}>
            <View style={styles.carIconContainer}>
              <Svg width={32} height={32} viewBox="0 0 512 512">
                <G>
                  <Path
                    d="M156,196c0-33.084-26.916-60-60-60s-60,26.916-60,60s26.916,60,60,60S156,229.084,156,196z M91,231v-5H81
                    c-2.762,0-5-2.238-5-5s2.238-5,5-5h25v-15H81c-2.762,0-5-2.238-5-5v-25c0-2.762,2.238-5,5-5h10v-5c0-2.762,2.238-5,5-5
                    s5,2.238,5,5v5h10c2.762,0,5,2.238,5,5s-2.238,5-5,5H86v15h25c2.762,0,5,2.238,5,5v25c0,2.762-2.238,5-5,5h-10v5
                    c0,2.762-2.238,5-5,5S91,233.762,91,231z"
                    fill="#EC0000"
                  />
                  <Path
                    d="M501,378.699c0-33.056,0-15.354,0-48.199c0-21.78-17.72-39.5-39.5-39.5h-20.111l-23.454-44.56
                    C408.051,227.664,388.729,216,367.51,216H306V71c0-2.762-2.238-5-5-5H101c-2.762,0-5,2.238-5,5v45c-44.112,0-80,35.888-80,80
                    s35.888,80,80,80v15H74.3c-19.812,0-38.448,9.301-50.385,25H23.5C13.851,316,6,323.851,6,333.5c0,5.011,2.129,9.525,5.516,12.718
                    c-0.857,6.71-0.381,9.73-0.516,32.488C5.032,382.17,1,388.616,1,396c0,11.09,9,20,20,20h29.187c7.731,17.641,25.351,30,45.813,30
                    s38.081-12.359,45.813-30h203.375c7.731,17.641,25.351,30,45.813,30s38.081-12.359,45.813-30H491c11.028,0,20-8.972,20-20
                    C511,388.705,507.132,382.264,501,378.699z M106,76h190v140h-59.18c-16.56,0-32.563,5.986-45.062,16.857L124.92,291H106v-15.647
                    c36.128-4.528,64.824-33.225,69.353-69.353H236c2.762,0,5-2.238,5-5s-2.238-5-5-5h-60c0-5.128-0.504-10.138-1.431-15H236
                    c2.762,0,5-2.238,5-5s-2.238-5-5-5h-64.022c-1.736-5.262-4.004-10.281-6.741-15H271c2.762,0,5-2.238,5-5v-45c0-2.762-2.238-5-5-5
                    H131c-2.762,0-5,2.238-5,5v15.858c-6.309-2.563-13.015-4.336-20-5.211V76z M26,196c0-38.598,31.402-70,70-70s70,31.402,70,70
                    s-31.402,70-70,70S26,234.598,26,196z M47.006,406H21c-5.483,0-10-4.453-10-10c0-5.514,4.486-10,10-10h26.006
                    C45.709,392.367,45.621,399.202,47.006,406z M96,436c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40
                    S118.056,436,96,436z M342.006,406H144.994c1.297-6.367,1.385-13.202,0-20h197.012C340.709,392.367,340.621,399.202,342.006,406z
                     M391,436c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40S413.056,436,391,436z M391,346
                    c-20.461,0-38.081,12.359-45.813,30H141.813c-7.731-17.641-25.351-30-45.813-30s-38.081,12.359-45.813,30H21
                    c0.045-21.813-0.101-21.681,0.124-25.181c2.387,0.326,2.87,0.12,12.376,0.181c9.649,0,17.5-7.851,17.5-17.5
                    c0-8.486-6.073-15.575-14.1-17.163C46.781,306.606,60.187,301,74.3,301h52.49c1.206,0,2.371-0.436,3.281-1.228l68.25-59.37
                    C209,231.115,222.673,226,236.82,226H367.51c17.495,0,33.427,9.617,41.575,25.099l24.86,47.23
                    c0.865,1.643,2.568,2.671,4.425,2.671h23.13c16.267,0,29.5,13.233,29.5,29.5v5.5h-10c-8.271,0-15,6.729-15,15s6.729,15,15,15h10
                    v10h-54.187C429.081,358.359,411.461,346,391,346z M491,406h-51.006c1.297-6.367,1.385-13.202,0-20H491c5.483,0,10,4.453,10,10
                    C501,401.514,496.514,406,491,406z"
                    fill="#EC0000"
                  />
                  <Circle cx="96" cy="396" r="20" fill="#EC0000" />
                  <Circle cx="391" cy="396" r="20" fill="#EC0000" />
                  <Path
                    d="M397.582 257.153C391.687 245.956 380.164 239 367.51 239h-130.69c-11.012 0-21.654 3.981-29.967 11.212l-48.3 42.016c-1.574 1.369-2.133 3.571-1.401 5.524.73 1.953 2.597 3.248 4.683 3.248 40.063 0 217.256 0 250.545 0 3.759 0 6.174-4.004 4.425-7.329L397.582 257.153zM266 291h-90.8l38.215-33.243c6.492-5.646 14.805-8.757 23.404-8.757H266V291zM361 291h-65v-42h65V291zM371 291v-41.742c7.519 1.097 14.122 5.695 17.732 12.553L404.097 291H371zM266 326h-10c-2.762 0-5 2.238-5 5s2.238 5 5 5h10c2.762 0 5-2.238 5-5S268.762 326 266 326z"
                    fill="#EC0000"
                  />
                </G>
              </Svg>
            </View>
            <Text style={styles.offerTitle}>Pre approved up to $75,000. Auto Loan.</Text>
          </View>
          <Text style={styles.offerSubtitle}>Get competitive rates and flexible terms for your next vehicle.</Text>
          <Text style={styles.offerDescription}>
            You're pre-approved for an auto loan up to $75,000. Enjoy competitive rates, flexible repayment terms, and quick approval. Finance your new or used vehicle with confidence.
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Pre Qualify</Text>
          </TouchableOpacity>
          <Text style={styles.disclaimer}>
            *Auto loan offers are subject to approval. Click 'Pre Qualify' for applicable terms and conditions.
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
  offerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  carIconContainer: {
    marginRight: 12,
    padding: 4,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#EC0000',
    flex: 1,
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
