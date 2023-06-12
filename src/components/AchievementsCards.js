import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const AchievementsCards = ({ title, description, imgUrl, buttonLabel, buttonLink }) => {
    
    return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">

        <img src={imgUrl} width="480" height="270"></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br><br></br>
          {buttonLabel && buttonLink && (
            <Button variant="outline-light" onClick={() => window.open(buttonLink)}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </Col>
  )
}