import MembersService from "../services/membersService.service.js"

async function getMembers(req, res) {
  try {
    console.log('IN CONTROLLER');
		const members = await MembersService.getMembers();
		res.json(members);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export default {
  getMembers,
}