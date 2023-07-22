import React, { useState, } from "react";
import ReactDOM from 'react-dom/client'
import { Wrapper } from "./style/style";
import FormGroup from "./components/FormGroup";
import Result from "./components/Result";

function R19App () {

    const[values,setValue] = useState({
        Principle:"",
        Monthly:"",
        Rate:"",
        Years:""

        
    })

    console.log(values.Principle, values.Monthly, values.Rate, values.Years)

    return (
        <Wrapper>
           <FormGroup nameAmmount={"Principle ammount €"} onChange={(e)=>setValue({...values, Principle: e.target.value})} values={values.Principle} /> 
           <FormGroup nameAmmount={"Monthly contribution €"} onChange={(e)=>setValue({...values, Monthly: e.target.value})} values={values.Monthly} /> 
           <FormGroup nameAmmount={"Interest rate %"} onChange={(e)=>setValue({...values, Rate: e.target.value})} values={values.Rate} /> 
           <FormGroup nameAmmount={"Years of investment"} onChange={(e)=>setValue({...values, Years: e.target.value})} values={values.Years} /> 

            <Result 
            Principle={values.Principle}
            Monthly={values.Monthly}
            Rate={values.Rate}
            Years={values.Years}
            />
        </Wrapper>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R19App />)