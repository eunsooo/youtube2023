import React from 'react'

import { categories } from '../../constants/constants'

const Category = () => {
  return (
    <ul>
        {categories.map((category, key) => (
            <li key={key}>
                <a href={category.src}>{category.icon}{category.title}</a>
            </li>
        ))}
    </ul>
  )
}

export default Category