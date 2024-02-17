import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/Postcard';
import ShoppingCart from './components/ShoppingCart';
 
function App() {
  const [courses] = useState([
      { id: 1, 
        name:'SRM T-shirt', 
        price: 499, 
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlZNKvHV19ZU6WP0GXwgP7V7qyqqP9-Uhpg&usqp=CAU'
      },
      { id: 2, 
        name: 'SRM Bag', 
        price: 699, 
        image:'https://www.giftanaindia.com/wp-content/uploads/2023/04/Stylish-Torq-Black-Wildcraft-Backpack-GT2523-02.jpg'
      },
       { id: 3, 
        name: 'SRM Watch', 
        price: 1999, 
        image:'https://www.portronics.com/cdn/shop/products/KronosX4-1200X1200-1.jpg?v=1667972001'
      },
      { id: 4, 
        name: 'SRM Hoodie', 
        price: 799, 
        image:'https://adro.in/cdn/shop/products/H21-M-TKT-SB-F.jpg?v=1672548041&width=480'
      },
      { id: 5, 
        name: 'SRM shoes', 
        price: 2999, 
        image:'https://assets.ajio.com/medias/sys_master/root/20231005/2AnW/651ed5afafa4cf41f52a2c97/-473Wx593H-464535108-black-MODEL.jpg'
      }
     
  ]);
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    
       
    const addCourseToCartFunction = (SRMcourse) => {
      const alreadyCourses = cartCourses
                             .find(item => item.product.id === SRMcourse.id);
      if (alreadyCourses) {
          const latestCartUpdate = cartCourses.map(item =>
              item.product.id === SRMcourse.id ? { 
              ...item, quantity: item.quantity + 1 } 
              : item
          );
          setCartCourses(latestCartUpdate);
      } else {
          setCartCourses([...cartCourses, {product: SRMcourse, quantity: 1}]);
      }
  };

  const deleteCourseFromCartFunction = (SRMcourse) => {
      const updatedCart = cartCourses
                          .filter(item => item.product.id !== SRMcourse.id);
      setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
      return cartCourses
             .reduce((total, item) => 
                         total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
      setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
      course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
      <div className="App">
          <Header searchCourse={searchCourse} 
                           courseSearchUserFunction=
                               {courseSearchUserFunction} />
          <main className="App-main">
              <ProductCard
                  courses={courses}
                  filterCourseFunction={filterCourseFunction}
                  addCourseToCartFunction={addCourseToCartFunction}
              />

              <ShoppingCart
                  cartCourses={cartCourses}
                  deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                  totalAmountCalculationFunction={
                      totalAmountCalculationFunction
                  }
                  setCartCourses={setCartCourses}
              />
          </main>
      </div>
  );
}

export default App;