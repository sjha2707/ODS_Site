import React , {Component} from 'react'; 
import '../css/App.css';

import SideBar from "./slidebar";
import Addlinks from './Addlinks';
import SearchDocuments from './SearchDocuments';
import SearchResults from './SearchResults';
import AppOverivew from './Overivew';

class App extends Component {

    constructor() {
      super();
      this.state = {
        searchResults: [],
        lastIndex:0
      };
    }

    componentDidMount()
    {
      fetch('./data.json')
      .then(response => response.json())
      .then(result =>{
        const docs= result.map(item => {
          item.docId=this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex+1})
          return item;  
        });
        this.setState({
          searchResults: docs
        });
      });
    }

    render() {
      return (
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <div> OFFICIAL DOCUMENT SYSTEMUnite </div>
                  <Addlinks />
                  <SearchDocuments />
                  <SearchResults  results={this.state.searchResults}/>
                  <AppOverivew />
                  <div> List test  Documents</div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
   }
}



export default App;
