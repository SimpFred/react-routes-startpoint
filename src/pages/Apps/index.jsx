import { Link } from "react-router-dom";

function AppsPage({ apps }) {
  /*     {
        id: 1,
        name: "Farmville",
        type: "game",
        price: 0,
      }, */
  return (
    <main>
      <h2>Apps</h2>
      <ul>
        {apps.map((app, index) => (
          <li key={index}>
            <h3>{app.name}</h3>
            <p>{`£${app.price}`}</p>
            <Link to={`/apps/${app.id}`}>View details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AppsPage;
