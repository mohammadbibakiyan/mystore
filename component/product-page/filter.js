import Dropdown from "../public/dropdown-menu";

const Filter=(props)=>{
    return(
        <div className={`${props.className} card`}>
            {/* <Dropdown title="برند" type="text" list={[["ایسوز","asus"],["اچ پی","hp"],["اپل","apple"],["لنوو","lenovo"],["ایسر","msi"]]}/>
            <Dropdown title="سازنده پردازنده" type="text" list={[["Intel","intel"],["AMD","amd"],["Apple","apple"],["NVIDIA","nvidia"]]}/> */}
        </div>
    )
}

export default Filter;