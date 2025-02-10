
// player={
//     jno:18,
//     pname:'Virat',
//     mp:100,
//     rs:10000,
//     'mom-name':'Saroj',
//     'father-name':'Premnath'
// }
// console.log(player)  //6
// player['pet-name']='Captain'
// console.log(player)  //7
// delete player.jno



// let name=5
// console.log(player['mom-name'])
// console.log(player['father-name'])

// console.log('My Favourite Player is ', player.pname, 'He has played ', player.mp, 'Matches')
// let output=`My Favourite Player is ${player.pname} He has played ${player.mp} Matches avg is ${player.rs/player.mp}`
// console.log(output)

// let address = `FC Road
// Pune 411001
// Mh India`

// console.log(address)


// console.log(`My Favourite Pler is ${player['pname']} He has played ${player['mp']} Matches avg is ${player.rs/player.mp}`)


// player1={
//     jno:18,
//     pname:'Virat',
//     mp:100,
//     rs:12000,
//     'mom-name':'Saroj',
//     'father-name':'Premnath',

//     fun1:function displayAvg()
//          {
//             this.avg=this.rs/this.mp
//             console.log(this.avg)
//          },

//     fun2:function displayParentNames()
//          {
//             console.log(`Father Name : ${this['father-name']} , Mother Name : ${this['mom-name']}`)
//          },

// }

// player1.fun2();
// console.log(player1)


let player2={
    jno:1,
    pname:'Rahul',
    mp:100,
    rs:6000,
    'mom-name':'Saroj',
    'father-name':'Premnath',

    fun1:function()
         {
            this.avg=this.rs/this.mp
            console.log(this.avg)
         },

    fun2:function()
         {
            console.log(`Father Name : ${this['father-name']} , Mother Name : ${this['mom-name']}`)
         },
    fun3:()=>
    {
        console.log("All the best for the IPL")
    }

}
player2.fun1();
player2.fun2();
player2.fun3();


player3={
    jno:18,
    pname:'Virat',
    mp:100,
    rs:12000,
    'mom-name':'Saroj',
    'father-name':'Premnath',
    century:{
        test:30,
        odi:50,
        t20i:1,
        fun1:function(){
                let totalCenturies=this.test+this.odi+this.t20i;
                console.log(`Total Centuries are ${totalCenturies}`)
             }
    }
}

console.log('Test Centuries are ', player3.century.test)
player3.century.fun1()


// let jno=18;
// let pname="Virat";
// let mp=100;
// let rs=12000;

// let player4={jno,pname,mp,rs}
// console.log(player4)


//array destructuring
let{jno:jerseyNumber,pname,mp,rs}=player2;
console.log(jerseyNumber)
console.log(pname)
console.log(mp)
console.log(rs)

let player4={
    jno:1,
    pname:'Rahul',
    mp:100,
    rs:6000,
    'mom-name':'Saroj',
    'father-name':'Premnath'
}

for(let key in player4)
{
    console.log(`${key} , ${player4[key]}`)
}