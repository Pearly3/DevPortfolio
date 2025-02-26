
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl, index }) => {
    const handleClick = () => {
        if (projectUrl) {
            window.open(projectUrl, '_blank');
        }
    };

    return (
        <Col sm={6} md={4}>
            <div 
                className={`proj-imgbx project-${index + 1} ${projectUrl ? 'clickable' : ''}`}
                onClick={handleClick}
                role={projectUrl ? "link" : ""}
            >
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}