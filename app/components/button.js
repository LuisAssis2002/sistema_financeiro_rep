"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'
 

export default function Button(props) {

    const router = useRouter();

    function handleClick() {
        router.push(props.path);
    }

    return(
        <button className={props.classType} onClick={handleClick}>
            <Image className={props.imgType} src={props.imgURL} width={100} height={100}/>
            <h1 className={props.textType}>{props.text}</h1>
        </button>
    );
}