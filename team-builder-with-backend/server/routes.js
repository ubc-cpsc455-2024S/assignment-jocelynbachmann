import express from 'express';
import MembersServiceController from '../controllers/membersService.controller';

const router = express.Router();

// get members
router.get('/', MembersServiceController.getMembers);


module.exports = router;