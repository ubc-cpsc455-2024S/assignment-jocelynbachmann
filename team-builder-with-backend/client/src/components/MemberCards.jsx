import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMember, fetchMembers } from '../membersSlice';
import EditForm from './EditForm';

const MemberCards = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);
  const memberStatus = useSelector((state) => state.members.status);
  const error = useSelector((state) => state.members.error);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (memberStatus === 'idle') {
      dispatch(fetchMembers());
    }
  }, [memberStatus, dispatch]);

  const handleShowDetails = (member) => {
    setIsEditing(false);
    setSelectedMember(member);
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setIsEditing(false);
  };

  const handleRemoveMember = (id) => {
    dispatch(removeMember(id));
    setSelectedMember(null);
    setIsEditing(false);
  };

  let content;

  if (memberStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (memberStatus === 'succeeded') {
    content = members.map((member) => (
      <div key={member.id} className="member-card">
        <img src={member.image} alt={member.name} className="member-card-image" />
        <h2 className="member-card-name">{member.name}</h2>
        <button className="details-button" onClick={() => handleShowDetails(member)}>
          Show Details
        </button>
        <button className="edit-button" onClick={() => handleEditMember(member)}>
          Edit
        </button>
        <button className="remove-button" onClick={() => handleRemoveMember(member.id)}>
          Remove
        </button>
      </div>
    ));
  } else if (memberStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="members-container">
      <div className="edit-form-container">
        {selectedMember && isEditing && (
          <EditForm member={selectedMember} onClose={handleCloseModal} />
        )}
      </div>
      <div className="member-cards-container">
        {content}
        {selectedMember && !isEditing && (
          <div className="details-modal">
            <div className="details-modal-content">
              <button className="details-close-button" onClick={handleCloseModal}>&times;</button>
              <h2 className="details-name">{selectedMember.name}</h2>
              <div className="details-image-container">
                <img src={selectedMember.image} alt={selectedMember.name} className="details-image" />
              </div>
              <p className="member-card-age">Age: {selectedMember.age}</p>
              <p className="member-card-description">Description: {selectedMember.description}</p>
              <button className="edit-button padded-button" onClick={() => handleEditMember(selectedMember)}>
                Edit
              </button>
              <button className="remove-button padded-button" onClick={() => handleRemoveMember(selectedMember.id)}>
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberCards;