import "./ProductCard.css";

interface articleArray {
  img: string;
  name: string;
  price: number;
  link: string;
}

const ProductCard: React.FC<articleArray> = (props) => {
  return (
    <div className="product-card">
      <img src={props.img} alt="article picture" className="product-image" />
      <p className="product-name">{props.name}</p>
      <p className="product-price">$ {props.price}</p>
      <button className="product-link">
        <a href={props.link}>Buy Now</a>
      </button>
    </div>
  );
};

export default ProductCard;
