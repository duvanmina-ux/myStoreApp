import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavBar({ vistaActual, setVistaActual }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        style={[styles.btnNav, vistaActual === 'Inicio' && styles.btnActivo]} 
        onPress={() => setVistaActual('Inicio')}
      >
        <Text style={[styles.textoNav, vistaActual === 'Inicio' && styles.textoActivo]}>
          🏠 Inicio
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btnNav, vistaActual === 'Ofertas' && styles.btnActivo]} 
        onPress={() => setVistaActual('Ofertas')}
      >
        <Text style={[styles.textoNav, vistaActual === 'Ofertas' && styles.textoActivo]}>
          🔥 Ofertas Fin de Año
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  btnNav: { paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20 },
  btnActivo: { backgroundColor: '#2C2C2E' },
  textoNav: { color: '#8E8E93', fontSize: 13, fontWeight: '600' },
  textoActivo: { color: '#2997FF' },
});
