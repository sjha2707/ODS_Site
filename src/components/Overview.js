import React, { Component } from 'react';


class Overview extends Component
{
    render(){
        return (
            <div className="appointment-list item-list mb-3 ">
                <div role="separator" className="dropdown-divider" />
                <div  className="pet-item col media py-3">
                    <span className="label-item pet-name" >Official Document System of the United Nations</span>
                </div>
                <div>
                    The Official Document System (ODS) is an online database of UN documents that was first launched in 1993 and updated in 2016. ODS has full-text, born-digital UN documents published from 1993 onward, including documents of the Security Council, the General Assembly, the Economic and Social Council 
                    and their subsidiaries, as well as administrative issuances and other documents.
                </div>
                <div>
                    The database also includes scanned documents published between 1946 and 1993, including all resolutions of the principal organs, all documents of the Security Council and the General Assembly Official Records. Documents are available in the official
                    languages of the UN; some documents are also available in German.
                </div>
                <div>
                    ODS does not have the following types of materials: documents issued before 1993 
                    that have not yet been digitized, press releases, sales publications, such as the Yearbook and the Treaty Series, and documents that do not have a UN symbol.

                </div>
                <div>
                    ODS is maintained by the Office of Information and Communications Technology (OICT). New documents are added by the Department for General Assembly and Conference Management (DGACM). Scanned documents and metadata are contributed
                    by the Dag Hammarskjöld Library and the UN Office at Geneva Library.
                </div>
                <div>
                This website is best used in recent versions of all major browsers. To download multiple documents, please use Google Chrome or Opera.

                </div>
                <div>
                If you have any questions or problems, please contact the Information and Communications Technology Service Desk by e-mail.

                </div>
            </div>
            

            );
    }
}

export default Overview;