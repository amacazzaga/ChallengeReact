import React from 'react'
import { useParams } from 'react-router-dom'

const SelectedItem = () => {
    const {id} = useParams()
  return (
      <div>
    {/* {choosedDishes.map((d) => (
        <ChoosedItem
          name={choosedDishes}
          key={d.id}
          title={d.title}
          image={d.image}
          calories={d.nutrition.calories}
          score={d.spoonacularScore}
        />
      ))} */}
      {id}
      </div>

  )
}

export default SelectedItem