import logo from '../assets/icons/Logo.svg'
import { styles } from '../constants/styles'

const Footer = () => {
  return (
    <section id="footer" className=' my-[50px] py-[50px] border-t-[2px] border-black'>
        <div className='sm:flex-row flex-col flex justify-center sm:items-start items-center'>
            <img src={logo} alt='logo' className='w-[200px] h-[100px]  px-6'></img>

            <div className='flex flex-col justify-center sm:items-start items-center px-6'>
                <a className={`${styles.paragraph}`}>Home</a>
                <a className={`${styles.paragraph}`}>About</a>
                <a className={`${styles.paragraph}`}>Reserve a table</a>
                <a className={`${styles.paragraph}`}>Menu</a>
            </div>

            <div className='flex flex-col justify-center sm:items-start items-center px-6'>
                <a className={`${styles.paragraph}`}>Email</a>
                <a className={`${styles.paragraph}`}>Phone</a>
            </div>

            <div className='flex flex-col justify-center sm:items-start  items-center px-6'>
                <a className={`${styles.paragraph}`}>Facebook</a>
                <a className={`${styles.paragraph}`}>Instagram</a>
            </div>
        </div>

        <p className={`${styles.paragraph} flex justify-center items-center mt-10`}>Copyright Little Lemon 2023</p>
    </section>
  )
}

export default Footer