import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  
  const [isDefault, setIsDefault] = useState(false);

  const handleDescription = () => {
    setIsDefault(!isDefault);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <h1 className="mb-3">Hi,Hi,I'm Rahul Patil</h1>
              <p className="mb-3">
                A Freelance web-deveoper from Surat. I convert custom webdesing to
                Bootstrap Templates
              </p>
              <button
                className="btn btn-primary btn-sm mb-3 rounded"
                style={{ width: "120px" }}
                onClick={handleDescription}
              >
                {isDefault ? "not avialbe" : "I'm Avilable"}
              </button>

              <div style={{ display: "flex", gap: "5px" }}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ color: "#3b5998" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#E4405F" }}
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ color: "#1DA1F2" }}
                  />
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ color: "#333" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWAoL8PfqNmNZF29Mv4ZgG_3t0gLSb9hSmg&usqp=CAU"
                alt="Profile"
                className="img-fluid rounded mb-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
