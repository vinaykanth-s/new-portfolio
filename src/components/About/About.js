import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, social, resume } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hey! I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center" style={{ gap: 30 }}>
        <div>
          {resume && (
            <a href={resume} download>
              <p
                type="button"
                className="btn btn--outline"
                style={{ padding: "0.4em 1.4em" }}
              >
                resume
              </p>
            </a>
          )}
        </div>
        <div>
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  aria-label="twitter"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              )}
              {social.calendly && (
                <a
                  href={social.calendly}
                  aria-label="calender"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CalendarTodayIcon />
                </a>
              )}
              {social.peerlist && (
                <a
                  href={social.peerlist}
                  aria-label="github"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AccountCircleIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
