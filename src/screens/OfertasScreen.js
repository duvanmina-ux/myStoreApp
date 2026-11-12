import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const productosOferta = [
  { id: 'o1', nombre: 'iPhone 13 (128GB)', desc: 'Chip A15 Bionic. Excelente batería y pantalla Super Retina XDR.', precioAntiguo: '$699', precioOferta: '$399', img: 'https://unsplash.com' },
  { id: 'o2', nombre: 'iPad Air 5ª Gen (M1)', desc: 'Potencia del chip M1 con soporte para Apple Pencil 2.', precioAntiguo: '$599', precioOferta: '$349', img: 'https://unsplash.com' },
  { id: 'o3', nombre: 'Apple Watch Series 7', desc: 'Pantalla Always-On rediseñada y carga rápida.', precioAntiguo: '$399', precioOferta: '$199', img: 'https://unsplash.com' },
  { id: 'o4', nombre: 'MacBook Air M1', desc: 'La laptop más ligera y vendida con arquitectura Apple Silicon.', precioAntiguo: '$999', precioOferta: '$599', img: 'https://unsplash.com' },
];

export default function OfertasScreen({ volverInicio }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.headerOfertas}>
        <Text style={styles.tituloOfertas}>🎄 Ofertas de Fin de Año</Text>
        <Text style={styles.subOfertas}>Productos de generaciones anteriores con descuentazo</Text>
      </View>

      <TouchableOpacity style={styles.btnVolver} onPress={volverInicio}>
        <Text style={styles.textoVolver}>← Volver a Inicio</Text>
      </TouchableOpacity>

      <FlatList
        data={productosOferta}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardOferta}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.detalles}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <View style={styles.preciosRow}>
                <Text style={styles.precioAntiguo}>{item.precioAntiguo}</Text>
                <Text style={styles.precioOferta}>{item.precioOferta}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 16, backgroundColor: '#FFF5F5' },
  headerOfertas: { backgroundColor: '#D32F2F', padding: 14, borderRadius: 10, marginBottom: 12 },
  tituloOfertas: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  subOfertas: { color: '#FFCDD2', fontSize: 11, textAlign: 'center', marginTop: 2 },
  btnVolver: { paddingVertical: 8, marginBottom: 10 },
  textoVolver: { color: '#007AFF', fontWeight: 'bold', fontSize: 14 },
  cardOferta: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#FFCDD2' },
  img: { width: 70, height: 70, borderRadius: 8 },
  detalles: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  nombre: { fontSize: 14, fontWeight: 'bold', color: '#1C1C1E' },
  desc: { fontSize: 11, color: '#666', marginVertical: 2 },
  preciosRow: { flexDirection: 'row', alignItems: 'center' },
  precioAntiguo: { fontSize: 12, color: '#999', textDecorationLine: 'line-through', marginRight: 8 },
  precioOferta: { fontSize: 15, fontWeight: 'bold', color: '#D32F2F' },
});
