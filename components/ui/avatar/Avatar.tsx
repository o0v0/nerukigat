'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export function Avatar(){
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      whileHover={{ rotate: 360 }}
      className='lg:h-[300px] lg:w-[300px] h-[150px] w-[150px] '
    >
      <Image
        height={300}
        width={300}
        src={'/avatar.png'}
        alt="Site Owner Avatar"
        className='aspect-square rounded-full border border-slate-200 dark:border-neutral-800 w-full'
      />
    </motion.div>
  )
}
