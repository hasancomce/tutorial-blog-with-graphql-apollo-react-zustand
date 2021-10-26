import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import PostAdd from './pages/PostAdd';
import PostDetail from './pages/PostDetail';
import PostEdit from './pages/PostEdit';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/post-add" exact component={PostAdd} />
        <Route path="/post-detail" exact component={PostDetail} />
        <Route path="/post-edit" exact component={PostEdit} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
