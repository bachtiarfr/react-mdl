import React, { Component } from 'react';
import '../bootstrap/bootstrap.css';

class Landingpage extends Component {
    render() {
        const klik = console.log('oke');

        return (
            <div>
                <section className="row fullscreen align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 banner-left">

                        <h6>This is me</h6>
                        <h1>Philip Gilbert</h1>
                        <p>
                            You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
							</p>
                        <a href="#" className="primary-btn text-uppercase">discover now</a>
                    </div>
                </section>
            </div>
        );
    }
}
export default Landingpage;