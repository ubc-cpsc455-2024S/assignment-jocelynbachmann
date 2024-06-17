import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearMembers } from '../membersSlice';
import MemberForm from '../components/MemberForm';
import MemberCards from '../components/MemberCards';

const Home = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setFormVisible] = useState(false);

  function handleClear() {
    dispatch(clearMembers());
  }

  function toggleFormVisibility() {
    setFormVisible(!isFormVisible);
  }

  return (
    <div>
      {isFormVisible && <MemberForm toggleVisibility={toggleFormVisibility} />}
      <div>
        <h1 className="members-title">Team Members</h1>
        <div className="members-button-container">
          <button className={isFormVisible ? "clear-button padded-button" : "add-button padded-button"} onClick={toggleFormVisibility}>
            {isFormVisible ? 'Cancel' : 'Add Member'}
          </button>
          <button className="clear-button" onClick={handleClear}>Clear Members</button>
        </div>
      </div>
      <MemberCards />
    </div>
  )
}

export default Home;