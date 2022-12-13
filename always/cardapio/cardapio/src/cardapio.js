import React from 'react';

const Nav = function() {
    return <header id="headerNav">
    <img id="logoAlways" src={require("./assets/Logo.jpeg")}/>
    <nav id="nav">
     <button id="menuMobile">
        <span id="botaoMenu"></span>
     </button>
     <ul id="menuNav">
        <li><a href="/">Cardápio</a></li>
        <li><a href="/">Meus pedidos</a></li>
     </ul>
  </nav>
</header>
 }

 export {Nav};

const Cardapio = () => {
        return <div align="center" position="relative" display= "flex">
           <div class= "four" >
              <div class="three">
                 <form align="left">
                    <div class="tamHamburg">
                       <h3 class="one"> Qual o tamanho do seu sanduíche? </h3>
                       <div align="center" display="flex">
                          <img id="sanduiche1" width={270} height={150} src={require("./assets/sanduiche.jpg")}/> 
                          <img id="sanduiche2" width={270} height={150} src={require("./assets/sanduiche2.jpeg")}/>
                       </div>
                       <div align="center">
                          <input type="radio" id="sdc1" name="sdc" value="sdc_peq"/>
                          <label class="one" for="sdc1"> 20cm - R$ 15,00 </label> 
                          <input class="one" type="radio" id="sdc2" name="sdc" value="sdc_grd"/>
                          <label for="sdc2"> 40cm - R$ 28,00</label>
                       </div>
                    </div>

                    <div>
                       <div class="one">
                          <h3 class="one"> Escolha qual pão deseja para seu sandu&iacuteche: </h3>
                          <div align="left">
                             <input type="radio" id="pao1" name="pao" value="p_italiB"/>
                             <label for="pao1"> Italiano Branco </label> <br/>
                             <input type="radio" id="pao2" name="pao" value="p_parmOre"/>
                             <label for="pao2"> Parmesão com Orégano </label><br/>
                             <input type="radio" id="pao3" name="pao" value="p_3qj"/>
                             <label for="pao3"> Três Queijos </label><br/>
                             <input type="radio" id="pao4" name="pao" value="p_9G"/>
                             <label for="pao4"> Integral - 9 Grãos </label><br/>
                             <input type="radio" id="pao5" name="pao" value="p_Aust"/>
                             <label for="pao5"> Australiano </label><br/>
                          </div>
                       </div>
                    </div>
                    <div >
                       <div class="one">
                          <h3 class="one"> Escolha qual proteína deseja para seu sanduíche: </h3>
                          <div align="left">
                             <input type="radio" id="prot1" name="prot" value="FrgC"/>
                             <label for="prot1"> Frango com Cream Cheese </label> <br/>
                             <input type="radio" id="prot2" name="prot" value="CarP"/>
                             <label for="prot2"> Carne ao Molho Sabor Picanha </label><br/>
                             <input type="radio" id="prot3" name="prot" value="CarneS"/>
                             <label for="prot3"> Carne de Soja </label><br/>
                             <input type="radio" id="prot4" name="prot" value="LingSu"/>
                             <label for="prot4"> Linguiça Suína </label><br/>
                             <input type="radio" id="prot5" name="prot" value="PeitoP"/>
                             <label for="prot5"> Peito de Peru </label><br/>
                          </div>
                       </div>
                    </div>
                    <div>
                       <div class="one">
                          <h3 class="one"> Escolha até três vegetais para o seu sanduíche: </h3>
                          <div align="left">
                             <input type="checkbox" id="veg1" name="veg" value="Alf"/>
                             <label for="veg1"> Alface </label> <br/>
                             <input type="checkbox" id="veg2" name="veg" value="Tom"/>
                             <label for="veg2"> Tomate </label><br/>
                             <input type="checkbox" id="veg3" name="veg" value="Ceb"/>
                             <label for="veg3"> Cebola </label><br/>
                             <input type="checkbox" id="veg4" name="veg" value="Pim"/>
                             <label for="veg4"> Pimentão </label><br/>
                             <input type="checkbox" id="veg5" name="veg" value="Cen"/>
                             <label for="veg5"> Cenoura Ralada </label><br/>
                             <input type="checkbox" id="veg6" name="veg" value="Picles"/>
                             <label for="veg6"> Picles </label><br/>
                             <input type="checkbox" id="veg7" name="veg" value="AzV"/>
                             <label for="veg7"> Azeitonas Verdes </label><br/>
                             <input type="checkbox" id="veg8" name="veg" value="Pep"/>
                             <label for="veg8"> Pepino </label><br/>
                          </div>
                       </div>
                    </div>
                    <div >
                       <div class="one">
                          <h3 class="one"> Escolha qual queijo deseja para seu sanduíche: </h3>
                          <div align="left">
                             <input type="radio" id="qj1" name="qj" value="QPrato"/>
                             <label for="qj1"> Prato </label> <br/>
                             <input type="radio" id="qj2" name="qj" value="QMuss"/>
                             <label for="qj2"> Mussarela </label><br/>
                             <input type="radio" id="qj3" name="qj" value="QChe"/>
                             <label for="qj3"> Cheddar </label><br/>
                             <input type="radio" id="qj4" name="qj" value="QSui"/>
                             <label for="qj4"> Suíço </label><br/>
                             <input type="radio" id="qj5" name="qj" value="QParm"/>
                             <label for="qj5"> Parmesão </label><br/>
                          </div>
                       </div>
                    </div>
                    <div >
                       <div class="one">
                          <h3 class="one"> Escolha até três molhos para o seu sanduíche: </h3>
                          <div align="left">
                             <input type="checkbox" id="molho1" name="molho" value="ket"/>
                             <label for="molho1"> Ketchup </label> <br/>
                             <input type="checkbox" id="molho2" name="molho" value="Maio"/>
                             <label for="molho2"> Maionese </label><br/>
                             <input type="checkbox" id="molho3" name="molho" value="Mos"/>
                             <label for="molho3"> Mostarda </label><br/>
                             <input type="checkbox" id="molho4" name="molho" value="Barb"/>
                             <label for="molho4"> Barbecue </label><br/>
                             <input type="checkbox" id="molho5" name="molho" value="Mverd"/>
                             <label for="molho5"> Molho Verde </label><br/>
                             <input type="checkbox" id="molho6" name="molho" value="BilJ"/>
                             <label for="molho6"> Billy & Jack </label><br/>
                          </div>
                       </div>
                    </div>
                    <div>
                       <div class="one">
                          <h3 class="one"> Escolha adicionais para seu sanduíche: </h3>
                          <div align="left">
                             <input type="checkbox" id="adc1" name="adc" value="Bc"/>
                             <label for="adc1"> Bacon - (R$ 1,90) </label> <br/>
                             <input type="checkbox" id="adc2" name="adc" value="QEx"/>
                             <label for="adc2"> Queijo Extra - (R$ 2,90) </label><br/>
                             <input type="checkbox" id="adc3" name="adc" value="CreamC"/>
                             <label for="adc3"> Cream Cheese - (R$ 2,50) </label><br/>
                             <input type="checkbox" id="adc4" name="adc" value="Pepp"/>
                             <label for="adc4"> Pepperoni - (R$ 1,90) </label><br/>
                             <input type="checkbox" id="adc5" name="adc" value="2_Prot"/>
                             <label for="adc5"> Dobro de Proteína - (R$ 5,90) </label><br/>
                             <input type="checkbox" id="adc6" name="adc" value="TomS"/>
                             <label for="adc6"> Tomate Seco - (R$ 1,50) </label><br/>
                          </div>
                       </div>
                    </div>
                    <div >
                       <div class="one">
                          <h3 class="one"> Escolha acompanhamento para seu sanduíche: </h3>
                          <div align="left">
                             <label for="acomp1"> Cookie de Chocolate - (R$ 2,90)</label>
                             <select name="acomp1" id="cookie">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="acomp5"> Brownie de Chocolate - (R$ 6,90)</label>
                             <select name="acomp5" id="brwn">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="acomp2"> Batata Frita P - (R$ 3,90)</label>
                             <select name="acomp2" id="btp">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="acomp3"> Batata Frita M - (R$ 6,90)</label>
                             <select name="acomp3" id="btm">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="acomp4"> Batata Frita G - (R$ 8,90)</label>
                             <select name="acomp4" id="btg">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="acomp6"> Onion Rings - (R$ 6,90) </label>
                             <select name="acomp6" id="onr">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                          </div>
                       </div>
                    </div>
                    <div >
                       <div class="one">
                          <h3 class="one"> Bebidas: </h3>
                          <div align="left">
                             <label for="beb1"> Coca cola lata - 350ml (R$ 5,90) </label>
                             <select name="beb1" id="coke350">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="beb2"> Coca cola 2L (R$ 11,90) </label>
                             <select name="beb2" id="coke2l">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="beb3"> Del Valle Uva 350ml (R$ 4,90) </label>
                             <select name="beb3" id="dvu350">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="beb4"> Del Valle Pêssego 350ml (R$ 4,90) </label>
                             <select name="beb4" id="dvp350">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="beb5"> Água 510ml (R$ 2,90) </label>
                             <select name="beb5" id="agua">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                             <label for="beb6"> Guaracamp 395ml (R$ 2,90) </label>
                             <select name="beb6" id="grcp">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                             <br/>
                          </div>
                          <br/><br/>
                       </div>
                    </div>
                    <div align="right">
                 <form>
                 <input class="one" type="submit" value="Próximo"/>
                 </form>
                 </div>
                </form>
              </div>
           </div>          
        </div> 


}
export default Cardapio;