const ProductSpecifications=(props)=>{
    return(
        <div>
            <div className="py-5 hidden md:block"><h2 className="text-h5 text-grow-900 inline border-0 border-b-2 border-red-500 border-solid">مشخصات</h2></div>
            <div className="flex flex-col md:flex-row">
                <p className="text-h5 ml-16">مشخصات</p>
                <div className="flex-grow">
                    {props.specifications.map((e,i)=><div className="flex items-center text-body-1" key={i}>
                        <div className="w-96">
                            <p className="py-3 px-2 text-gray-500  ml-6">{e[0]}</p>
                        </div>
                        <div className="border-0 border-b-2 border-solid w-full border-gray-100">
                            <p className="color-gray-900">{e[1]}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default ProductSpecifications;