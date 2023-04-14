import styled from "styled-components";
import {GrFormClose} from 'react-icons/gr'
import Planet from "../types/Planet.type";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

const ModalLayout = styled.div`
height: fit-content;
width: calc(100% - 1rem);
padding: 1rem;
padding-top: 248px;
position: absolute;
top: 0;
left: 0px;
z-index: 100;
/* From https://css.glass */
margin: 0.5rem;
border-radius: 0.25rem;
max-height: calc(100vh - 1rem);
overflow: scroll;
text-align:left;
button{
    width: min-content;
}

*{
    color: #fff;
}
@media (min-width: 768px) {
    max-width: 500px;
    right:-10px;
}


`

const Surface = styled.div`
width: 100%;
height: 240px;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
>h1{
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
}
>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
}

    `


const CloseButton = styled.button`
top: 0.5rem;
right: 0.5rem;
 `
interface Props extends Planet{
    closeModal: ()=>void;
}

const PlanetModal = ({name, description, closeModal, orbit, temperture, distance, facts, surfaceImage}:Props) => {
    // const ref = useRef(null)
    // useClickOutside(ref, closeModal)
    return (
        <ModalLayout  className="flex column gap-2 scrollbar-hide glass">
        <Surface  >
            <img src={surfaceImage} alt={name}></img>
            <h1 className="m-0">{name}</h1>
        </Surface>
        <CloseButton  className='absolute outline glass' onClick={(e)=>{e.preventDefault();closeModal()}}><GrFormClose color="white"></GrFormClose></CloseButton>
        <div>
            <h5>Facts:</h5>
            <div className="flex jsb">
                <p>One year:</p>
                <p>{orbit} days</p>
            </div>
            <div className="flex jsb">
                <p>Temperature: </p>
                <p>{temperture}°C</p>
            </div>
            <div className="flex jsb">
                <p>Distance from sun: </p>
                <p>{distance} days</p>
            </div>
        </div>

        <div>
            <h5>Description:</h5>
            <small className="del">{description}</small>
        </div>
        <div>
            <h5>Fun Fats:</h5>
            <ul>
                {facts.map((fact, i)=>(
                    <li key={i}><small>{fact}</small></li>
                ))}
            </ul>
        </div>
        </ModalLayout>
    );
};

    export default PlanetModal;