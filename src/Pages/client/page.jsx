// import Image from 'next/image'
import styles from './page.module.css'
import ItemCard from '../../Components/client/item-card/item-card'

export default function Home() {
  return (
    <div>
    
    <div className='container App-header'>
    <h1 className='text-center mt-5'>අකුරු හුරුව</h1>
    <div className='row mt-5'>
      <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
        <ItemCard footer="අකුරු ලියමු" href="/write" src={require("./Images/1.jpg")}/>
      </div>
      <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
        <ItemCard footer="අකුරු උඩුගත කරමු" href="/capture" src={require("./Images/3.webp")}/>
      </div>
    </div>
    </div>
    </div>
  )
}
