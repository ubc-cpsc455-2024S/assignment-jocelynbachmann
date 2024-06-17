const About = () => {
  return (
    <div className="about-description">
    <h2 className="about-hello">Hello!</h2>
    <p>This is a very basic team builder site built by me (Jocelyn) for assignment 1 of CPSC 455.</p>
    <p>I am a 4th year BUCS student at UBC! I can do better than this! 
      Unfortunately, I do not have time right now, so this just satisfies the following requirements (scraped from <a href="https://www.students.cs.ubc.ca/~cs-455/2024_S/notes/part01/assignment01.html">the assignment page</a>):</p>
    <div className="about-requirements">
      <ol className="arabic simple">
        <li><p>An HTML file that loads a CSS file and a JS file</p></li>
        <li><p>A <strong>navbar</strong> (should have functioning links to at least a home page (the main page where your items are listed), and an about page (brief information about yourself, the project, etc.))</p></li>
        <li><p>A form with multiple inputs, to take in a:</p></li>
      </ol>
      <ul className="simple">
        <li><p><strong>Member name</strong></p></li>
        <li><p><strong>Description of member</strong></p></li>
        <li><p><strong>Member age</strong></p></li>
        <li><p><strong>Image of member</strong> (image can come from a URL) as well as a button to add the member to a list, and a button to clear the inputs in the form.</p></li>
      </ul>
      <ol className="arabic simple" start="4">
        <li><p>A JSON string that holds initial members (should be prefilled with a name, description, age and image url, for when the site loads … and you can parse it into a JS object).</p></li>
        <li><p>A list (likely unordered), made up of member cards that contain the member info (it should be updated with a new card whenever you click the add button in your form).</p></li>
        <li><p>A <strong>button</strong> to delete all the cards.</p></li>
        <li><p>Sufficient styling (showing some effort to upgrade the site from basic HTML), which may include things like:</p></li>
      </ol>
      <ul className="simple">
        <li><p>Text color</p></li>
        <li><p>Background color</p></li>
        <li><p>Different positioning</p></li>
        <li><p>Sizing (width, height), padding, margins</p></li>
        <li><p>Etc.</p></li>
      </ul>
      <ol className="arabic simple" start="8">
        <li><p><strong>Site should be responsive</strong>, and can handle shrinking the web browser or viewing with the device emulator in Chrome (expecting a flexbox if appropriate or media queries or at least appropriate sizing).</p></li>
        <li><p>Something cool and extra! This is wide open for you to explore, and try to push your knowledge and boundaries. For example:</p></li>
      </ol>
      <ul className="simple">
        <li><p>individual buttons for each card that will allow you to delete them (a button with an X or that says delete)</p></li>
        <li><p>animate the cards in or out of the list when you add or delete them (using CSS animations and transitions)</p></li>
        <li><p>additional form elements that show up in the cards (e.g. power/skill/favorite thing, etc.)</p></li>
        <li><p>sorts, filters or search</p></li>
      </ul>
    </div>
  </div>
  )
}

export default About;