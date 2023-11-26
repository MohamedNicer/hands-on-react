function App() {
  const someName = 'StarGazers'
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazers Group" />
        <hgroup>
          <h1>Meet the <i style={{ color: 'blueviolet' }}>{someName}</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={()=> alert('Hi There!')}>Click It</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App