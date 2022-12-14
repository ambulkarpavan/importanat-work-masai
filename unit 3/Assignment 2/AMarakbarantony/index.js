let amar={
    name:"amar",
    skill:"singer",

    changeskill: function (order){

        console.log(` ${this.name} borrow ${order} skill `)
    }
}

let akbar={
    name:"akbar",
    skill:"chef"
}

let anthony={
    name:"anthony",
    skill:"Magician"
}


amar.changeskill.call(akbar,"singer");
 amar.changeskill.call(amar,"Magician");
 amar.changeskill.call(anthony,"chef");