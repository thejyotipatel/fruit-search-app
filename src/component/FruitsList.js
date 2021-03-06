import React from 'react'
import { useGlobalContext } from './context'
import Loading from './Loading'
import Fruits from './Fruits'

const FruitsList = () => {
  const { fruits, loading } = useGlobalContext()
  // console.log(fruits[0].nutritions)
  if (loading) {
    return <Loading />
  }
  if (fruits.length < 1) {
    return (
      <h2 style={{ marginTop: '3rem' }}>
        no fruits matches your search criteria
      </h2>
    )
  }
  return (
    <>
      <div className='card-contant'>
        <div className='card-center'>
          {fruits.map((item) => {
            return <Fruits key={item.id} {...item} />
          })}
        </div>
      </div>
    </>
  )
}

export default FruitsList
