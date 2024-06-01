import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMember } from '../membersSlice';

const MemberCards = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);

  const handleRemove = (id) => {
    dispatch(removeMember(id));
  };

  return (
    <div className="member-cards-container">
      {members.map((member) => (
        <div key={member.id} className="member-card">
          <img src={member.image} alt={member.name} className="member-card-image" />
          <h2 className="member-card-name">{member.name}</h2>
          <p className="member-card-age">Age: {member.age}</p>
          <p className="member-card-description">{member.description}</p>
          <button className="basic-button remove-button" onClick={() => handleRemove(member.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default MemberCards;