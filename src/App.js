import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import PromotionalBanner from './components/PromotionalBanner';
import FeaturesBar from './components/FeaturesBar';
import StorageBanner from './components/StorageBanner';
import Collections from './components/Collections';
import PromotionalSection from './components/PromotionalSection';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedBlogs from './components/FeaturedBlogs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import ProductsPage from './components/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import SuccessPage from './components/SuccessPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      // Disable body scroll when cart is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scroll when cart is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleNavClick = (category) => {
    setActiveCategory(category);
    setShowProducts(true);
  };

  const handleBackToHome = () => {
    setActiveCategory(null);
    setShowProducts(false);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    console.log('handleCheckout called');
    setIsCartOpen(false);
    setShowSuccessPage(true);
  };

  const handleBackFromSuccess = () => {
    setShowSuccessPage(false);
    setActiveCategory(null);
    setShowProducts(false);
    setSelectedProduct(null);
  };

  return (
    <Provider store={store}>
      {showSuccessPage ? (
        <SuccessPage onClose={handleBackFromSuccess} redirectTo={handleBackFromSuccess} />
      ) : selectedProduct ? (
        <ProductDetailsPage 
          product={selectedProduct}
          onClose={handleBackToHome}
          onCartClick={handleCartClick}
          onNavClick={handleNavClick}
          activeCategory={activeCategory}
          isCartOpen={isCartOpen}
          onCloseCart={handleCloseCart}
          onProductClick={handleProductClick}
          onCheckout={handleCheckout}
        />
      ) : showProducts ? (
        <ProductsPage 
          isOpen={showProducts} 
          onClose={handleBackToHome}
          onNavClick={handleNavClick}
          onCartClick={handleCartClick}
          activeCategory={activeCategory}
          isCartOpen={isCartOpen}
          onCloseCart={handleCloseCart}
          onProductClick={handleProductClick}
          onCheckout={handleCheckout}
        />
      ) : (
        <div className="min-h-screen bg-gray-50">
          <Header 
            onCartClick={handleCartClick} 
            onNavClick={handleNavClick} 
            activeCategory={null}
            onProductClick={handleProductClick}
            onGoHome={handleBackToHome}
          />
          <div className="pt-[190px] sm:pt-[210px] md:pt-[230px]">
            <PromotionalBanner />
            <FeaturesBar />
            <StorageBanner />
            <Collections onNavClick={handleNavClick} />
            <PromotionalSection />
            <WhyChooseUs />
            <FeaturedBlogs />
            <Testimonials />
          </div>
          <Footer />
          <ShoppingCart isOpen={isCartOpen} onClose={handleCloseCart} onCheckout={handleCheckout} />
        </div>
      )}
    </Provider>
  );
}

export default App;
