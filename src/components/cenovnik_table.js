import React from 'react';
import './style.scss';

const CenovnikTable = () => (
  <>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Cenovnik
          </h1>
        </div>
      </div>
    </section>
    <div className="container pricing-container">
      <div className="columns">
        <div className="column">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">  
            <thead>
              <tr className="heading_table">
                <td colspan="2">
                Očna ambulanta
                </td>
              </tr>
              <tr className="subheading_table">
                <th>Usluga</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pregled lekara specijaliste oftamologije</td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Oftamološki ultrazvučni pregled</td>
                <td>3000 rsd</td>
              </tr>
              <tr>
                <td>Ultrazvučna biomikroskopija ( UBM )</td>
                <td>3000 rsd</td>
              </tr>
              <tr>
                <td>Ispitivanje kolornog vida</td>
                <td>500 rsd</td>
              </tr>
              <tr>
                <td>Mrerenje očnog pritiska - tonometrija</td>
                <td>900 rsd</td>
              </tr>
              <tr>
                <td>Ispiranje suznih kanala</td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Čmičak</td>
                <td>6000 rsd</td>
              </tr>
              <tr>
                <td>Subkonjunktivalna injekcija</td>
                <td>800 rsd</td>
              </tr>
              <tr>
                <td>Kompjuterizovano vidno polje
                  Perimetrija ( 1 oko ) 
                  Usluga obuhvata perimetrijsko merenje
                  oba oka </td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Dnevna kriva očnog pritiska</td>
                <td>2500 rsd</td>
              </tr>
              <tr>
                <td>Pregled očnog dna ( fundus ) </td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Ispitivanje suvoće oka Širmer test - But test</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Fundus kamera - foto</td>
                <td>1500 rsd</td>
              </tr>
              <tr>
                <td>Testiranje kontrastne osetljivosti vida</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Aplikacija mekog kontaktnog sočiva      
                  ( terapeutsko ) </td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Obliteracija punktuma ili aplik. 
                  implanta ( plug )</td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Aplikacija triamcinolona peribulbarno</td>
                <td>4000 rsd</td>
              </tr>
              <tr>
                <td>Kontrola</td>
                <td>1000 rsd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="column">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr className="heading_table">
                <td colspan="2">
                  Očna hirurgija
                </td>
              </tr>
              <tr className="subheading_table">
                <th>Usluga</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aplikacija terapijskog mekog kontaktnog sočiva</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Bris oba oka</td>
                <td>800 rsd</td>
              </tr>
              <tr>
                <td>Epilacija trepavica</td>
                <td>2000 rsd</td>
              </tr>
              <tr>
                <td>Esteska hirurgija kapaka ( oba oka )</td>
                <td>7200 rsd</td>
              </tr>
              <tr>
                <td>Fokometrija</td>
                <td>300 rsd</td>
              </tr>
              <tr>
                <td>Hirusko lečenje čmičaka</td>
                <td>6000 rsd</td>
              </tr>
              <tr>
                <td>Hiruško lečenje perforativne povrede oka</td>
                <td>141600</td>
              </tr>
              <tr>
                <td>Ispitivanje suznog filma</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Kontrolni pregled</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Laser fotokoagulacija jednog oka</td>
                <td>12000 rsd</td>
              </tr>
              <tr>
                <td>Laser iridotomija jednog oka</td>
                <td>12000 rsd</td>
              </tr>
              <tr>
                <td>Laser kapsulotomija jednog oka</td>
                <td>12000 rsd</td>
              </tr>
              <tr>
                <td>Merenje debljine rožnjace - pehimetrija</td>
                <td>1200 rsd</td>
              </tr>
              <tr>
                <td>Merenje očnog pritiska / IOP / tonometrija</td>
                <td>900 rsd</td>
              </tr>
              <tr>
                <td>Oftamološki ultrazvucni pregled b - scann</td>
                <td>3000  rsd</td>
              </tr>
              <tr>
                <td>Operacija ektropijuma ( izvrnutosti kapaka ) </td>
                <td>60000 rsd</td>
              </tr>
              <tr>
                <td>Operacija entropijuma ( uvrnutosti kapaka ) </td>
                <td>60000 rsd</td>
              </tr>
              <tr>
                <td>Operacija glaukoma </td>
                <td>106200 rsd</td>
              </tr>
              <tr>
                <td>Operacija katarakte sa ugradnjom
                  multifokalnog sočiva </td>
                <td>141600 rsd</td>
              </tr>
              <tr>
                <td>Operacija katarakte sa ugradnjom
                  zadnjekomornog iris clip sočiva</td>
                <td>165200 rsd</td>
              </tr>
              <tr>
                <td>Operacija komplikovanih katarakti</td>
                <td>141600 rsd</td>
              </tr>
              <tr>
                <td>Operacija pterigijuma</td>
                <td>28000 rsd</td>
              </tr>
              <tr>
                <td>Pregled tumora kapaka 
                  uz ph preglod</td>
                <td>od 20000 do <br />60000 rsd</td>
              </tr>
              <tr>
                <td>Operacija tumora konjuktive uz ph pregled</td>
                <td>60000 rsd</td>
              </tr>
              <tr>
                <td>Seknudarna implatacija sočiva</td>
                <td>141600 rsd</td>
              </tr>
              <tr>
                <td>Ultrazvučna operacija katarakte sa 
                  ugradnjom sočiva / PHACO </td>
                <td>94400 rsd</td>
              </tr>
              <tr>
                <td>Refraktometrija oba oka</td>
                <td>500 rsd</td>
              </tr>
              <tr>
                <td>Skidanje sutura</td>
                <td>1000 rsd</td>
              </tr>
              <tr>
                <td>Ultrazvučna biomikroskopija UBM</td>
                <td>3000 rsd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  </>

);  

export default CenovnikTable;