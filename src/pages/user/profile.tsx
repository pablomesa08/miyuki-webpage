import React from 'react';
import UserProfile from '../../components/user/UserProfile';
import Wishlist from '../../components/user/Wishlist';
import Footer from '@/components/ui/navbar/footer';
import NavbarHome from '@/components/ui/navbar/navbarHome';

const profile: React.FC = () => {
  const user = {
    username: 'Natynaro',
    fullName: 'Natalia Naranjo',
    email: 'natynaro@gmail.com',
    address: 'Calle 80 #20-44 apto 666, Ant, Med'
  };

  const wishlistProducts = [
    { id: 1, name: 'Producto 1', format: '#123', color: 'green', price: 100.00 },
    { id: 2, name: 'Producto 2', format: '#124', color: 'blue', price: 150.00 },
    { id: 3, name: 'Producto 3', format: '#125', color: 'purple', price: 200.00 },
  ];
  

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main>
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <UserProfile user={user} />
        </div>
        <div className="col-span-2">
          <Wishlist products={wishlistProducts} />
        </div>
      </div>
      </main>
      <Footer />
    </div>
    
    
  );
};

export default profile;
