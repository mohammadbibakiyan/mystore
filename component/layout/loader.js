import classes from "./loader.module.css";

const Loader=()=>{
    return(
        <div className={classes.loading}>
            <div className={classes.arc}></div>
            <div className={classes.arc}></div>
            <div className={classes.arc}></div>
        </div>  
    )
}
export default Loader;