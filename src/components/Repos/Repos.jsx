import axios from "axios";
import React, { useState, useEffect } from "react";
import urls from "../../services/axios.services";
import "./Repos.css";
function Repos() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios.get(urls.repos).then(({ data }) => {
      setRepos(
        data.filter((value) => {
          return !value.fork && value.description !== null;
        })
      );
    });
  }, []);
  return (
    <div className="repos">
      <h1 className="heading">Repositries</h1>
      <span>
        {repos.length !== 0
          ? repos.map((item) => {
              return (
                <ul key={item.name}>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="reponame">
                      <strong>{item.name}</strong>
                    </li>
                    <li className="desc">{item.description}</li>
                  </a>
                </ul>
              );
            })
          : ""}
      </span>
    </div>
  );
}

export default Repos;
