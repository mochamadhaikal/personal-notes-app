import React from 'react'

import Card from './Card'
import { showFormattedDate } from '../../utils'

export default function Archive({notes, onDelete, onArchive}) {
  const filteredNotes = notes.filter((note) => note.archived === true)
  return (
    <div>
        <h2>Diarsipkan</h2>
        <hr />
        <div className="item-container">
          {
            (filteredNotes.length === 0) ? <p>Tidak ada catatan</p> : ''
          }
          {
            filteredNotes.map((note) => (
              <Card 
                key={note.id} 
                id={note.id}
                showFormattedDate={showFormattedDate(note.createdAt)}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note} />
            ))
          }
        </div>
    </div>
  )
}