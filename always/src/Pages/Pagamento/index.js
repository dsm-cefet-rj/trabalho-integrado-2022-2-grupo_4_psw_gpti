import React from 'react';
import {Button, CloseButton} from 'reactstrap';
import {AreaPagamento} from './Styled';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';


const Page = () => {
    return(
        <AreaPagamento>
		<Helmet>
            <title>Pagamento</title>
        </Helmet> 
            <div className='Container'>
                <div className='row'>
                    <div className='col'>
                        <div className='two'>
                            <h3>Qual a forma de Pagamento?</h3>
                            <img className='four' src='Pix.png' alt='Pix'></img>
                            <img className='five' src='money.png' alt='Dinheiro'></img>
                                <div>
                         <          button className='three two' ><Link to="/Pagamento_Final"> Pix </Link> </button>
                                    <button className='three two' > Dinheiro </button>    
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col two left">
                        <p><b>Local para entrega: </b></p>
                        <hr/>
                        <p><b><b>Total a Pagar: </b></b></p>
                    </div>
                </div>
                <div className="row">
			        <div className="col">
				        <Button className = "one"><Link to="/Pedido_Final">Finalizar Pagamento</Link></Button>
			        </div>
	            </div>
            </div>
        </AreaPagamento>
    );
}
export default Page;