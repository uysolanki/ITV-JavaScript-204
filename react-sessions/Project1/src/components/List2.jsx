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

    function showTeamName(playerName)
    {
        console.log(playerName)
    }
  return (
    <ol>
        {cars.map(
            (car,index)=>{
                return <li key={index}>{car}</li>
            }
        )}

        {
            players.map(
                (player,index)=>{
                        return<h1 onClick={()=>showTeamName(player.pname)} key={index}>{player.pname}</h1>
                }
            )
        }
    </ol>
  )
}

export default List2