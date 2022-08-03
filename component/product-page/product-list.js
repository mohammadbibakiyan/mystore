import ProductItem from "./product-item";

const ProductList = (props) => {
  console.log(props);
  return (
    <div className={`${props.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}>
          {props.items.map(e=><ProductItem key={e._id} {...e}/>)} 
    </div>
  );
};


export default ProductList;

