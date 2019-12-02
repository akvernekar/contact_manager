const Contact = require('../models/contact')

module.exports.list = (req, res) => {
    Contact.find({userid:req.user._id})
        .then((contacts) => {
            res.json(contacts)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const { body } = req 
    const contact = new Contact(body)
    contact.userid=req.user._id
    contact.save()
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id 
    Contact.findOne({_id:id,userid:req.user._id})
        .then((contact) => {
            if(contact) { 
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Contact.findOneAndUpdate({_id:id,userid:req.user._id}, body, { new: true, runValidators: true })
        .then((contact) => {
            if(contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id 
    Contact.findOneAndDelete({_id:id,userid:req.user._id})
        .then((contact) => {
            if(contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}