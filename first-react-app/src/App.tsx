import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Message />
      <br></br>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
      <br></br>
      <Alert>This is an alert message!</Alert>
      <Button colour="success" onClick={() => console.log("Clicked")}>
        Click me!
      </Button>
      <Button colour="danger" onClick={() => setAlertVisible(true)}>
        Alert Button
      </Button>
      {alertVisible && <DismissableAlert onClose={() => setAlertVisible(false)}>Dismiss me!</DismissableAlert>}
    </div>
  );
}

export default App;
