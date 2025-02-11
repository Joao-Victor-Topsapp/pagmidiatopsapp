import React, { useEffect, useState } from 'react'
import Zap from "~/Imgs/Zap.png"
import TelefoneAzul from "~/Imgs/TelefoneAzul.png"
interface props{
    number:string|number,
    open:boolean
    reference?:React.RefObject<HTMLDivElement>
}
export default function Dialog({number, open, reference}:props) {
    const makeWhatsappNumber = (number:string|number) => {
        return `https://api.whatsapp.com/send?phone=${number}`
    }
    console.log(open)
    return (
        <dialog className={`
            fixed
            w-screen
            h-screen
            z-50
            backdrop-filter
            backdrop-blur-sm
            bg-opacity-10
            bg-gray-800
            place-items-center
            ${open ? 'grid' : 'hidden'}   
        `}
        open={open}
        
        >
            <div className='bg-white w-[clamp(320px,100%-0.25rem,25rem)] rounded-2xl overflow-hidden flex flex-col justify-between relative' ref={reference}>
                <div className='grid grid-cols'>
                    <a className='px-4 py-3 items-center grid grid-cols-12 hover:bg-gray-100 transition-colors' href={makeWhatsappNumber(number)}>
                        <img src={Zap} alt="" className='h-12 w-12 col-span-2 object-cover'/>
                        <div className='ml-2 col-span-10'>
                            <h1 className='text-lg font-semibold'>WhatsApp</h1>
                            <p className='text-sm text-gray-500'>Envie uma mensagem</p>
                        </div>
                    </a>
                    <a className='px-4 py-3 items-center grid grid-cols-12 hover:bg-gray-100 transition-colors' href={"tel:"+number}>
                        <img src={TelefoneAzul} alt="" className='h-10 w-10 grayscale brightness-50 col-span-2 object-cover'/>
                        <div className='ml-2 col-span-10'>
                            <h1 className='text-lg font-semibold'>Celular</h1>
                            <p className='text-sm text-gray-500'>Ligar para o número</p>
                        </div>
                    </a>
                </div>
            </div>

        </dialog>
    )
}
