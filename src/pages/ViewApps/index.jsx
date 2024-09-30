import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewAppPage({ apps }) {
  const { id } = useParams();
  const [app, setApp] = useState({
    id: 1,
    name: "Farmville",
    type: "game",
    price: 0,
  });

  useEffect(() => {
    if (!apps || !id) {
      return;
    }
    const foundapp = apps.find((app) => Number(app.id) === Number(id));
    setApp(foundapp);
  }, [id, apps]);

  console.log({ app });

  if (!app) {
    return <h2>app not found</h2>;
  }

  return (
    <main>
      <h2>app Page</h2>
      <h3>{app.name}</h3>
      <p>{`£${app.price}`}</p>
      <p>{app.type}</p>
    </main>
  );
}

export default ViewAppPage;
