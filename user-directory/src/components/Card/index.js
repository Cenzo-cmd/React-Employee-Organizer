import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card mainCard" >
            <div className="card-body">
                <h3>{`Name: ${props.employee.name.first} ${props.employee.name.last}`}</h3>
                <img src={props.employee.picture.large} alt={props.employee.name.first}></img>
                <p className="card-text">Email: {props.employee.email}</p>
                <p className="card-text">Cell: {props.employee.cell}</p>
                <p className="card-text">{`Location: ${props.employee.location.city}, ${props.employee.location.state}`}</p>

            </div>
        </div>
    )
}

export default Card;
