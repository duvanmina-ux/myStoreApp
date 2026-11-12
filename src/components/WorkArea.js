import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const productosApple = [
  { id: '1', nombre: 'iPhone 18 Pro Max', desc: 'Pantalla ProMotion de 6.9", chip A19 Pro y cámara de 48 MP.', precio: '$1,199', img: 'https://unsplash.com' },
  { id: '2', nombre: 'iPad M5 Pro', desc: 'Procesador M5 con pantalla OLED Ultra Retina XDR.', precio: '$999', img: 'https://unsplash.com' },
  { id: '3', nombre: 'Apple Watch Series 10', desc: 'Diseño ultra delgado con sensor de ECG y medición de presión.', precio: '$399', img: 'https://unsplash.com' },
  { id: '4', nombre: 'MacBook Pro M4', desc: 'Rendimiento extremo con hasta 24 horas de batería.', precio: '$1,599', img: 'https://unsplash.com' },
  { id: '5', nombre: 'AirPods Max 2', desc: 'Cancelación activa de ruido mejorada y audio espacial.', precio: '$549', img: 'https://unsplash.com' },
  { id: '6', nombre: 'Mac mini M4', desc: 'Computadora de escritorio compacta con arquitectura M4.', precio: '$599', img: 'https://unsplash.com' },
  { id: '7', nombre: 'Apple Vision Pro 2', desc: 'Computación espacial avanzada con resolución micro-OLED 4K.', precio: '$3,499', img: 'https://unsplash.com' },
  { id: '8', nombre: 'Studio Display', desc: 'Pantalla Retina 5K de 27 pulgadas con cámara de 12 MP.', precio: '$1,599', img: 'https://unsplash.com' },
  { id: '9', nombre: 'HomePod 2', desc: 'Sonido de alta fidelidad con asistente inteligente Siri integrado.', precio: '$299', img: 'https://unsplash.com' },
  { id: '10', nombre: 'AirTag (Pack de 4)', desc: 'Rastreo preciso de pertenencias mediante la red Find My.', precio: '$99', img: 'https://unsplash.com' },
];

export default function WorkArea() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloSeccion}>Catálogo Principal</Text>
      <FlatList
        data={productosApple}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.imagenProd} />
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.precio}>{item.precio}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { paddingHorizontal: 16 },
  tituloSeccion: { fontSize: 18, fontWeight: 'bold', color: '#1C1C1E', marginVertical: 12 },
  card: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E5EA' },
  imagenProd: { width: 75, height: 75, borderRadius: 8, backgroundColor: '#F2F2F7' },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  nombre: { fontSize: 15, fontWeight: '700', color: '#1C1C1E' },
  desc: { fontSize: 12, color: '#8E8E93', marginVertical: 2 },
  precio: { fontSize: 14, fontWeight: 'bold', color: '#007AFF' },
});
