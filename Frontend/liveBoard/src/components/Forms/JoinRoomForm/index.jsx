import React from 'react'

const JoinRoomForm = () => {
  return (
    <form className='form col-md-12 mt-5'>
      <div className='form-group'>
          <input type='text' className='form-control my-2' placeholder='Enter your name'/>
      </div>
      <div className='form-group'>
          <div className='input-group d-flex  align-items-center justify-content-center'>
              <input type='text' className='form-control my-2 p-2' placeholder='Enter room id' style={{ width: 'auto', minWidth: '200px' }}/>
          </div>
      </div>
      <button type='submit' className='mt-4 btn btn-primary btn-block form-control'> Join Room
      </button>
        
    
    </form>
  )
}

export default JoinRoomForm