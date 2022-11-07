import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">Toko Buku Asadel</div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                New Arrival
              </a>
            </li>
            <li>
              <form id="form" role="search">
                <input
                  onChange={(typing) => setSearchTitle(typing.target.value)}
                  type="search"
                  placeholder="search book.."
                  id="search-box"
                ></input>
                <button
                  onClick={() => {
                    navigate("/" + searchTitle);
                  }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
