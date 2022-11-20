import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';
import { AreaPagamentoF } from './Styled';
import {Button, CloseButton} from 'reactstrap';

const Page = () => {
    return(
        <AreaPagamentoF>
		<Helmet>
            <title>Pagamento Final</title>
        </Helmet> 
            <div className="container">
		        <div className="row">
			        <div className="q nine">
                         <div>
				            <div className='two'>
                            <h3>Realize o Pagamento Pelo QRCode Abaixo:</h3>
                            <img src='frame.png' alt='qrcode'/>
				            </div>
			            </div>
		            </div>
                </div>
                <div className="row">
			        <div>
				    <Button className = "one"><Link to="/Pedido_Final">Voltar aos Pedidos</Link></Button>
			        </div>
	        	</div>
            </div>
        </AreaPagamentoF>
    )
}

export default Page;