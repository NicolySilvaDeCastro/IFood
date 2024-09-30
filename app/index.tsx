import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IFOME</Text>
      </View>

      <View style={styles.item1}>
        <View style={styles.itemContent}>
        <View>
          <Text style={styles.title2}>Hamburguer</Text>
          <Text>Kobrasol</Text>
          <Text>R$28,00</Text>
          <Pressable></Pressable>
          </View>
        <View>
          <Image
            source={{ uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRRto3IlY56MlAIOAvXHvPEVxBDVzG1uz1zULEBYdJ-I4Aa-xOyPEVvv7fmIjLnxaOz' }} // Substitua pela URL ou caminho da sua imagem
            style={styles.image}
          />
          </View>
        </View>
      </View>

      <View style={styles.item2}>
        <Text style={styles.title2}>Coxinha</Text>
      </View>

      <View style={styles.item3}>
        <Text style={styles.title2}>Pão de Queijo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    flex: 1,
    backgroundColor: "orange",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  item1: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // Espaço entre o título e a descrição
  },
  image: {
    width: 100, // Defina a largura da imagem
    height: 100, // Defina a altura da imagem
    marginLeft: 10, // Espaço entre o texto e a imagem
    gap: 20,
    padding: 20
  },
  title2: {
    fontSize: 20,
    fontStyle: "bold",
  },
  item2: {
    flex: 1,
    backgroundColor: "white",
  },
  item3: {
    flex: 1,
    backgroundColor: "white",
  },
});
