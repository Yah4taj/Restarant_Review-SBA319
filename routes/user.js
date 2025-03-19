import express from 'express';
import User from '../models/Users.js';
const userRouter = express.Router();

router.post('/', async(req,res) => {
    try{
const user =new User (req.body);
await user.save();
res.status(201).json(user);

    }catch(e) {
console.error(e);
rest
    }
})


router.get('/',(req,res) => {
    const users = userModel.getAllUsers(req.query);
    res.json(users);
});
// GET a specific user by ID
router.get('/:id', (req, res) => {
    const user = userModel.getUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  });
  
  // POST - Create a new user
  router.post('/', validateUser, (req, res) => {
    const { username, email } = req.body;
    const newUser = userModel.createUser({ username, email });
    
    res.status(201).json(newUser);
  });
  
  // PATCH - Update a user
router.patch('/:id', (req, res) => {
    const { username, email } = req.body;
    const updatedUser = userModel.updateUser(req.params.id, { username, email });
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(updatedUser);
  });
  
  // DELETE - Remove a user
  router.delete('/:id', (req, res) => {
    const success = userModel.deleteUser(req.params.id);
    
    if (!success) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(204).end();
  });
  
  module.exports = router;
 