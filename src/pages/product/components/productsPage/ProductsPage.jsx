import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categories } from '../../../../data/products';

import ProductFilter from '../productFilter/ProductFilter';
import ProductSection from '../productSection/ProductSection';

import './productsPage.scss';

const ProductsPage = () => {
  const location = useLocation();

  // 🔥 Get category from navigation
  const initialCategory = location.state?.category || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

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
        {selectedCategory === 'all' ? (
          categories.map((cat) => {
            const categoryProducts = products.filter(
              (p) => p.category === cat.id,
            );

            if (!categoryProducts.length) return null;

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
          <ProductSection
            key={selectedCategory} // 🔥 resets carousel
            title={categories.find((c) => c.id === selectedCategory)?.title}
            subtitle={
              categories.find((c) => c.id === selectedCategory)?.subtitle
            }
            products={filteredProducts}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
