import { styles } from "../constants/styles"
import Button from "./Button"
import { specials } from "../constants"

const SpecialCard = ({title, description, image}) => {
    return(
        <div className="flex flex-col items-center mx-3 p-6 bg-primary rounded-[4px] my-3 md:my-0
                        border-[2px] border-black hover:border-secondary">
            <img src={image} alt="food-image" className="w-[300px] h-[200px] object-cover rounded-[4px]"/>
            <h4 className={`${styles.heading4} text-white underline`}>
                {title}
            </h4>
            <p className={`${styles.paragraph} max-w-[300px] text-wrap text-center text-dimWhite`}>
                {description}
            </p>
        </div>
    );
}

const Specials = () => {
  return (
    <section id='menu' className="my-8">
        <div className='flex flex-col flex-1'>
            <div className='flex flex-row flex-1 justify-evenly items-center mb-8'>
                <h2 className={styles.heading2}>
                    Specials
                </h2>
                <Button>
                    Order Online
                </Button>
            </div>

            <div className="flex md:flex-row flex-col justify-center">
                {
                    specials.map((val) => {
                        return <SpecialCard {...val} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Specials