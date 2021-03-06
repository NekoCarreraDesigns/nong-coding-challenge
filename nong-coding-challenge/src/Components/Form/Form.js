import React from "react";
import "./Form.css";

function handleOnSubmit (event) {
    event.preventDefault();
    console.log("clicked")
    const notes = []
    if (notes === true){
        return notes
    } else {
        alert ("please enter a note")
    }
    }

function Form () {
    return (
        <div>
        <div>
            <h1 className="new-notes-header">New Notes</h1>
        <form className="input-form">
            <input className="note-date" alt="date-input" placeholder="date"></input>
            <br></br>
            <input className="written-by" alt="by-input" placeholder="written by"></input>
            <br></br>
            <textarea className="note-body" alt="note-text-area"></textarea>
        </form>
        <button className="save-button" onSubmit={()=> (handleOnSubmit)}>Save</button>
        <button className="log-out-button">Log Out</button>
        </div>
        <div className="saved-notes">
            <h1>Saved Notes</h1>
          <table>
              
              
          </table>
        </div>
        </div>
    )
}

export default Form;

