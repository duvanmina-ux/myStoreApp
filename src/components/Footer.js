import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>Apple Inc. © 2026 — Todos los derechos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: { backgroundColor: '#000000', paddingVertical: 12, alignItems: 'center' },
  texto: { color: '#8E8E93', fontSize: 10 },
});
