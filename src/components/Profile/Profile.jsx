import axios from "axios";
import React, { useState, useEffect } from "react";
import urls from "../../services/axios.services";
import "./Profile.css";
function Profile() {
  const [data, setData] = useState({});
  const [metadata, setMetadata] = useState([]);

  useEffect(() => {
    axios.get(urls.user).then(({ data }) => {
      const followers = data.followers;
      const following = data.following;
      const public_repos = data.public_repos;
      const res = [
        {
          name: "Followers",
          value: followers,
        },
        {
          name: "Following",
          value: following,
        },
        {
          name: "Public Repos",
          value: public_repos,
        },
      ];
      setData(data);
      setMetadata(res);
    });
  }, []);

  return (
    <div className="profile">
      <img className="avatar" src={data.avatar_url} alt="" />
      <h1 className="name">
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          {data.name}
        </a>
      </h1>
      <p className="login">
        <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
          <i>@{data.login}</i>
        </a>
      </p>

      <span>
        {metadata.length !== 0
          ? metadata.map((item) => {
              return (
                <ul key={item.name}>
                  <li>{item.name}</li>
                  <li>
                    <strong>{item.value}</strong>
                  </li>
                </ul>
              );
            })
          : ""}
      </span>

      <p className="bio">{data.bio}</p>
    </div>
  );
}

export default Profile;
