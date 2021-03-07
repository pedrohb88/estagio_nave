const router = require('express').Router();
const NaverController = require('../../controllers/NaverController');

// @route   GET api/navers
// @desc    Get all navers
// @access  public
router.get('/', NaverController.index);


// @route   GET api/navers/:id
// @desc    Get a naver by id
// @access  public
router.get('/:id', NaverController.getById);


// @route   POST api/navers
// @desc    Create a new naver
// @access  public
router.post('/', NaverController.create);

module.exports = router;
