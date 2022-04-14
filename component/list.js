import { useState } from "react";


const List=(props)=>{
    const [show,setShow]=useState(false);
    return (
        <div className="">
            {props.children[0]}
            {show&&props.children.slice(1)};
        </div>
    )
}
export default List;