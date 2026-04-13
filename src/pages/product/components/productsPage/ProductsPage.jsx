import { useState } from 'react';
import { products, categories } from '../../../../data/products';
import ProductFilter from '../productFilter/ProductFilter';
import ProductCard from '../productCard/ProductCard';
import ProductSection from '../productSection/ProductSection';

import './productsPage.scss';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtered products (used only when category is selected)
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className='ProductsPage'>
      {/* 🔹 Header */}
      <div className='productsHeader'>
        <h1>Our Products</h1>

        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* 🔹 Content */}
      <div className='productsContent'>
        {/* ✅ DEFAULT VIEW → GROUPED */}
        {selectedCategory === 'all' ? (
          categories.map((cat) => {
            const categoryProducts = products.filter(
              (p) => p.category === cat.id,
            );

            if (categoryProducts.length === 0) return null;

            return (
              <ProductSection
                key={cat.id}
                title={cat.title}
                subtitle={cat.subtitle}
                products={categoryProducts}
              />
            );
          })
        ) : (
          /* ✅ FILTERED VIEW → FLAT GRID */
          <div className='productsGrid'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
