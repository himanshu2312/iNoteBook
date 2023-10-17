import React from 'react'
import loading_bar from '../../loading_bar.gif'

const Spinner = () => {
      return (
            <div className='text-center container' >
                  <img width="180px" height="110px" className="my-3" src={loading_bar} alt="loading..." />
            </div>
      )
}

export default Spinner;