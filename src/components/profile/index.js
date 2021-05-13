import {useEffect, useReducer} from "react";
import {getUSerPhotosByUsername} from "../../services/firebase";
import Header from "./header";
import Photos from "./photos";
import PropTypes from "prop-types";



export default function Profile({user}) {
  const reducer = (state, newState) => ({ ...state, ...newState})
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
  }

  const [{profile, photosCollection, followerCount}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      // const [user] = await getUserByUsername(user.username)

      const photos = getUSerPhotosByUsername(user.username)
      dispatch({profile: user, photosCollection: photos, followedCount: user.followers.length})
    }
    getProfileInfoAndPhotos()
  }, [user.username])

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection}/>
      <p>Hello {user.username}</p>
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