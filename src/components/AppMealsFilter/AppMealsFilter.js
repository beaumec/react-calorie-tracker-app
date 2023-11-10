import React from 'react'

const AppMealsFilter = ({selectedFilter, setSelectedFilter}) => {
  return (
    <div className='app__meals__container__select'>
        <select defaultValue={selectedFilter} onChange={(e) =>setSelectedFilter(e.target.value)}>
            <option value=""></option>
            <option value="ascending">Ascending</option>
            <option value="descending">descending</option>
        </select>
    </div>
  )
}

export default AppMealsFilter