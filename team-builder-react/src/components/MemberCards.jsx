import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeMember } from '../membersSlice';

const MemberCards = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowDetails = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleRemoveMember = (id) => {
    dispatch(removeMember(id));
    setSelectedMember(null);
  };

  return (
    <div className="member-cards-container">
      {members.map((member) => (
        <div key={member.id} className="member-card">
          <img src={member.image} alt={member.name} className="member-card-image" />
          <h2 className="member-card-name">{member.name}</h2>
          <button className="details-button" onClick={() => handleShowDetails(member)}>
            Show Details
          </button>
          <button className="remove-button" onClick={() => handleRemoveMember(member.id)}>
            Remove
          </button>
        </div>
      ))}
      {selectedMember && (
        <div className="details-modal">
          <div className="details-modal-content">
            <button className="details-close-button" onClick={handleCloseModal}>&times;</button>
            <h2 className="details-name">{selectedMember.name}</h2>
            <div className="details-image-container">
              <img src={selectedMember.image} alt={selectedMember.name} className="details-image" />
            </div>
            <p className="member-card-age">Age: {selectedMember.age}</p>
            <p className="member-card-description">Description: {selectedMember.description}</p>
            <button className="remove-button" onClick={() => handleRemoveMember(selectedMember.id)}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MemberCards;