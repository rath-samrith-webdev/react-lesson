import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxLength={10} show={false}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam pariatur
        at quos omnis tenetur, adipisci voluptate a laborum atque eos dicta nemo
        accusamus dignissimos consequatur ducimus. Nam incidunt non inventore
        voluptas repellendus? Veniam, mollitia, ab pariatur architecto quibusdam
        qui rerum et ratione unde perferendis temporibus error enim! Voluptatem,
        facilis provident.
      </ExpandableText>
    </>
  );
}

export default App;
