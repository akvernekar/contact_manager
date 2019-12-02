const express = require('express')
const router = express.Router()
const contactsController = require('../app/controllers/contactsController')
const usercontroller=require('../app/controllers/usercontroller')
const {authenticateUser}=require('../app/middlewares/authentication')

router.get('/contacts', authenticateUser,contactsController.list)
router.post('/contacts', authenticateUser,contactsController.create)
router.get('/contacts/:id',authenticateUser, contactsController.show)
router.put('/contacts/:id',authenticateUser, contactsController.update)
router.delete('/contacts/:id',authenticateUser, contactsController.destroy)

router.post('/users/register',usercontroller.create)
router.post('/users/login',usercontroller.login)
router.get('/users/account',authenticateUser,usercontroller.show)
router.delete('/users/logout',authenticateUser,usercontroller.remove)



module.exports = router