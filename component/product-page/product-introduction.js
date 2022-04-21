const ProductIntroduction=(props)=>{
    return(
        <div>
            <article>
                <div className="py-5"><h2 className="text-h5 inline p-2  border-b-2 md:border-solid border-0 border-red-500">معرفی</h2></div>
                <div className="text-body-1 text-gray-800">{props.introduction}</div>
            </article>
        </div>
    )
}
export default ProductIntroduction;