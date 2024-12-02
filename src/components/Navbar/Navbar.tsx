const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            color: "red",
          }}
        >
          logo
        </p>
        <p
          style={{
            color: "blue",
          }}
        >
          menu
        </p>
      </nav>
    </div>
  );
};

export { Navbar };
