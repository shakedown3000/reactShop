import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

// erst Array, dann return!

const ProductList = () => {
  const productArray = [
    {
      img: "/Product_Picture1.jpg",
      name: "cocooil",
      price: 50,
      link: "#",
    },
    {
      img: "/Product_Picture2.jpg",
      name: "polaroid camera",
      price: 60,
      link: "#",
    },
    {
      img: "/Product_Picture3.jpg",
      name: "shampoo",
      price: 20,
      link: "#",
    },
  ];

  return (
    <section className="wrapper">
      <div className="card-container">
        {productArray.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
