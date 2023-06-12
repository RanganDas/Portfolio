import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, videoUrl,buttonLabel, buttonLink }) => {
  return (
    
      <div className="proj-imgbx">

      <video src={videoUrl} width="480" height="270" muted autoPlay loop type="video/mkv"></video>

        <div className="proj-txtx">
          <h4>{title}</h4>
          {buttonLabel && buttonLink && (
            <Button variant="outline-light" onClick={() => window.open(buttonLink)}>
              {buttonLabel}
            </Button>
          )}
          <span>{description}</span><br></br><br></br>
          
        </div>
      </div>

  )
}