import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CustomInput } from '..';
import { createOrEditProfile } from '../../redux/profile/profileActions';

const ProfileForm = () => {
  const [profileForm, setProfileForm] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubUsername: '',
    skills: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    company,
    website,
    location,
    bio,
    status,
    githubUsername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = profileForm;

  const handleInputChange = (e) =>
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrEditProfile(profileForm, history));
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={handleInputChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <CustomInput
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={handleInputChange}
          description="Could be your own company or one you work for"
        />

        <CustomInput
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={handleInputChange}
          description="Could be your own company or one you work for"
        />

        <CustomInput
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={handleInputChange}
          description="City & state suggested (eg. Boston, MA)"
        />

        <CustomInput
          type="text"
          placeholder="* Skills"
          name="skills"
          value={skills}
          onChange={handleInputChange}
          description="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
        />

        <CustomInput
          type="text"
          placeholder="Github Username"
          name="githubUsername"
          value={githubUsername}
          onChange={handleInputChange}
          description="If you want your latest repos and a Github link, include your
            username"
        />

        <CustomInput
          type="textarea"
          placeholder="A short bio of yourself"
          name="bio"
          value={bio}
          onChange={handleInputChange}
          description="Tell us a little about yourself"
        />

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={handleInputChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default ProfileForm;
