import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

function MyFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left sticky-footer'>
      <MDBContainer className='p-2'>
        <MDBRow>
          <MDBCol className='mb-4 mb-md-0 text-center'>
            <h5 className='text-uppercase'>Thanks for coming!</h5>

            <p>
             Unfortunately, we  ( me ) are still working on this website. Please comeback once it is finished!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/Massolinii'>
          Massolini
        </a>
      </div>
    </MDBFooter>
  );
}

export default MyFooter;
