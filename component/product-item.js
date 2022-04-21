import Link from "next/link"
const ProductItem=(props)=>{
    return(
        <div className="border border-solid border-gray-100 hover:shadow-md p-5 cursor-pointer">
            <Link href={`/product/${props._id}`}>
                <article>
                    <div><img src={props.product_image.cover} alt={props.alt} /></div>
                    <div>
                        <div><h2 className="text-body2-strong">{props.title}</h2></div>
                        <div>rate</div>
                        <div className="text-h5">تومان{props.price}</div>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default ProductItem;
