import React from 'react'

export default function Card({id, title, body, archived, showFormattedDate, onDelete, onArchive}) {
  return (
        <div className="card"> 
            <div className="text">
                <div className="text-top">
                    <h4>{title}</h4>
                    <span className="date">{showFormattedDate}</span>
                </div>
                <p>{body}</p>
            </div>
            <div className="card-button">
                {
                    (archived === true) ? 
                    <button className="button move" onClick={() => onArchive(id)}>Pulihkan</button> 
                    : <button className="button move" onClick={() => onArchive(id)}>Arsipkan</button>
                }
                <button className="button delete"  onClick={() => onDelete(id)}>Hapus</button>
            </div>
        </div>
  )
}