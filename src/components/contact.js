import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import logo from '../images/logo-fokus.png';
import phone_icon from '../images/ic_phone_24px.svg';
import SignUpSchema from './validate'
import axios from 'axios'

function serialize(form) {
  var field, l, s = [];
  if (typeof form == 'object' && form.nodeName == "FORM") {
      var len = form.elements.length;
      for (var i = 0; i < len; i++) {
          field = form.elements[i];
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
              if (field.type == 'select-multiple') {
                  l = form.elements[i].options.length;
                  for (var j = 0; j < l; j++) {
                      if (field.options[j].selected)
                          s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                  }
              } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                  s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
              }
          }
      }
  }
  return s.join('&').replace(/%20/g, '+');
}
const Contact = () => (
  <section className="section contact">
    <div className="container">
      <h2 className="form-heading">
        Tu smo za sva vaša pitanja
      </h2>
      <a href="tel:+38136204020" className="phone-mobile"><img className="phone-img" src={phone_icon} />+381 36 20 40 20</a>
      <div className="columns">
        <div className="column is-8-desktop">
          <div className="content">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={SignUpSchema}
            onSubmit={(values, actions) => {
              axios({
                method: 'post',
                url: '/main.php',
                data: {
                  name: values.name,
                  email: values.email,
                  message: values.message
                },
                headers: {
                  'content-type': 'application/json',
                },
              });
      
            }}
            render={({errors,touched }) => (
              <Form action="">
                <div className="field">
                  <label className="label">Ime i prezime</label>
                  <div className="control">
                    {errors.name && touched.name ? ( <div className="error-msg">{errors.name}</div> ) : null}
                    <Field type="text" name="name" className="input" type="text" placeholder="Unesite vaše ime i prezime" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    {errors.email && touched.email ? ( <div className="error-msg">{errors.email}</div> ) : null}
                    <Field type="email" name="email" className="input" type="email" placeholder="Unesite vaš email" />
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <label className="label">Pitanja</label>
                      <div className="control">
                        {errors.message && touched.message ? ( <div className="error-msg">{errors.message}</div> ) : null}
                        <Field component="textarea" name="message" className="textarea" placeholder="Postavite pitanje" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button type="submi" className="button is-primary">
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
                  <li className="fk-icon place">Dositejeva 19, Kraljevo</li>
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