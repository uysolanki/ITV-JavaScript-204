import React from 'react'

const List2 = () => {

    const cars=["Audi","BMW","Merc","Honda","Tesla"]

    const players=[
        {
            jno:18,
            pname:'Virat'
        },
        {
            jno:45,
            pname:'Rohit'
        },
        {
            jno:1,
            pname:'Rahul'
        }
    ]
  return (
    <ol>
        {cars.map(
            (car)=>{
                return <li>{car}</li>
            }
        )}

        {
            players.map(
                (player)=>{
                        return<h1>{player.pname}</h1>
                }
            )
        }
    </ol>
  )
}

export default List2