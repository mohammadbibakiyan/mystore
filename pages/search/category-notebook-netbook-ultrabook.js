import Filter from "./../../component/filter"
import ProductList from "../../component/product-list";

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
    const db=await client.db();
    let result=await db.collection("laptop").find({}).toArray();
    result=JSON.parse(JSON.stringify(result));
    return{
        props:{
            items:result
        }
    }
}