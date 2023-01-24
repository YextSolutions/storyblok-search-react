const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center py-20 text-center">
      <p>React Demo Website created with Storyblok and Yext</p>
      <div className="my-8 flex items-center">
        <img
          src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
          alt="Storyblok Logo"
          className="m-4 w-48"
        />
        <p> X </p>
        <img
          src="https://cdn.fs.brandfolder.com/cache=expiry:604800/cache=expiry:604800/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
          alt="Yext Logo"
          className="m-4 w-8"
        />
      </div>
    </footer>
  );
};

export default Footer;
