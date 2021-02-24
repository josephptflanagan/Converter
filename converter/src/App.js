import React, { useState } from 'react';
import Nav from './components/Nav';
import Converters from './components/Converters';
import About from './components/About';
import Footer from "./components/Footer";

function App() {

  const [categories] = useState([
    { name: 'base', description: 'Binary to Decimal to Hexadecimal' },
    { name: 'color', description: 'RGB to Hex to HSL to HSV' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [currentPage, handlePageChange] = useState('Converters');

  const renderPage = () => {
    switch (currentPage) {
      case 'Base':
        return <Converters currentCategory={categories[0]}></Converters>;
      case 'Color':
        return <Converters currentCategory={categories[1]}></Converters>;
      case 'About':
        return <About />;
      default:
        return <Base />;
    }
  };

  return (
    <div className="page-container">
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Nav>
      <main>

        <div>{renderPage(currentPage)}</div>

      </main>
      <Footer />
    </div>
  );
}

export default App;