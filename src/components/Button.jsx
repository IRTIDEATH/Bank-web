import { motion } from 'framer-motion'

const Button = ({ styles }) => (
  <motion.button whileHover={{ scale: 1.1 }} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </motion.button>
);

export default Button