import React from 'react'

const ProfileViewer = props => {
    return (
        <article className="ProductsDispaly">
            <h1> Name : {props.name} </h1>
            <div className="Name">Email : {props.email}</div>
            <div className="Name">Number : {props.number}</div>
            <div className="Name">Address : {props.address}</div>
        </article >
    )
}

export default ProfileViewer