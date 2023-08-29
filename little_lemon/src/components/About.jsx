import { styles } from "../constants/styles"
import ma1 from "../assets/icons/ma1.jpg"
import ma2 from "../assets/icons/ma2.jpg"

const About = () => {
  return (
    <section id="about" className="mt-8">
        <div className='flex flex-col sm:flex-row justify-center items-center'>
            <div className='flex flex-col sm:mr-3'>
                <h2 className={`${styles.heading2} text-primary p-0`}>
                    Little <span className={`${styles.heading2} text-secondary p-0`}>Lemon</span>
                </h2>
                <h4 className={`${styles.heading4} text-grey p-0 top-0`}>Chicago</h4>
                <p className={`${styles.paragraph} max-w-[470px] text-gray`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className='flex flex-col sm:ml-3'>
                <img src={ma1} className="w-[400px] h-[200px] object-cover my-4 border-[2px] border-black"/>
                <img src={ma2} className="w-[400px] h-[200px] object-cover my-4 border-[2px] border-black"/>
            </div>
        </div>
    </section>
  )
}

export default About