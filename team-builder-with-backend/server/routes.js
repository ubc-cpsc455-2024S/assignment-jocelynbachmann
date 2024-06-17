import express from 'express';
import MembersServiceController from './controllers/membersService.controller.js'
const router = express.Router();

router.get('/', MembersServiceController.getMembers);

router.post('/', MembersServiceController.addMember);

router.patch('/:id', MembersServiceController.editMember)

router.delete('/:id', MembersServiceController.deleteMember);

router.delete('/', MembersServiceController.clearMembers);

export default router;