import "./list.css";
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from "./navbar";
import SideMenu from "./sidemenu";
import AppleIcon from "./img/string.jpg";

const List = () => {
  return (
    <>
      <div className="list-container">
        <div className="left">
          <SideMenu />
        </div>
        <div className="right">
          <Navbar />
          <div className="body">
            <div className="table-wrapper">
              <table className="table-container">
                <thead style={{textAlign:'left'}}>
                  <tr>
                    <th>Ticket Details</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Priority</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td>
                      <div className="data-1">
                        <div className="img-1"><img src={`${AppleIcon}` } width='40' alt='apple' style={{borderRadius: '50%'}}/></div>
                        <div style={{marginLeft: '6px'}}><p className="para-1">Contact email not linked</p>
                          <p className="para-2">Updated 1 day ago</p>
                        </div>
                      </div>
                      
                    </td>

                    <td><div><p className="para-1">Tom Cruise</p>
                          <p className="para-2">on 24.05.2019</p>
                        </div></td>
                    <td><div><p className="para-1">May 26, 2019</p>
                          <p className="para-2"> 6:30pm</p>
                        </div></td>
                    <td><div className="highPriority">High</div></td>
                    <td style={{marginLeft:'30px'}}><MenuIcon /></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="data-1">
                        <div className="img-1"><img src={`${AppleIcon}` } width='40' alt='apple' style={{borderRadius: '50%'}}/></div>
                        <div style={{marginLeft: '6px'}}><p className="para-1">Adding Images to Featured Images </p>
                          <p className="para-2">Updated 1 day ago</p>
                        </div>
                      </div>
                      
                    </td>

                    <td><div><p className="para-1">Matt Damon</p>
                          <p className="para-2">on 25.05.2019</p>
                        </div></td>
                    <td><div><p className="para-1">May 26, 2019</p>
                          <p className="para-2"> 8:00 am</p>
                        </div></td>
                    <td><div className="lowPriority">Low</div></td>
                    <td style={{marginLeft:'30px'}}><MenuIcon /></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="data-1">
                        <div className="img-1"><img src={`${AppleIcon}` } width='40' alt='apple' style={{borderRadius: '50%'}}/></div>
                        <div style={{marginLeft: '6px'}}><p className="para-1">When will i be charged this month? </p>
                          <p className="para-2">Updated 1 day ago</p>
                        </div>
                      </div>
                      
                    </td>

                    <td><div><p className="para-1">Robert Downey</p>
                          <p className="para-2">on 25.05.2019</p>
                        </div></td>
                    <td><div><p className="para-1">May 26, 2019</p>
                          <p className="para-2"> 7:30 pm</p>
                        </div></td>
                    <td><div className="highPriority">High</div></td>
                    <td style={{marginLeft:'30px'}}><MenuIcon /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
