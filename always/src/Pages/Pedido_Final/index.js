import React from 'react';
import {AreaPedido_Final} from './Styled';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';

const Page = () => {
    return(
        <AreaPedido_Final>
        <Helmet>
            <title>Pedido</title>
        </Helmet> 
            <div className='Container'>
                <div className='row'>
                    <div className='col'>
                        <div className='two left'>
                        <h3>Meus Pedidos</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col two left pintar">
                        <div className='row'>
                            <div className='col'>
                            <b>Pedido: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <div className='col'> 
                            <b>Data: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <div className='col'> <b>Situação: </b> 
                                <div className='row'> 
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col'> <b>NoN </b> 
                                    <div className='row'> 
                                    </div>
                                </div>
                                <div className='col'> 
                                <b>XX/XX/XXXX </b> 
                                    <div className='row'> 
                                    </div>
                                </div>
                                <div className='col'> 
                                <b>----------</b> 
                                    <div className='row'> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                    </div>
			        <div className="col">
				    <Button className = "one"><Link to="/Cardápio">Voltar ao Inicio</Link></Button>
			        </div>
                    <div className="col">
				    <Button className = "one"><Link to="/Chat">Chat</Link></Button>
			        </div>
                    <div className='col'>
                    </div>
                </div>
	        </div>

        </AreaPedido_Final>
    );

}

export default Page;