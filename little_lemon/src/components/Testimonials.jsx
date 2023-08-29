import { styles } from "../constants/styles"
import { testimonials } from "../constants";

const TestimonialCard = ({image, comment}) => {
  return(
    <div className="flex flex-col px-3 py-6 items-center bg-white mx-4 rounded-[8px] border-[2px] border-black mt-4 sm:mt-0">
      <img src={image} className="w-[150px] h-[150px] border-[2px] border-grey mb-2 rounded-[8px] object-cover"></img>
      <p className={`${styles.paragraph} italic text-wrap max-w-[150px] text-center text-black`}>{`"${comment}"`}</p>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8 mt-10 bg-primary border-y-[2px] border-black">
      <h2 className={`${styles.heading2} w-full flex justify-center text-white`}>Testimonials</h2>

      <div className="flex flex-col sm:flex-row flex-1 justify-center mt-8">
        {
          testimonials.map((val) => (
            <TestimonialCard {...val}/>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials