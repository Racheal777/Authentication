const express = require('express')
const Blog = require('../model/blog')
const mongoose = require('mongoose')
const Travel = require('../model/travel')
const json = require('../files/adventure.json')



//saving data to the database with a json file

const save = (req, res) =>{
    const adventure = new Travel(req.body)

    Travel.insertMany(json).then(results => {
        if(results){
            res.send(results)
            console.log(json)
        }
    }).catch(err =>{
        console.log(err)
    })
}


//getting data
const getJson = (req, res) =>{
    Travel.find().then(results => {
        if(results){
            res.send(results)
            console.log(results)
        }
    }).catch(err => {
        console.log(err)
    })
}
//saving a blog

const saveBlog = (req, res) =>{

    const Blogg = new Blog(req.body)

    //pushing the comments to the blog
    Blogg.comments.push()
    Blogg.save().then(result => {
        if(result){

            
            res.send("created with comment")
            console.log(Blogg)
        }
    }).catch(err => {
        console.log(err)
    })
}

//getting data
const getB = (req, res) =>{

    Blog.find().then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err)
    })

}


module.exports = {
    saveBlog,
    getB,
    save,
    getJson
}
