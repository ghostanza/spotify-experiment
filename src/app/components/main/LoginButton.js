import React from 'react';

export default class LoginButton extends React.Component {
  render() {
    var auth_link = 'http://accounts.spotify.com/authorize',
        client_id = 'c3f3e6c8e0054a499d67a714c264e10e',
        redirect_uri = encodeURIComponent('http://localhost:8080/api/v1/callback'),
        scope = encodeURIComponent('user-read-email user-top-read playlist-modify-public user-read-recently-played'),
        response_type = 'code',
        login_link = `${auth_link}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}`;
    return(
      <div>
        <a href={login_link}>Get Started</a>
      </div>
    )
  }
}
