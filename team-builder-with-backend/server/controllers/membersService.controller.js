import MembersService from '../services/membersService.service.js'

async function getMembers(req, res) {
  try {
    const members = await MembersService.getMembers();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function addMember(req, res) {
  try {
    const newMember = await MembersService.createMember(req.body);
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function editMember(req, res) {
  try {
    const updatedMember = await MembersService.editMember(req.params.id, req.body);
    res.status(200).json(updatedMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteMember(req, res) {
  try {
		await MembersService.deleteMember(req.params.id);
		res.status(204).json({ message: 'Deleted member.' });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

async function clearMembers(req, res) {
  try {
		await MembersService.clearMembers();
		res.status(204).json({ message: 'Deleted all members.' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

export default {
  getMembers,
  addMember,
  editMember,
  deleteMember,
  clearMembers,
}