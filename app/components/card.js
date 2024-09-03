"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'
 

export default function Card(props) {

    const router = useRouter();

    function handleClick() {
        router.push(props.path);
    }

    return(
        <label className="Card" onClick={handleClick}>
            <div className="CardFront">
                <h1 className="CardTitle">{props.title}</h1>
                <Image className="CardImg" src={props.imgURL} width={100} height={100}/>
            </div>
            <div className="CardBack">
                <h1 className="CardTitle">{props.title}</h1>
                <p className="CardText">{props.text}</p>
            </div>
        </label>
    );
}