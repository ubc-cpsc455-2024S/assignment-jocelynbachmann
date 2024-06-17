import express from 'express';
import MembersServiceController from './controllers/membersService.controller.js'
const router = express.Router();

// get members
router.get('/', MembersServiceController.getMembers);


export default router;