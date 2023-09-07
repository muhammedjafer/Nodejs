//@desc get all contact
//@route GET /api/contact
//@access public 

class ContactController {
    
    getContact (req, res) {
        res.status(200).json({message: "Get all contacts"});
    }

    ViewContact (req, res) {
        const $cal = 1 + 1;
        res.json({message: 'Hello world post!! ' + req.params.id ,
        'math': $cal});
    }

    createContact (req, res) {
        const $cal = 1 + 1;
        res.json({message: 'Hello world post!!',
        'math': $cal});
    }

}

module.exports = new ContactController();