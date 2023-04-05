import { useState } from 'react';

export default function State(){
    const [age, setAge] = useState(0);
    const [name, setName] = useState('cee');

    const onInage = ()=>{
        setAge(age+1)
    }

    const Demo = (props) =>{
        return(
            <div>
                <div>Day la tuoi : {props.age}</div>
                <div>Day la ten : {props.name}</div>
            </div>
            
        )
    }
    return (
        <div classname='container'>
            <div>{age}</div>
            <div onClick={onInage}>Tang age len 1</div>
            <Demo age={age} name={name}/>
        </div>
    )
}
