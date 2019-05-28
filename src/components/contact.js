import React from 'react';
import { Formik, Field, Form} from 'formik';
import logo from '../images/logo-fokus.png';
import phone_icon from '../images/ic_phone_24px.svg';

const Contact = () => (
  <section className="section contact">
    <div className="container">
      <h2 className="form-heading">
        Tu smo za sva vaša pitanja
      </h2>
      <a href="#" class="phone-mobile"><img className="phone-img" src={phone_icon} />+381 36 20 40 20</a>
      <div className="columns">
        <div className="column is-8-desktop">
          <div className="content">
          <Formik
            initialValues={{ name: "", email: "", subject: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
            render={props => (
              <Form action="">
                <div className="field">
                  <label className="label">Ime i prezime</label>
                  <div className="control">
                    <Field type="text" name="name" className="input" type="text" placeholder="Unesite vaše ime i prezime" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <Field type="email" name="email" className="input" type="email" placeholder="Unesite vaš email" />
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Pitanja</label>
                      <div className="control">
                        <Field component="textarea" name="subject" className="textarea" placeholder="Postavite pitanje" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary">
                        Pošalji
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )} 
            />
            
          </div>
        </div>
        <div className="column is-4-desktop">
          <div className="content">
            <div className="contact-data">
                <h3>Kontakt</h3>
                <ul>
                  <li className="fk-icon place">Dositejeva 16, Kraljevo</li>
                  <li className="fk-icon phone"><a href="tel:+38136204020">+381 36 20 40 20</a></li>
                  <li className="fk-icon email"><a href="mailto:fokuskraljevo@gmail.com">fokuskraljevo@gmail.com</a></li>
                </ul>
            </div>
            <div className="working-hours">
              <h3>Radno vreme</h3>
              <ul>
                <li>08 do 20h radnim danima</li>
                <li>08 do 15h subotom</li>
                <li>Nedeljom ne radimo</li>
              </ul>
            </div>
          </div>       
        </div>
      </div>
    </div>
  </section>
)

export default Contact;