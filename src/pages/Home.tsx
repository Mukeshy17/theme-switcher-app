import { useEffect, useState } from 'react';
import Card from './Card';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className="pt-20 p-4 main-content">
      <div className="sidebar hidden md:block">Sidebar</div>
      <div className="content-area">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
