import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './index.css'
import { createConnection } from 'net'
import api from '../../services/api'

export interface Teacher {
  id: number,
  avatar: string,
  bio: string,
  coast: number,
  name: string,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

export const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {

    const userId = teacher.id;

    api.post('connection', {
      user_id: userId
    });
  }

  function showAvatarImage() {
    if (!!teacher.avatar) {
      return (
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
      )
    } else {
      return (
        <div className="teacher-avatar">
          <p>{teacher.name.charAt(0).toUpperCase()}</p>
        </div>
      );
    }
  }

  return (
    <article className='teacher-item'>
      <header>
        {showAvatarImage()}
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>{teacher.coast}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}
