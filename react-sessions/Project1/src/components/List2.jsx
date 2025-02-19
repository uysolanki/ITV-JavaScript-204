import React from 'react'

const List2 = () => {

    const cars=["Audi","BMW","Merc","Honda","Tesla"]  //step1 : get the data

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
        switch(playerName)
        {
            case "Virat" : console.log("RCB"); break;
        }
        
    }
  return (
    <ol>
        {cars.map(                                                  //Step 2 : prepare the UI
            (car,index)=>{
                return <li key={index}>{car}</li>
            }
        )}

        {
            players.map(
                (player,index)=>{                                   //Step 3: make the UI Functional
                        return<h1 onClick={()=>showTeamName(player.pname)} key={index}>{player.pname}</h1>
                }
            )
        }
    </ol>
  )
}

export default List2