import React from 'react'

const Alert = (props) => {
    return (
        props.alert !== null ? (
            <div className={`alert alert-${props.alert.type}`}>
                <i className="fas fa-info-circle"> {props.alert.message}  </i>
            </div>
        ) : ''
        
        //  // if props.alert !== null AND THEN DO (<div> ... </div>)
        // props.alert !== null && (
        //     <div className={`alert alert-${props.alert.type}`}>
        //         <i className="fas fa-info-circle"> {props.alert.message}  </i>
        //     </div>
        // )

    );
};

export default Alert;
