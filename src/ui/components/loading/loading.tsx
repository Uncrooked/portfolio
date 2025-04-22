"use client"

//npm
import { motion } from "motion/react"

//styles
import "./loading.css";

export default function Loading(){
    return(
        <motion.div className="loading">
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,repeat:Infinity}} className="bar"></motion.div>
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,delay:1,repeat:Infinity}} className="bar"></motion.div>
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,repeat:Infinity}} className="bar"></motion.div>
        </motion.div>
    )
}