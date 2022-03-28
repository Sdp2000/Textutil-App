import React from 'react'

export default function Alert(props) {

    const cap = (str) => {
        let temp = str.toLowerCase();
        return temp.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div style={{ height: "50px" }}>
            {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{cap(props.alert.typ)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
