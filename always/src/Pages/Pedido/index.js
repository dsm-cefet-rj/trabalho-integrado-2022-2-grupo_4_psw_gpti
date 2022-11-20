import React from 'react';
import {AreaPedido} from './Styled';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';

const Page = () => {
    return(
        <AreaPedido>
        <Helmet>
            <title>Pedido</title>
        </Helmet> 
            <div className='Container'>
                <div className='row'>
                    <div className='col'>
                        <div className='two left'>
                         <h3>Itens do Pedido</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col two left pintar">
                        <div className='row'>
                            <div className='col'> 
                            <b>Quantidade: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <div className='col'>
                            <b>Nome: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <div className='col'>
                            <b>Valor: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <hr/>
                            <p><b>Subtotal: </b></p>
                            <hr/>
                            <p><b>Taxa de entrega: </b></p>
                            <hr/>
                            <p><b><b>Total a Pagar: </b></b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
			        <div className="col">
				    <Button className = "one"><Link to="/Cardápio">Continuar Comprando</Link></Button>
			        </div>
	        	</div>
                <div className="row">
			        <div className="col">
				    <Button className = "one"><Link to="/Pagamento">Finalizar Pedido</Link></Button>
			        </div>
	        	</div>
            </div>
        </AreaPedido>
    );

}

export default Page;