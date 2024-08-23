import React from 'react'
import "../styles/search.css"
function Searchs() {
  return (
    <div className='searchs'>
      <div className="search__container">
        <div className="search__wrapper">
            <div className="search__l">                
                <p>Sort by</p>
                <input type="text" placeholder='Select'/>
            </div>
            <div className="search__r">                
                <p>Collections</p>
                <input type="text" placeholder='Select'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Searchs
