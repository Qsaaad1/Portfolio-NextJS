import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project2({}: Props) {
  return (
    <div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80">
        
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 xl:p-64 h-screen ">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg"
              src="https://c4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-preview.jpg"
            />
            <div className="space-y-10 px-0 md:px-10  max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#EF5350]/60">
                  Project 1
                </span>{" "}
                : WhatsApp Clone{" "}
              </h4>

              <p className="text-lg text-center md:text-left">
                My name is Giovanni Georgo, but my friends call me Georgo... Now
                enjoy Amazon Clone App using ReactJS & NodeJS with Context API
                and deployed on Firebase...
              </p>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Project2