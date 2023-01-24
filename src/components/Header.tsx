const Header = () => {
    return (
      <header className="w-full bg-white">
        <nav className="" role="navigation">
          <div className="md:flex-no-wrap container mx-auto flex flex-wrap items-center p-4">
            <div className="mr-4 md:mr-8">
              <a href="/">
                <svg width="69" height="66" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#FFF" d="M-149-98h1440v938H-149z" />
                    <path
                      d="M37.555 66c17.765 0 27.051-16.38 30.24-33.415C70.986 15.549 52.892 4.373 35.632.52 18.37-3.332 0 14.876 0 32.585 0 50.293 19.791 66 37.555 66z"
                      fill="#000"
                    />
                    <path
                      d="M46.366 42.146a5.55 5.55 0 01-1.948 2.043c-.86.557-1.811 1.068-2.898 1.3-1.087.279-2.265.511-3.487.511H22V20h18.207c.905 0 1.675.186 2.4.604a6.27 6.27 0 011.811 1.485 7.074 7.074 0 011.54 4.504c0 1.207-.317 2.368-.905 3.482a5.713 5.713 0 01-2.718 2.507c1.45.418 2.582 1.16 3.442 2.229.815 1.114 1.223 2.553 1.223 4.364 0 1.16-.226 2.136-.68 2.971h.046z"
                      fill="#FFF"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div className="text-black">
              <p className="text-lg">Storyblok</p>
              <p>React Demo</p>
            </div>
            <div className="ml-auto md:hidden">
              <button
                className="flex items-center rounded border px-3 py-2"
                type="button"
              >
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="w-full md:flex md:w-auto md:flex-grow md:items-center">
              <ul className="md:items-revert -mx-4 mt-4 flex flex-col border-t pt-4 md:mx-0 md:mt-0 md:mr-4 md:ml-auto md:flex-row md:border-0 md:pt-0 lg:mr-8">
                <li>
                  <a href="/" className="block px-4 py-1 md:p-2 lg:px-8">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="block px-4 py-1 md:p-2 lg:px-8">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/guides" className="block px-4 py-1 md:p-2 lg:px-8">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="/author" className="block px-4 py-1 md:p-2 lg:px-8">
                    Authors
                  </a>
                </li>
                <li>
                  <a href="/about" className="block px-4 py-1 md:p-2 lg:px-8">
                    About
                  </a>
                </li>
                <li>
                  <a href="/search" className="block px-4 py-1 md:p-2 lg:px-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="24"
                      height="24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };

export default Header;
