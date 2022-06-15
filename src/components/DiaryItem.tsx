import React from 'react'
import { ListType } from '../App'

const DiaryItem = (item :ListType)=> {
  const {id,author,content,emotion,created_date}=item 
  return (
    <div className='DiaryItem'>
        <div className='info'>
            <p>{author}</p>
            <p>{emotion}</p>
            <p className='date'>{created_date}</p>
        </div>
        <div className='content'>{content}</div>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default DiaryItem