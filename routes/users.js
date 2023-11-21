const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render("users/new", {
        firstName: "Bill"
    })
})

router.post('/', (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({
            firstName: req.body.firstName
         
        })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('error')
        res.render('users/new', {
            firstName: req.body.firstName
        })
    }
})

router.route("/:id")
.get(howdy, (req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`)
})

const users = [{name: 'Kyle'}, { name: 'Sally'}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function howdy(req, res, next) {
    console.log('howdy!!')
    next()
}



module.exports = router

