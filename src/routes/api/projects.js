const router = require('express').Router();
const ProjectController = require('../../controllers/ProjectController');

// @route   GET api/projects
// @desc    Get all projects
// @access  public
router.get('/', ProjectController.index);


// @route   GET api/projects/:id
// @desc    Get a project by id
// @access  public
router.get('/:id', ProjectController.getById);


// @route   POST api/projects
// @desc    Create a new project
// @access  public
router.post('/', ProjectController.create);

module.exports = router;
