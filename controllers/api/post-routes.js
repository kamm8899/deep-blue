const router = require('express').Router();
const sequelize = require('../../config/connection');

const { Post, User, Category} = require('../../models');

//get all Users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            
        ]
    })
    });