import React, { Component } from 'react';
import AppOverview from './Overview';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaPlus } from 'react-icons/fa';
import Moment from 'react-moment';


class SearchDocuments extends Component
{
  constructor() {
    super();
    this.state = {
      symbolName: '',
      truncateSymbol: '',
      titleName: '',
      subject: ''
      
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }

  handleSearch(e)
  {
    e.preventDefault();
    let tempSearch = {
      symbolName: this.state.symbolName,
      truncateSymbol: this.state.truncateSymbol,
      titleName: this.state.titleName,
      subject: this.state.subject
    };

    //this.props.searchResults(tempSearch);
    
    this.setState({
    symbolName: '',
    truncateSymbol: '',
    titleName: '',
    subject: ''
    });

    //this.props.toggleFrom();

  }

  handleChange(e){
    const target=e.target;
    const value=target.value;
    const name=target.name;

    this.setState({
      [name]: value
    });
  }
  render(){
        return (

          <div>
             <div className={
                'card textcenter mt-3 ' + 
                (this.props.formDisplay ? '' : 'add-appointment1' )
            }
            >
            <div className="apt-addheading card-header bg-primary text-dark" 
            onClick={this.props.toggleForm}>
            Search
            </div>
  
            <div className="card-body">
              <form id="odsForm" noValidate
               onSubmit={this.handleSearch} 
               >

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="symbolName"
                    readOnly
                  >
                    Symbol
                  </label>
                  <div className="col-md-4">
                        <input
                        type="text"
                        className="form-control"
                        name="symbolName"
                        placeholder="Enter symbol"
                        value={this.state.symbolName}
                        onChange={this.handleChange}
                        />
                  </div>
                  <label
                    className="col-md-1 col-form-label text-md-right"
                    htmlFor="truncateSymbol"
                    readOnly
                  >
                    Truncation
                  </label>
                  <div className="col-md-5">
                      <div className="form-check form-check-inline">
                        <label> <input className="form-check-input" type="radio" value="Right" name="truncateSymbol" checked/> Right
                        </label>
                      </div>
                      <div className="form-check form-check-inline"> 
                      <label> <input className="form-check-input" type="radio" value="Left" name="truncateSymbol" /> Left</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label> <input className="form-check-input" type="radio" value="RightNLeft	" name="truncateSymbol" /> Right & Left	</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label> <input className="form-check-input" type="radio" value="None" name="truncateSymbol" /> None</label>
                    </div>
                 
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="titleName"
                  >
                   Word(s) in the title
                  </label>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="titleName"
                      placeholder="Enter Words of the title (English only)"
                      value={this.state.titleName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <label
                    className="col-md-1 col-form-label text-md-right"
                    htmlFor="subject"
                  >
                  Subject
                  </label>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Enter Subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="publicationDate"
                  >
                    Date of publication
                  </label>
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control"
                      name="publicationDate"
                      id="publicationDateFrom"
                    />
                  </div>
                  <div className="col-md-3">
                  <input
                      type="date"
                      className="form-control"
                      name="publicationDateTo"
                      id="publicationDateTo"
                    />
                  </div>
                  
                </div>

                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="releaseDate"
                  >
                    Date of release
                  </label>
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control"
                      name="releaseDate"
                      id="releaseDateFrom"
                    />
                  </div>
                  <div className="col-md-3">
                  <input
                      type="date"
                      className="form-control"
                      name="releaseDateTo"
                      id="releaseDateTo"
                    />
                  </div>
                  
                </div>
  
                <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="jobNumber">
                  Job Number
                  </label>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="jobNumber"
                      placeholder="Enter Job Number"
                    />
                  </div>
                  <label className="col-md-2 text-md-right" htmlFor="sessionYear">
                  Session / Year
                  </label>
                  <div className="col-md-1">
                    <input
                      type="text"
                      className="form-control"
                      name="sessionYear"
                      
                    />
                  </div>

                  <label className="col-md-2 text-md-right" htmlFor="agendaItemNumber">
                  Agenda Item Number
                  </label>
                  <div className="col-md-1">
                    <input
                      type="text"
                      className="form-control"
                      name="agendaItemNumber"
                      
                    />
                  </div>
                </div>

                <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="Fulltextsearch">
                  Full-text search
                  </label>
                  <div className="col-md-4">
                    <textarea
                      className="form-control"
                      rows="3"
                      cols="50"
                      name="Fulltextsearch"
                      id="Fulltextsearch"
                      placeholder="Enter text to search"
                    />
                  </div>
                  
                  <label className="col-md-2 text-md-right" htmlFor="Language">
                  Language for full-text
                  </label>
                  <div className="col-md-4">
                    <select  name="Language" 
                    className="form-control">
                      <option value="Arabic">Arabic</option>
                      <option value="Chinese">Chinese</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </div>
                </div>

                <div className="form-group form-row mb-0 ">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary ml-auto form-check-inline"
                      onClick={this.props.toggleForm}
                    >
                      Search
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary ml-auto form-check-inline"
                    >
                      Clear
                    </button>
                  </div>
                  
                </div>
              
              </form>
            </div>
          </div>

          <div className={
                'appointment-list item-list mb-3 ' + 
                (this.props.formDisplay ? '' : 'add-appointment' )
            }
            >
                 {this.props.results.map( item => (
                     <div className="pet-item col media py-3 card-body" key={item.docId}>
                        <div className="pet-info media-body">
                            <div className="mr-3">
                                    <button className="pet-delete btn btn-sm btn-primary" 
                                    onClick={()=> this.props.openDocument(item)}>
                                        {item.SymbolName} - {item.SymbolName2}
                                    </button>
                            </div>

                            <div className="pet-head d-flex">
                                <span className="label-item">Symbol: </span>
                                <span className="pet-name">{item.SymbolName}</span>
                                <span className="label-item ml-auto">Subject(s) : </span>
                                <span className="apt-notes">{item.subject}</span>
                            </div>
                        
                            <div className="owner-name">
                                <span className="label-item">Agenda Item(s): </span>
                                <span>{item.agendaItem}</span>
                            </div>
                            <div className="owner-name">
                                <span className="label-item">Publication Date: </span>
                                <Moment
                                    date={item.PublicationDate}
                                    parse="YYYY-MM-dd"
                                    format="DD-MMM-YYYY"
                                    /> 
                            </div>
                        </div>
                   </div>
                 ))}
            
            </div>
          </div>
        );
    }
}

export default SearchDocuments;