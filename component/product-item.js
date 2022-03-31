const ProductItem=(props)=>{
    return(
        <div className="border border-solid border-gray-100 hover:shadow-md p-5">
            <a href="/">
                <article>
                    <div><img className="border-0" src={props.product_image.cover} alt={props.alt} /></div>
                    <div>
                        <div><h2 className="text-body2-strong">{props.title}</h2></div>
                        <div>rate</div>
                        <div className="text-h5">تومان{props.price}</div>
                    </div>
                </article>
            </a>
        </div>
    )
}

export default ProductItem;
