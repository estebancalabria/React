import { motion } from "framer-motion";
import { useState } from "react";


const Animated = ({ texto }) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (<div>
        <input type="range" min="1" max="2000" onChange={(e)=>{
            setX(e.target.valueAsNumber)
        }} />
        <input type="range" min="1" max="2000" onChange={(e)=>{
            setY(e.target.valueAsNumber)
        }} />
        <motion.div animate={{ x: x, y:y }}>
            {texto}
        </motion.div>
        <motion.div animate={{ x: ["0px", "300px", "800px", "0px"] }}
           transition={{duration:4}}>
            {texto}
        </motion.div>
    </div>)
}

export default Animated;