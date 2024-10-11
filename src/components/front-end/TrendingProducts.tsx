"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  category: string;
  price: number;
}

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get_products", {
        headers: {
          "Cache-Control": "no-cache",
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Products </h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((item: IProduct) => (
          <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            category={item.category}
            title={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
