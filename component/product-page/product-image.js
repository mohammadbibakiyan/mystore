import { useState } from "react";
import { showAlert } from "../../lib/showAlert";

const ProductImage=(props)=>{
    const [imageUrl,setImageUrl]=useState(props.imageCover);
    const [isFavorite,setIsFavorite]=useState(props.isFavorite);

    const favoriteProductHadnler=async()=>{
        try{
            const {productId}=props;
            const response=await fetch(`http://127.0.0.1:3080/api/v1/products/${productId}/favorite/${isFavorite?"remove":"add"}`,{
                method:"GET",
                credentials:"include"
            });
            const result=await response.json();
            showAlert(result.message, result.status);
            if (result.status !== "success") throw new Error(result.message);
            setIsFavorite(prevState=>!prevState)
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex lg:flex-col gap-4 min-w-10 justify-end lg:justify-start">
                    <img src={`/icons/favorite${isFavorite?"-fill":""}.svg`} className="w-10" onClick={favoriteProductHadnler}/>
                    <img src="/icons/share.svg" className="w-10"/>
                </div>
                <div><img className="hover:" src={imageUrl} alt={props.title}/></div>
            </div>
            <div className="flex h-32 gap-3 mt-5 mb-3">
                <img className="card" onClick={()=>setImageUrl(props.imageCover)} src={props.imageCover}/>
                {props.images.map(e=><img className="card" onClick={()=>setImageUrl(e)} src={e}/>)}
                </div>
        </div>
    )
};
export default ProductImage; 