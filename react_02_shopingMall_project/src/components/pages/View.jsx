import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import NotFindDataError from "./NotFindDataError";

let BuyBtn = styled.button`
  margin-top: 20px;
  color: white;
  background-color: #f33d3d;
  border: 1px solid grey;
  border-radius: 5%;
`
/*
let YelloBtn = styled.button`
  background: ${ props => props.bg };
  color: black;
  padding: 10px;
`
<YelloBtn bg="color"/>

let NewBtn = styled.button(YelloBtn);
*/

function View(props) {
    let [alert, setAlert] = useState(true)
    useEffect(() => {
        /*
        여기 적은 코드는 랜더링이 모두 끝난 후 실행 됨
        useEffect 안에 적는 코드는
         - 연산이 어렵고 오래걸리는 경우
         - 서버에서 데이터를 가져오는 경우
         - 타이머를 사용하는 경우
        */
        setTimeout(()=>{ setAlert(false) }, 2000)
    }, []);
    /*
        []를 비워두면 단 한번만 useEffect 실행,
        채우면 해당 state가 실행될 때만 useEffect 실행
        선언을 안 해두면 페이지 랜더링이 끝난 후 실행

        useEffect 안에 return () => {} 할 시, useEffect 동작 전에 실행 됨.
        그래서 이 위치에 cleanUp 코드를 자주 작성,
    */
    let { id } = useParams();


    if(!props.painting[id]) return <NotFindDataError />
    return (<>
        <div className="content-view">
            {
                alert == true
                ? <div className="alert alert-warning">2초 이내 구입시 할인</div>
                : null
            }
            <img src={process.env.PUBLIC_URL + props.painting[id].url} alt={props.painting[id].title} />
            <h4>{props.painting[id].title}</h4>
            <p>{props.painting[id].content}</p>
            <p>{props.painting[id].price}</p>
            <BuyBtn>구매하기</BuyBtn>
        </div>
    </>);
}
export default View;