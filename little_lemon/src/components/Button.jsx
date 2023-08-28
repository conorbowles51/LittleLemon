import { styles } from "../constants/styles"

const Button = ({children, style}) => {
  return (
    <div>
        <button className={`${styles.button} ${style}`}>
            {children}
        </button>
    </div>
  )
}

export default Button