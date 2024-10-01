import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from './scripts/AppContext'; 

export default function Carrinho() {
  const { itens } = useContext(AppContext); 

  // Função para calcular o total
  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0).toFixed(2); //toFixed é utilizado para arredondar
  };

  return (
    //O "Pedido" mostrará quais itens foram clicados
    <View style={styles.container}>
      <Text style={styles.title}>Pedido:</Text>
      {itens.length > 0 ? ( //avalia se o botão recebeu click
        <>
          {itens.map((item, index) => (//mapeando de itens
            <Text key={index} style={styles.item}>{item.nome} - R${item.preco.toFixed(2)}</Text> //chama o "preco" do item para calcular o total
          ))}
          <Text style={styles.total}>Total: R${calcularTotal()}</Text>
        </>
      ) : (
        <Text style={styles.item}>Nenhum item comprado.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
