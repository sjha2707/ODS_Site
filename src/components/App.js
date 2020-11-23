import React, { Component } from 'react';
import '../css/App.css';

import SideBar from "./slidebar";
import Addlinks from './Addlinks';
import SearchDocuments from './SearchDocuments';
import Search from './Search';
import SearchResults from './SearchResults';
import AppOverview from './Overview';




import {without} from 'lodash';
import { blue } from '@material-ui/core/colors';

class App extends Component {

    constructor() {
      super();
      this.state = {
        searchResults: [],
        formDisplay: false,
        orderBy: 'SymbolName',
        queryTest: '',
        orderDir: 'asc',
        lastIndex: 0
      };
      this.openDocument=this.openDocument.bind(this);
      this.toggleForm=this.toggleForm.bind(this);
    }

    toggleForm(){
      this.setState({
        formDisplay: true
        //!this.state.formDisplay
      });
    }

    openDocument(doc){

      /*let tempDoc=this.state.searchResults;
      tempDoc=without(tempDoc,doc);
      this.setState({
        searchResults: tempDoc
      });*/
      const win = window.open(doc.docUrl, '_blank');
      if (win != null) {
        win.focus();
      }
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

      let order;
      let filteredSR=this.state.searchResults;
      if(this.state.orderDir=== 'asc'){

        order = 1 ;
      } else {
        order =-1;
      }
      filteredSR.sort((a, b) => {
        if (
          a[this.state.orderBy] <
          b[this.state.orderBy]
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      });

      return (
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <div className="appointment-list item-list mb-3">
                    <div className="ods-item label-item font-weight-bold"> 
                    <hr  style={{
                        color: '#00ADEF',
                        backgroundColor: '#00ADEF',
                        height: 3,
                        borderColor : '#00ADEF'
                    }}/>

                    <img  src={process.env.PUBLIC_URL + '/logo-un.jpg'} ></img><span className="label-item">OFFICIAL DOCUMENT SYSTEM</span>  <img  src={process.env.PUBLIC_URL + '/powered-by-unite.jpg'} ></img>
                   
                     <hr  style={{
                        color: '#000000',
                        backgroundColor: '#00ADEF',
                        height: 3,
                        borderColor : '#00ADEF'
                    }}/>
                    </div>
                  </div>
                  <Addlinks />
                  <Search />
                  <SearchDocuments
                  orderBy={this.state.orderBy}
                  formDisplay={this.state.formDisplay}
                  results={this.state.searchResults}
                  toggleForm={this.toggleForm}
                  openDocument={this.openDocument}
                  />
                  <AppOverview />
                  <div> List Documents</div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
   }
}



export default App;
