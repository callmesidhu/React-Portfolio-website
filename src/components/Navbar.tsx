
const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-5">
      <h1 className="text-3xl font-bold">Call Me Sidhu</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;