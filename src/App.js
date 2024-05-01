import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main'
function App() {

  let blogPosts = [
    {
        date: "2020-11-12T12:00:00",
        title: "On the Street in Brooklyn",
        url: "/pics/blog-image-1.jpg"
        // content: ""
    },
    {
        date: "2020-11-11T12:00:00",
        title: "Vintage in Vogue",
        url: "/pics/blog-image-2.jpg"
        // content: ""
    },
  ]

  return (
    <div className="App">
      <Header className='app_header'/>
      <Main className='app_main' articles={blogPosts}/>
      <Footer className='app_footer'/>
    </div>
  );
}

export default App;
