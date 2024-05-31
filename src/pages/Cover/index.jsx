import { Link } from "react-router-dom";
import "./style.css";

export function Cover() {
  return (
    <main>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source
            src="https://videos.pexels.com/video-files/3765078/3765078-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
          O seu browser não suporta essa tag de vídeo.
        </video>
        <Link to="/home">VAMOS MERGULHAR?</Link>
      </div>
    </main>
  );
}
