import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './src/components/Header';
import NavBar from './src/components/NavBar';
import Carousel from './src/components/Carousel';
import WorkArea from './src/components/WorkArea';
import Footer from './src/components/Footer';
import OfertasScreen from './src/screens/OfertasScreen';

export default function App() {
  const [vistaActual, setVistaActual] = useState('Inicio');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <NavBar vistaActual={vistaActual} setVistaActual={setVistaActual} />

        {vistaActual === 'Inicio' ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Carousel />
            <WorkArea />
            <Footer />
          </ScrollView>
        ) : (
          <OfertasScreen volverInicio={() => setVistaActual('Inicio')} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
});
