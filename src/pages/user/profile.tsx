import React from 'react';
import UserProfile from '../../components/user/UserProfile';
import Wishlist from '../../components/user/Wishlist';
import Footer from '@/components/ui/navbar/footer';
import NavbarHome from '@/components/ui/navbar/navbarHome';
import { ColorSet, Format } from "@/types/productType";

const profile: React.FC = () => {
  const user = {
    username: 'Natynaro',
    fullName: 'Natalia Naranjo',
    email: 'natynaro@gmail.com',
    address: 'Calle 80 #20-44 apto 666, Ant, Med',
  };

  const wishlistProducts = [
    {
      id: 1,
      name: 'Producto 1',
      format: '#123',
      color: 'green',
      price: 100.00,
      image: '/Images/backround/verde.png',
    
      quantity: 1,
      colorSets: [
        { id: '1', name: 'Set 1', colors: ['#FF0000', '#00FF00', '#0000FF'] }
      ],
      formats: [
        { id: '1', name: 'Formato 1', price: 20 },
        { id: '2', name: 'Formato 2', price: 25 },
      ],
    },
    {
      id: 2,
      name: 'Producto 2',
      format: '#124',
      color: 'blue',
      price: 150.00,
      image: '/Images/backround/azul.png',
      quantity: 2, // Añadir la cantidad para este producto
      colorSets: [
        { id: '3', name: 'Set 3', colors: ['#FFA500', '#800080', '#008000'] },
      ],
      formats: [
        { id: '3', name: 'Formato 3', price: 30 },
      ],
    },
    {
      id: 3,
      name: 'Producto 3',
      format: '#125',
      color: 'purple',
      price: 200.00,
      image: '/Images/backround/morado.png',
      quantity: 3, // Añadir la cantidad para este producto
      colorSets: [
        { id: '4', name: 'Set 4', colors: ['#FFC0CB', '#800000', '#808000'] },
      ],
      formats: [
        { id: '4', name: 'Formato 4', price: 35 },
      ],
    },
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
