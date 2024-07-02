import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../membersSlice';

const MemberForm = ({ toggleVisibility }) => {
  const dispatch = useDispatch();
  const [memberData, setMemberData] = useState({
    name: '',
    age: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    setMemberData({
      ...memberData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addMember(memberData));
    toggleVisibility();
    setMemberData({
      name: '',
      age: '',
      description: '',
      image: ''
    })
  }

  return (
    <div className="member-form-container">
      <h2 className="member-form-title">Add a Member</h2>
      <form action="script.js" onSubmit={handleSubmit} className="member-form">
        <div className="name-age-container">
          <label className="name-container">
            Name
            <input type="text" id="name" name="name" value={memberData.name} onChange={handleChange} required />
          </label>
          <label className="age-container">
            Age
            <input type="number" id="age" name="age" value={memberData.age} onChange={handleChange} required />
          </label>
          <label className="species-container">
            Species
            <input type="text" id="species" name="species" value={memberData.species} onChange={handleChange} required />
          </label>
        </div>
        <label>
          Description
          <input type="text" id="description" name="description" className="member-form-description"  value={memberData.description} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input type="text" id="image" name="image" className="member-form-image" value={memberData.image} onChange={handleChange} required />
        </label>
        <input type="submit" className="member-form-submit" />
      </form>
    </div>
  )
}

export default MemberForm;