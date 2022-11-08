import React from 'react'

function Formulario() {
  return (
    <div className='contenedor'>
    <form>
        <div className='campo'>
            <label htmlFor='ciudad'>Ciudad</label>
            <input
            type='text'
            id='ciudad'
            name='ciudad'
            ></input>
        </div>
        <div className='campo'>
            <label htmlFor='ciudad'>Ciudad</label>
            <input
            type='text'
            id='ciudad'
            name='ciudad'
            ></input>
        </div>
    </form>
     

    </div>
  )
}

export default Formulario