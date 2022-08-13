import React from 'react';
import Card from './Card';
import { showFormattedDate } from '../../utils';

export default function Item({notes, onDelete, onArchive}) {
  const filteredNotes = notes.filter((note) => note.archived === false);
  return (
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
  )
}