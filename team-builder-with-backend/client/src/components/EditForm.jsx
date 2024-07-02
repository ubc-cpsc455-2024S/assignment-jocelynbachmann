import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMember } from '../membersSlice';

const EditMemberForm = ({ member, onClose }) => {
  const dispatch = useDispatch();
  const [editedMember, setEditedMember] = useState(member);

  const handleChange = (e) => {
    setEditedMember({
      ...editedMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMember(editedMember));
    onClose();
  };

  return (
    <div className="member-form-container">
      <h2 className="member-form-title">Edit Member</h2>
      <form onSubmit={handleSubmit} className="member-form">
        <div className="name-age-container">
          <label className="name-container">
            Name
            <input type="text" id="name" name="name" value={editedMember.name} onChange={handleChange} required />
          </label>
          <label className="age-container">
            Age
            <input type="number" id="age" name="age" value={editedMember.age} onChange={handleChange} required />
          </label>
        </div>
        <label>
          Description
          <input type="text" id="description" name="description" className="member-form-description" value={editedMember.description} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input type="text" id="image" name="image" className="member-form-image" value={editedMember.image} onChange={handleChange} required />
        </label>
        <div className="button-container">
          <button type="submit" className="member-form-submit padded-button">Save</button>
          <button type="button" onClick={onClose} className="member-form-cancel padded-button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditMemberForm;