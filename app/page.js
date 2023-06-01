import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  let name= "byun";
  let link ="http://google.com";

  return (
    <div>            
      <h4 style={{color: 'red', fontSize:'30px'}}>APP fresh</h4>
      <h4 className='title'>APP fresh</h4>
      <p className='title-sub'>
        by dev {name}
      </p>      
    </div>    
  )
}


