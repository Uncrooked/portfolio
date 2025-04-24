"use client"

//npm
import { motion } from "motion/react"

//styles
import "./assetLoading.css";

export default function AssetLoading(){
    return(
        <motion.div className="loading">
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,repeat:Infinity}} className="bar"></motion.div>
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,delay:1,repeat:Infinity}} className="bar"></motion.div>
            <motion.div animate={{scaleY:[1,4,1]}} transition={{duration:2,repeat:Infinity}} className="bar"></motion.div>
        </motion.div>
    )
}