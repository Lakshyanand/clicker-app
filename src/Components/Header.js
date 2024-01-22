import React from "react";

function Header(props) {
    return(
        <div>
            <header>
                <div className='container-fluid bg-secondary'>
                    <div className='row text-center text-light'>
                        <h3 className='mt-2 mb-2'>
                        <i className='fa fa-hand-pointer-o'></i>
                            {props.title}
                        </h3>
                    </div>
                </div>
             </header>
             {/* <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <i className="fa fa-hand-pointer-o fa-2x text-white mr-2" />
          <div className="text-light h2">{props.title}</div>
        </div>
      </div>
    </nav> */}
        </div>
    );
}

export default Header;