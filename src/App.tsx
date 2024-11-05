import ListGroup from "./components/ListGroups";

function App() {
  const cities = ["New York", "LA", "Tokyo"];
  /**
   * @function handleSelectItem takes items with the type string as the
   * @param
   * @returns @void while @log @item into the @console
   */
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </>
  );
}

export default App;
