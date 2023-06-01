import {age, name,cartList} from './data.js'

export default function Cart() {
      return (
      <div>        
        <h4 className="title">Cart</h4>
            {
            /*
                <div className="cart-item">
                    <p>상품명 {age}</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>
            */
            }   
            <CartItme/>
      </div>    
    )
  }



  /*
    Next.js 컴포넌트 종류
    1. 서버 컴포넌트 
      - 'use client' 선언 없이 만들어진 컴포넌트 (ex : function ~~~)
      - javascript 기능을 넣을 수 없음 (ex : <p onclick="" > 상품명</p> : error!!!!  ) 
      - 로딩 속도가 빠름 , 검색 엔진 노출 이점 
    2. 클라이언트 컴포넌트
      - 'use client' 선언
      - javascript 기능 넣을 수 있음, useState 도 사용 가능함.
      - 로딩 속도가 느림, html을 react 분석(hydration 과정 필요) html 로딩 속도 느려질 가능성 있음.
  */

  function CartItme(){

    let list = cartList.map( (a, i) =>{
        console.log(a);
    })

    return(
        cartList.map( (a, i) =>{
            return(
                <div className="cart-item" key={i}>
                    <p>상품명 : {a}</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>
            )
        })
    )
  }