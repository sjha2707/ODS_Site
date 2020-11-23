import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class SearchResults extends Component{
    render() {
        return (
            <div className={
                'appointment-list item-list mb-3 ' + 
                (this.props.formDisplay ? '' : 'add-appointment1' )
            }
            >
                 {this.props.results.map( item => (
                     <div className="pet-item col media py-3 card-body" key={item.docId}>
                        <div className="pet-info media-body">
                            <div className="mr-3">
                                    <button className="pet-delete btn btn-sm btn-primary" 
                                    onClick={()=> this.props.openDocument(item.docUrl)}>
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
        );
    }
} 

export default SearchResults;