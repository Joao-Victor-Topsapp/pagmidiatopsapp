import TPLogo from './Imgs/TPLogo.png'
import Clickable from './Template/Button/Clickable'
import Planilha from './Imgs/Planilha.png'
import TelefoneAzul from './Imgs/TelefoneAzul.png'
import Zap from './Imgs/Zap.png'
import icoWeb from './Imgs/icoWeb.png'
import icoFace from './Imgs/icoFace.png'
import icoInsta from './Imgs/icoInsta.png'
import ImgDupla from './Imgs/ImgDupla.png'
import Youtube from './Imgs/Youtube.png'

import { useEffect, useRef, useState } from 'react'
import Modal from './Template/Dialog/Modal'
//lembrar de mudar os links do instagram e facebook!
function App() {
  const [numberState, setNumberState] = useState<string|number>('')
  const [whatsappNumber, setWhatsappNumber] = useState<string|number>('')
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const openModal = (number:string|number, whatsappNumber = number) => {
    setNumberState(number)
    setWhatsappNumber(whatsappNumber)
    setDialogOpen(true)
  }
  const makeWhatsappNumber = (number:string|number) => {
    return `https://api.whatsapp.com/send?phone=55${number}`
}
  return(
    <>
    <Modal
      state={[dialogOpen, setDialogOpen]}
    >
      <div className='bg-white rounded-2xl overflow-hidden flex flex-col justify-between z-50'>
            <div className='grid grid-cols'>
              <a className='px-4 py-3 items-center grid grid-cols-12 hover:bg-gray-100 transition-colors' href={makeWhatsappNumber(whatsappNumber)}>
                  <img src={Zap} alt="" className='h-12 w-12 col-span-2 object-cover'/>
                  <div className='ml-2 col-span-10'>
                      <h1 className='text-lg font-semibold'>WhatsApp</h1>
                      <p className='text-sm text-gray-500'>Envie uma mensagem</p>
                  </div>
              </a>
              <a className='px-4 py-3 items-center grid grid-cols-12 hover:bg-gray-100 transition-colors' href={"tel:"+numberState}>
                  <img src={TelefoneAzul} alt="" className='h-10 w-10 grayscale brightness-50 col-span-2 object-cover'/>
                  <div className='ml-2 col-span-10'>
                      <h1 className='text-lg font-semibold'>Telefone</h1>
                      <p className='text-sm text-gray-500'>Ligar para o número</p>
                  </div>
              </a>
          </div>
      </div>
    </Modal>
    <main className='w-screen h-screen bg-gradient-to-r from-[#28aae3] to-[#004f85]'>
      <section className="flex flex-col justify-around pt-0 lg:pt-36 items-center mt-auto w-full h-full relative">
        <img src={TPLogo} alt="" className='max-w-[clamp(250px,100vw-25px,600px)]'/>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 justify-around gap-5 xl:gap-7 pl-2 sm:pl-0 ">
          <Clickable
            url="https://api.whatsapp.com/send?phone=5566996384467"
            texto='edson ramos'
            imagem={Zap}
            label="comercial topsapp"
          />
          <Clickable
            url="https://api.whatsapp.com/send?phone=5566992838037"
            texto='romário lima'
            imagem={Zap}
            label="comercial topsapp"
          />
          <Clickable
            url="https://api.whatsapp.com/send?phone=556632110010"
            texto='suporte'
            imagem={ImgDupla}
            onClick={() => openModal("06632110010", "6632110010")}
          />
          <Clickable
            url="tel:066996852854"
            texto='suporte de plantão'
            imagem={TelefoneAzul}
          />
        </div>
        <a href="https://www.topsapp.com.br" className='border-[#2eaeea] rounded-md border-[1px] text-white bg-[#0191d9] hover:brightness-105 transition-all py-2 px-24 md:px-36 text-lg flex justify-center items-center gap-2'>
          <img src={icoWeb} alt=""/>
          <span>SITE</span>
        </a>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/topsapp10" className='w-14 h-14'>
            <img src={icoFace} alt=""/>
          </a>
          <a href="https://www.instagram.com/topsapp10" className='w-14 h-14'>
            <img src={icoInsta} alt=""/>
          </a>
          <a href="https://www.youtube.com/@TopSappTV" className='w-14 h-14'>
            <img src={Youtube} alt=""/>
          </a>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
