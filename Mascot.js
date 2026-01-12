import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bot } from 'lucide-react-native';
import { colors } from '../theme/colors';

const Mascot = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Bot size={80} color={colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default Mascot;
