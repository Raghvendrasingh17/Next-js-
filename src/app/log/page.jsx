export default function Index() {
    return (
      <>
        {/* Navbar */}
        <div className="h-14 bg-violet-600 flex items-center px-6">
          <h3 className="text-4xl text-white">WEB ZONE</h3>
          <div className="ml-auto flex gap-8 text-white">
            <a href="#" className="hover:text-violet-300">Home</a>
            <a href="#" className="hover:text-violet-300">Blog</a>
            <a href="#" className="hover:text-violet-300">Services</a>
            <a href="#" className="hover:text-violet-300">About</a>
            <a href="#" className="hover:text-violet-300">Login</a>
          </div>
        </div>
      </>
    );
  }
  