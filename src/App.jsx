import Support from "./components/Support";
import Welcome from "./components/Welcome";

function App() {
  const someName = 'StarGazers'
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazers Group" />
        <hgroup>
          <Welcome someName="StarGazers"/>
          <p>Members of an <b>intergalactic alliance</b> <br/>
          paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Support/>
        </hgroup>
      </article>
    </div>
  )
}
export default App