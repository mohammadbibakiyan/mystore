import Link from "next/link"
const ProductItem=(props)=>{
    const rateAvg=((props.comments.map(e=>+e.rate).reduce((a,b)=>a+b,0))/(props.comments.length||1)).toFixed(1);
    return(
        <div className="border border-solid border-neutral-100 hover:shadow-md p-5 cursor-pointer">
            <Link href={`/product/${props._id}`}>
                <article>
                    <div><img src={props.product_image.cover} alt={props.alt} /></div>
                    <div>
                        <div><h2 className="text-body2-strong line-clamp-1">{props.title}</h2></div>
                        <div className="flex justify-end items-center"><p className="text-body2-strong text-neutral-700">{rateAvg}</p><img src="/icons/star.png"/></div>
                        <div>
                            <div className="flex items-center justify-between">
                                {props.price.discount>0&&<div className="px-1 text-white bg-primary-700 text-body2-strong flex justify-center items-center rounded-full w-14 h-8">{props.price.discount}%</div>}
                                {props.price.discount==0&&<div></div>}
                                <div className="text-h5"><span>{((props.price.original)-(props.price.original*props.price.discount/100)).toLocaleString()}</span><span className="align-top text-caption">تومان</span></div>
                            </div>
                            {props.price.discount>0&&<div className="text-neutral-300 text-left text-body-2 line-through "><span>{(props.price.original).toLocaleString()}</span><span>تومان</span></div>}
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default ProductItem;
