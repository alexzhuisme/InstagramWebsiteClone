import PropTypes from 'prop-types'
import {useState} from "react";
import {Link} from "react-router-dom";
import {updatedFollowedUserFollowers, updateLoggedInUserFollowing} from "../../services/firebase";

export default function SuggestedProfile({profileDocId, username,profileId,userId, loggedInUserDocId}) {
  const [followed, setFollowed] = useState(false)

    async function handleFollowUser() {
      setFollowed(true);

      // firebase: create 2 services (functions)
      // update the following array of the logged in user (in this case, my profile)
      await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
      // update the followers array of the user who has been followed
      await updatedFollowedUserFollowers(profileDocId, userId, false)
    }

  return !followed ? (
    <div className='flex flex-row items-center align-items justify-between'>
      <div className="flex items-center justify-between">
        <img src={`/images/avatars/${username}.jpg`} alt="" className="rounded-full w-8 flex mr-3"/>
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={() => {
          handleFollowUser()
        }}
      >Follow</button>
    </div>
  ):null
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
}