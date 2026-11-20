const links =[ "dashboard","My tasks","Teamboard", "Calendar"];

export default function "Sidebar"() {
    return (
<aside className="sidebar">
    <h2 className="logo">Team Flow</h2>

    {links.map ((link) => (
       <a key={link} href="#" onClick={(e) => e.preventDefault()}>
          {link}
        </a>

    )
    )}

</aside>
    );
}