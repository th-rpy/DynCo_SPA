import React from 'react';

const input = ( props ) =>{
   let inputElements = null;
   switch(props.elementType){
        case('text'):
            inputElements = 
                <div className="form-group">
                    <label for={props.label}>{props.label}</label>
                    <input  className={props.class} {...props.elementConfig}  />;   
                </div>    
            break;
        case('textarea'):
            inputElements = <textarea {...props} />;
            break;
        case('password'):
                // eslint-disable-next-line no-unused-expressions
                inputElements =  <div className="form-group">
                    <label for={props.label}>{props.label}</label>
                    <input  className={props.class} {...props.elementConfig}  />;   
                </div>   
            break;  
        case('checkbox'):
            inputElements = <input  className={props.class} {...props.elementConfig}  />;   
            break;    
        default:
            inputElements = <input {...props} />;    
    }
    return(
        <div className="form-group">
            {inputElements}
        </div>
    );
};

export default input;