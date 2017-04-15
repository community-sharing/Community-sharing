import React from 'react'
import { Link } from 'react-router-dom'

function MyListingsCard () {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src='http://maruyama-us.com/wp-content/uploads/2015/02/H23D-600x600.jpg'></img>

        <div className='card-details-container'>
          <p className='card-heading'>Hedge Trimmer</p>
          <p className='card-details'>
            Lorem ipsum dolor sit amet, nibh molestie an eos, cu prima error quo, pro eros munere efficiendi in. Vis in eros pertinax voluptatibus....
          </p>
        </div>
      </div>
      <div className='card-button-container'>
        <button className='card-button'>View</button>
      </div>
    </div>
  )
}

export default MyListingsCard
