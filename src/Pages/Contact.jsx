const Contact = () => {
  return (
    <nav className="flex-grow flex flex-col justify-center items-center gap-10">
      <div className="flex gap-5 md:hidden">
        <a href="https://github.com/Roopaksh1" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-4x hover:scale-125 transition-transform cursor-pointer"></i>
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook fa-4x hover:scale-125 transition-transform cursor-pointer"></i>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter fa-4x hover:scale-125 transition-transform cursor-pointer"></i>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram fa-4x hover:scale-125 transition-transform cursor-pointer"></i>
        </a>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-20">
          <a
            href="https://github.com/Roopaksh1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-8x hover:scale-125 transition-transform cursor-pointer"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook fa-8x hover:scale-125 transition-transform cursor-pointer"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter fa-8x hover:scale-125 transition-transform cursor-pointer"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram fa-8x hover:scale-125 transition-transform cursor-pointer"></i>
          </a>
        </div>
      </div>
      <p className="text-2xl font-bold tracking-widest font-serif">FakeStore</p>
    </nav>
  );
};

export default Contact;
