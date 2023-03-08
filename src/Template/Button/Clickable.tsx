import { useEffect, useRef, useState } from 'react'
interface props{
    texto: string,
    imagem: string
    url:string
    label?:string
    onClick?:() => void
}
export default function Clickable({
    texto,
    imagem,
    url,
    label,
    onClick
}:props) {
    const imageRef = useRef<HTMLImageElement>(null)
    const [imageWidth, setImageWidth] = useState(0)

    useEffect(() => {
        if(imageRef.current){
            imageRef.current.addEventListener('load', () => {
                setImageWidth(imageRef.current!.width);
            });
        }
    }, [imageRef.current])

    const styles = {
        paddingLeft: `calc(${imageWidth}px - 0.5rem)`
    }
    const clickHandler = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if(onClick){
            e.preventDefault()
            onClick()
        }
    }
    return (
    <a className='' href={url} onClick={clickHandler}>
        <div className='flex items-center group'>
            <div className="rounded-full min-w-20 h-20 z-10 " >
                <img src={imagem} alt="" className='h-full object-contain' ref={imageRef}/>
            </div>
            <div className='text-lg lg:text-md xl:text-lg  border-[#36b4ee] border-[1px] h-12 group-hover:brightness-105 rounded-r-lg group-hover:rounded-r-xl transition-all relative -left-2 bg-[#0191d9] uppercase text-white font-semibold text-md justify-center flex items-center p-4 px-14 xl:px-14 flex-1'>
                {texto}
            </div>
        </div>
        <div className="text-white font-semibold text-sm  w-full uppercase flex justify-center  -mt-3" style={styles}>
            <span className=''>
                {label}
            </span>
        </div>
    </a>
    )
}
