import React from "react";
import { useParams } from "react-router-dom";
import MainBackground from "../MainBackground";
import Card from "../Card";

function List(props) {

    return (<>
        <MainBackground />
        <Card paintings={props.paintings} />
    </>);
}
export default List;