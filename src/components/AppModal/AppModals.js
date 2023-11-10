import React from 'react'

const AppModals = ({setOpenModal}) => {
  return (
    <div className='app__modal'>
        <h3>Calories Must Be Bigger Than 0 and Meal name Cannot Be Blank</h3>
        <button className='btn__close__modal' onClick={()=> setOpenModal(false)}>Close</button>
    </div>
  )
}

export default AppModals