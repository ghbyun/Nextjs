import Image from "next/image";
//import imgFile from "/public/next.svg"

export default function list() {
    let cos = ['Tomato','Pasta','Coconut'];    
    let arr = [2,3,4]
    arr.map((a,i)=>{

    })

    return (
      <div>        
        <h4 className='title'>상품목록</h4>
        {
            cos.map((a,i)=>{
                return(
                    <div className="food" key={i}>
                        {/*<Image src={imgFile} className="food-img"/>*/}
                        <img src="/next.svg" className="food-img" />
                        <h4>{cos[i]} $40</h4>
                        <h4>{a} $40</h4>
                    </div>
                )
            })
        }                
      </div>    
    )
  }