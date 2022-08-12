import Filter from "../../component/product-page/filter"
import ProductList from "../../component/product-page/product-list";

const ProductPage = (props) => {
  return (
    <div className="grid grid-cols-12 gap-5 px-5">
      <Filter className="col-span-3 hidden md:block"/>
      <ProductList className="col-span-12 md:col-span-9" items={props.items}/>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps(){
    const items=await fetch("http://127.0.0.1:3080/api/v1/products");
    const jsonItems=await items.json();
    return{
        props:{
            items:jsonItems.data
        }
    }
}