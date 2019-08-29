import React, {useState, useEffect} from 'react';
import useGlobal from '../GlobalState/Store/Store';
import { Link } from "react-router-dom";
import { HashLink as SectionLink } from 'react-router-hash-link';
import Navbar from './Navbar'
import StatBox from './StatBox'
import axios from 'axios'

import {
  Pane,
  Button,
  Text,
  Heading,
  Avatar,
  TextInput,
  IconButton,
  Spinner,
  Textarea
} from 'evergreen-ui'

// const stats = [
//   {
//     label: "Articles",
//     value: 102
//   },
//   {
//     label: "Comments",
//     value: 17
//   },
// ]

const StatsArray = {
  display: 'flex',
  flexDirection: 'row',
  //width: '60%',
  //justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
  marginLeft: 'auto',
  marginBottom: '15px',

}

const UserBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: '15px',
}

const ProfileBox = {
  padding: '20px',
  width: '70%',

}

const TopProfile = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '300px',
}
const UserInfoBox = {
  marginLeft: '10px',
}
const biotext = {
  marginTop: '15px',
  marginBottom: '15px',
}

const Editbutton = {
  alignSelf: 'flex-end',
  marginLeft: '95%',
  marginTop: '15px',
}

function Profile(props) {
  const [globalState, globalActions] = useGlobal();
  const user = globalState.user
  const auth = globalState.isAuth
  const profileUser = props.match.params.username
  // console.log(props.match.params.username)
  // console.log(user.username)
  const url = `http://localhost:4000/user/${profileUser}`



  const [stats, setStats] = useState([])
  const [profile, setProfile] = useState({
    user: {},
    articles: [],
    articleCount: '',
    commentsCount: ''
  })
  const [fetch, setFetch] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  //For editing bio
  const [bio, setBio] = useState("")
  const [edit, setEdit] = useState(false)
  const [changebio, setChangeBio] = useState({
    isLoading: false,
    isError: false,
    error: null
  })
  const [refresh, setRefresh] = useState(0)
  function ChangeBio() {
    setChangeBio({
      isLoading: true,
      isError: false,
      error: null
    })
    const url = `http://localhost:4000/user/${user.username}/update`
    axios({
      method: 'post',
      url: url,
      data: {
      	bio: bio,
    }})
    .then(response => {
      console.log(response)
      setChangeBio({
        isLoading: false,
        isError: false,
        error: null
      })
      setEdit(false)
      setRefresh(refresh + 1)
    })
    .catch(function(error) {
      setChangeBio({
        isLoading: false,
        isError: true,
        error: error
      })
      console.log(error);
    })
  }

  useEffect(() => {
    setFetch({
      isLoading: true,
      isError: false,
      error: null
    })

    console.log(url)
    axios.get(url)
        .then(response => {
            setProfile({
              user: response.data.profile,
              articles: response.data.articles,
              articleCount: response.data.articles.length,
              commentsCount: response.data.comments
            });
            setStats([
              {
                label: "Articles",
                value: response.data.articles.length,
              },
              {
                label: "Comments",
                value: response.data.comments,
              },
            ])
            setBio(response.data.profile.bio)
            setFetch({
              isLoading: false,
              isError: false,
              error: null
            })
        })
        .catch(function (error){
          setFetch({
            isLoading: false,
            isError: true,
            error: {
              error: error,
              code: error.message.substring(error.message.length - 3, error.message.length)
            }
          })
            console.log(error);

        })
  }, [refresh])

  const isCurrentUser = profileUser === user.username ? true : false
  var dateoptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const joinedDate = profile.user.createdAt ? new Date(profile.user.createdAt).toLocaleDateString("en-US", dateoptions) : ""
  return(
    <div>
      <Navbar/>
      <div style={Editbutton}>
        {isCurrentUser ? <IconButton onClick={() => setEdit(!edit)} appearance="minimal" icon="edit" /> : null}
      </div>
      {fetch.isLoading ?
        <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
          <Spinner />
        </Pane>
        :
        fetch.isError ?
          <div>Error: {fetch.error.message}</div>
          :
          <div style={TopProfile}>
            <div style={ProfileBox}>
              <div style={UserBox}>
                <Avatar name={profile.user.username} size={60} />
                <div style={UserInfoBox}>
                  <Heading size={600}> {profile.user.username} </Heading>
                  <Heading size={300}> Joined: {joinedDate} </Heading>
                </div>
                <div style={StatsArray}>
                  {stats.map((stat, index) =>
                    <StatBox index={index} value={stat.value} label={stat.label}/>
                  )}
                </div>
              </div>
              <div style={biotext}>
                {edit ?
                  <div>
                    <Textarea
                      onChange={e => setBio( e.target.value )}
                      value={bio}
                    />
                    <div style={{width: '100%', display: 'flex', alignItems: 'flex-end'}}>
                      <div style={{marginLeft: 'auto', marginRight: '0px'}}>
                        <Button isLoading={changebio.isLoading} appearance="primary" intent="success" onClick={ChangeBio}>
                          Update Bio
                        </Button>
                      </div>
                    </div>
                    {changebio.isError ?
                      <Text color="#EC4C47" size={300}> {changebio.error.message}</Text>
                      :
                      null
                    }
                  </div>
                  :
                  <Text size={500}>
                    {profile.user.bio}
                  </Text>
                }
              </div>
            </div>
          </div>
      }


    </div>
  )
}

export default Profile
