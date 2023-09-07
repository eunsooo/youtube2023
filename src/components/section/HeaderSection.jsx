import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
  return (
    <header id="header" role='banner'>
        <div className="header__wrap">
            <h1 className="header_logo">
                <Link href="/">Youtube<em>react.js</em></Link>
            </h1>
            <div className="header__search">
                <label htmlFor="searchInput">
                    <span className="ir">검색</span>
                </label>
                <input 
                    type="text" 
                    id='searchInput'
                    aria-label='Search'
                    placeholder='검색어를 입력해주세요'
                    autoComplete='off'
                />
            </div>
        </div>

    </header>
  )
}

export default HeaderSection