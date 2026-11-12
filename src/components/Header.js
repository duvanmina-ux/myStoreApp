import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}> Apple Store</Text>
      <Text style={styles.subtitulo}>Productos Oficiales</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  subtitulo: { fontSize: 11, color: '#A1A1A6', marginTop: 2 },
});
