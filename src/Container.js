import React from "react";
import A from "./Header.js";
import B from "./data.js";
import C from "./Footer.js";
import "./style.css";

const Container = () => {
    return (
        <>
            <A />
            {
            /*{data.map(x=>{
                return (
                    <div>
                        <B src={x.src} alt={x.alt} dealName={x.dealName}/>
                        </div>
                )
            })}*/

            }
        <B/>
        <C/>
        </>
    )
} 

export default Container