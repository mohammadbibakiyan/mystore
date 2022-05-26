import Filter from "../../component/product-page/filter"
import ProductList from "../../component/product-page/product-list";

import {connectToDatabase} from "./../../lib/db";

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
    const client=await connectToDatabase();
    const db=client.db();
    let result=await db.collection("laptop").aggregate([{$project:{_id:1,title:1,"product_image.cover":1,alt:1,price:1,"comments.rate":1}}]).toArray();
    result=JSON.parse(JSON.stringify(result));
    return{
        props:{
            items:result
        }
    }
}