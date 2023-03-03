import express from 'express';
import {
  createUserController,
  getUserByIdController,
  updateUserController,
} from './user-controller.js';

const router = express.Router();

router.route('/').post(createUserController); // Esta ruta no tiene pathparam
router.route('/:id').get(getUserByIdController); // Esta ruta tiene como pathparam :id
router.route('/:id/follower/:idFollower').patch(updateUserController);
export default router;
