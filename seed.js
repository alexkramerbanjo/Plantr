const { db, Vegetable, Plot, Gardener } = require('./models')
const Sequelize = require('sequelize')


const carrot = {name: 'Carrot', color: 'orange'};

const p1 = Vegetable.create(carrot)
const p2 = p1.then(veg => {
    console.log('vegetable is ', veg)
    return Vegetable.create({name: 'lettuce', color: 'green'})
})
const p3 = p2.then(veg => {
    console.log(veg)
    return Vegetable.create({name: 'Daikon Radish', color: 'white'})
})
const p4 = p3.then(veg => { // at then end of each .then chain, then you call db.sync() to add the data to the table.
    db.sync()
    .then (() => { 
        console.log('Database synced!')
        db.close() })
    .catch(err => {
        console.log('WARNING WARNING ERROR', err);
        db.close()
    })
})

