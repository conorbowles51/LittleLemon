import { styles } from "../constants/styles"
import restaurantfood from "../assets/icons/restaurantfood.jpg"
import Button from "./Button"

const Hero = () => {
  return (
    <section id='home' className='w-full flex flex-1 p-6 justify-center bg-primary border-b-[2px] border-black mr-10'>
        <div className='flex sm:flex-row flex-col justify-center items-center'>
            <div className='flex flex-col justify-center'>
                <h2 className={`${styles.heading2} text-secondary p-0`}>Little Lemon</h2>
                <h4 className={`${styles.heading4} text-dimWhite p-0`}>Chicago</h4>

                <p className={`${styles.paragraph} max-w-[470px] text-white`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Button style="mt-5">Reserve a Table</Button>
            </div>

            <div className="ml-10">
                <img src={restaurantfood} className="h-[300px] w-[300px] object-cover rounded-full border-[2px] "></img>
            </div>
        </div>
    </section>
  )
}

export default Hero