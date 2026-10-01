import { StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ name, price, category }) {
  return (
    <View style={styles.card} testID={`product-${name}`}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f4f7fb',
    borderColor: '#d7e0ea',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#102a43',
    marginBottom: 4,
  },
  category: {
    fontSize: 13,
    color: '#627d98',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0b6e4f',
  },
});
