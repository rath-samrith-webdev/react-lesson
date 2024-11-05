import ListGroup from "./components/ListGroup";
import ListGroupFTProps from "./components/ListGroupFTProps";
function App() {
  const cities=['Phnom Penh','LA','Tokyo','Paris','Jakata']
  return (
    <div className="container">
      <ListGroup></ListGroup>
      <ListGroupFTProps items={cities}/>
    </div>
  );
}

export default App;
