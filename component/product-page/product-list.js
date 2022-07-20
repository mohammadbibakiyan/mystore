import ProductItem from "./product-item";

const ProductList = (props) => {
  return (
    <div className={`${props.className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 `}>
          {props.items.map(e=><ProductItem key={e._id} {...e}/>)} 
    </div>
  );
};


export default ProductList;

