import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductById, searchProducts } from '../services/api';

// Hook to fetch all products or by category
export const useProducts = (category = null) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to fetch single product by ID
export const useProduct = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};

// Hook to search products
export const useSearchProducts = (query) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => searchProducts(query),
    enabled: !!query && query.length > 0,
    staleTime: 2 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

