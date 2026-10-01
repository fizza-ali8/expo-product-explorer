import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductCard from './components/ProductCard';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', category: 'Audio', price: 79.99 },
  { id: '2', name: 'Smart Watch', category: 'Wearables', price: 149.5 },
  { id: '3', name: 'USB-C Hub', category: 'Accessories', price: 39.0 },
  { id: '4', name: 'Laptop Stand', category: 'Desk', price: 45.25 },
  { id: '5', name: 'Bluetooth Speaker', category: 'Audio', price: 59.99 },
];

const CATEGORIES = ['All', 'Audio', 'Wearables', 'Accessories', 'Desk'];

export default function App() {
  // intentional CI break
  const broken = {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const visibleProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.studentName}>Fizza Ali</Text>
      <Text style={styles.rollNo}>Roll No: 22i-8787</Text>
      <Text style={styles.subtitle}>
        Showing {visibleProducts.length} product
        {visibleProducts.length === 1 ? '' : 's'}
      </Text>

      <View style={styles.filters}>
        {CATEGORIES.map((category) => {
          const isActive = category === selectedCategory;
          return (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[styles.chip, isActive && styles.chipActive]}
            >
              <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        data={visibleProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            category={item.category}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No products in this category.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#102a43',
    marginBottom: 8,
  },
  studentName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#243b53',
  },
  rollNo: {
    fontSize: 16,
    color: '#486581',
    marginTop: 2,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#627d98',
    marginBottom: 12,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#bcccdc',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f4f8',
  },
  chipActive: {
    backgroundColor: '#102a43',
    borderColor: '#102a43',
  },
  chipText: {
    fontSize: 13,
    color: '#334e68',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  list: {
    paddingBottom: 32,
  },
  empty: {
    textAlign: 'center',
    color: '#829ab1',
    marginTop: 24,
  },
});
