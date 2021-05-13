import {useEffect, useReducer} from "react";
import {getUserByUsername, getUSerPhotosByUsername} from "../../services/firebase";
import Header from "./header";
import PropTypes from "prop-types";



export default function Profile({username}) {
  const reducer = (state, newState) => ({ ...state, ...newState})
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
  }

  const [{profile, photosCollection, followedCount}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const [user] = await getUserByUsername(username)
      const photos = getUSerPhotosByUsername(username)
      dispatch({profile: user, photosCollection: photos, followedCount: user.followers.length})
    }
    getProfileInfoAndPhotos()
  }, [username])

  return (
    <>
    <Header/>
    </>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string
  })
};