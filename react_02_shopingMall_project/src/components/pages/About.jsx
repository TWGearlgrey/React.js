import React from "react";
import {Link, Outlet} from "react-router-dom";

function About({navigate}) {

    return (<>
        <div>
            <button onClick={()=>{navigate("/about/company")}}>Company</button>
            <button onClick={()=>{navigate("/about/terms")}}>Terms</button>
            <h3>회사 정보 페이지</h3>
            <Outlet />
        </div>
    </>);
}
export default About;