import Link from "next/link";
const ProductItem=(props)=>{
    return(
        <div className="border border-solid border-neutral-100 hover:shadow-md p-5 cursor-pointer">
            <Link href={`/product/${props._id}`}>
                <article>
                    <div className="h-8">{props.price.discount_percent>0&&<span className="font-Kordi text-primary-700">فروش ویژه</span>}</div>
                    <div><img src={props.images?.main} alt={props.title_fa}/></div>
                    <div>
                        <div><h2 className="text-body2-strong line-clamp-1">{props.title_fa}</h2></div>
                        <div className="flex justify-end items-center"><p className="text-body2-strong text-neutral-700">{props.ratings_average}</p><img src="/icons/star.png"/></div>
                        <div>
                            <div className="flex items-center justify-between">
                                {props.price.discount_percent>0&&<div className="px-1 text-white bg-primary-700 text-body2-strong flex justify-center items-center rounded-full w-14 h-8">{props.price.discount_percent}%</div>}
                                {props.price.discount_percent==0&&<div></div>}
                                <div className="text-h5"><span>{((props.price.rrp_price)-(props.price.rrp_price*props.price.discount_percent/100)).toLocaleString()}</span><span className="align-top text-caption">تومان</span></div>
                            </div>
                            {props.price.discount_percent>0&&<div className="text-neutral-300 text-left text-body-2 line-through "><span>{(props.price.rrp_price).toLocaleString()}</span><span>تومان</span></div>}
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default ProductItem;
