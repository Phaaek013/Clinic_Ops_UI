import { Link } from 'react-router-dom';

export function ScreenshotPage({ title, image, flowLinks = [] }) {
  return (
    <section className="screenshot-page">
      <h1>{title}</h1>
      <div className="demo-panel">
        <h3>Demo actions</h3>
        <div className="demo-links">
          {flowLinks.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
          {flowLinks.length === 0 && <span>No quick actions for this screen.</span>}
        </div>
      </div>
      <img src={image} alt={title} className="screen-preview" />
    </section>
  );
}
