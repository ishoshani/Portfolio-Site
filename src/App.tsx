import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './components/Home'
import {Social} from './components/social';
import {Layout} from './components/Layout';
import {Projects} from './components/projects';

const socialLinks = [
  {label: 'Github', path: 'https://github.com/ishoshani', icon: 'fa-brands fa-github-alt fa-2xl',
  description: 'A basically unused github profile. Hopefully fill this with more recent work soon!'},
  {label: 'LinkedIn', path: 'https://www.linkedin.com/in/ishoshani/', icon: 'fa-brands fa-linkedin fa-2xl',
  description: 'Where I\'ve been working for the past few years. I\'m currently looking for a new role!'},
  {label: 'Twitter', path: 'https://twitter.com/greyfinality', icon: 'fa-brands fa-twitter fa-2xl',
  description: 'I try to follow one important rule on Twitter: Never Post. Unfortunately, I\'m not perfect.'},
]


const App = () => {
  const router = createBrowserRouter([
    { element: <Layout />,
      children: [
    { element: <Home />,
      path: "/",
      index: true },
      { element: <Projects />,
      path: "/projects",
      },
    { element: <Social socialLinks={socialLinks} />,
      path: "/social" }
  ]}])
   return (<div>
      <RouterProvider router={router} />
          </div>)
}

export default App;