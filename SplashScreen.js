import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import Mascot from '../components/Mascot';
import { Star } from 'lucide-react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[colors.backgroundStart, colors.backgroundEnd]}
      style={styles.container}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Mascot />
        <Text style={styles.brand}>SSID</Text>
        <Text style={styles.title}>Surgical Suture Instrument</Text>
        <Text style={styles.subtitle}>Detection System</Text>
      </Animated.View>

      <View style={styles.footer}>
        <View style={styles.starContainer}>
          <Star size={20} color={colors.white} fill={colors.white} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  brand: {
    fontSize: 60,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: 4,
    textShadowColor: 'rgba(45, 90, 240, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginTop: 10,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  starContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
});

export default SplashScreen;
