import React,{Component} from 'react'

export const Rules = () => {
        return(
            <div id="rules">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 offset-m2 title center">
                            <h3 className="title__subtext">POLÍTICA DEL PROGRAMA</h3>
                            <h2 className="title__principal">Reglas Claras</h2>
                        </div>
                        <div className="col s12 m10 offset-m1">
                            <ul className="collapsible" data-collapsible="accordion">
                                <li>
                                    <div className="collapsible-header">
                                        SOBRE EL COLABORADOR
                                        <span className="badge"><i className="material-icons">keyboard_arrow_down</i></span>
                                    </div>
                                    <ul className="collapsible-body">                                        
                                        <li><span>El colaborador no podrá referenciarse a sí mismo ni a otros colaboradores de Rimac Seguros o Rimac Eps.</span></li>                                        
                                        <li><span>El colaborador solo podrá referenciar a personas naturales, con DNI o Carné de Extranjería.</span></li>
                                        <li><span>El colaborador no podrá referenciar a clientes que tengan una póliza activa vigente y del mismo producto a referenciar.</span></li>                                        
                                        <li><span>Aplica para colaboradores de Lima y Provincias, exceptuando los colaboradores de: FFVV, CNT, Central de Consultas, Formalización, UN Vehículos, Inteligencia de Negocio, Plataformas de atención al cliente, Área de siniestros y Áreas comerciales brokers.</span></li>
                                        <li><span>No aplica para colaboradores de las áreas de Auditoría Interna, Riesgo Operacional y Telemarketing.</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="collapsible-header">
                                        SOBRE EL PROGRAMA
                                        <span className="badge"><i className="material-icons">keyboard_arrow_down</i></span>                          
                                    </div>
                                    <ul className="collapsible-body">
                                        <li><span>El único medio habilitado para que los colaboradores puedan Referenciar es a través de la página: <a href="https://www.rimac.com.pe/Referenciadores/">https://www.rimac.com.pe/referenciadores/</a></span></li>
                                        <li><span>No podrá referenciarse pólizas que tengan beneficio de colaborador, teniendo en cuenta que estos beneficios en los ramos de salud y vehículos, son extensibles a familiares directos.</span></li>
                                        <li><span>No se permitirá la migración de pólizas entre canales en menos de 1 año, es decir que si una póliza emitida por otro canal es anulada o referida tras el fin de su vigencia por un colaborador, se mantendrá el agenciamiento previo y no será válida para efectos de comisiones por el programa de Referenciadores.</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="collapsible-header">
                                        SOBRE LOS PAGOS DE COMISIONES
                                        <span className="badge"><i className="material-icons">keyboard_arrow_down</i></span>
                                    </div>
                                    <ul className="collapsible-body">
                                        <li>
                                            <span>El referenciador recibirá un monto similar a la comisión del canal. Este monto es un % en base a la prima neta de la póliza emitida en favor del referenciado.</span>
                                            <li>Vehicular = 10%</li>
                                            <li>Salud = 5%</li>
                                            <li>Domiciliario = 5%</li>
                                        </li>                                                                             
                                        <li><span>El cálculo de la comisión será realizado de forma manual, teniendo como información base para el cálculo, las ventas registradas de pólizas al cierre del mes calendario.</span></li>
                                        <li><span>La comisión está sujeta a los descuentos laborales correspondientes (Ej. AFP, Renta 5ta categoría etc.), según cada colaborador.</span></li>
                                        <li><span>La comisión será pagada en la boleta del colaborador al mes siguiente de haber referido ventas, siempre y cuando se haya comprobado el cobro de la primera cuota de la póliza pagada por el cliente y antes del cierre de planilla que maneja GDH.</span></li>
                                        <li><span>En la planilla y boleta de pago del colaborador aparecerá el monto comisionado bajo el concepto de “comisión (bono por campaña)”.</span></li>
                                        <li><span>Si el colaborador logra obtener una comisión de venta en 3 meses durante los semestres de cálculo correspondiente a cada beneficio laboral, dichas comisiones sumarán al cálculo de los mismos.</span></li>
                                        <li><span>Si el colaborador termina su vínculo laboral y luego de haberse pagado los beneficios sociales en la correspondiente Liquidación quedaran comisiones pendientes de pago, éstas serán consideradas en un Reintegro de Liquidación posterior.</span></li>
                                        <li><span>En caso dos colaboradores refieran a la misma persona, solo aplicará el beneficio de la comisión para aquel que lo hizo primero, tomando como referencia de fecha la herramienta de gestión desarrollada para Telemarketing.</span></li>
                                        <li><span>Los referenciados tendrán una vigencia de dos meses calendario, periodo durante el cual estará sujeto al pago del bono.</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="collapsible-header">
                                        SOBRE LAS ANULACIONES
                                        <span className="badge"><i className="material-icons">keyboard_arrow_down</i></span>
                                    </div>
                                    <ul className="collapsible-body">
                                        <li><span>Si durante el piloto se anulan pólizas, se revisarán los motivos de anulación para evitar fraudes. Quedan exonerados los casos de anulación ligados a un tema administrativo de Rimac (vehículo no inspeccionado, póliza no se emite, error de emisión)</span></li>
                                        <li><span>De anularse 3 pólizas después de la 2da cuota por motivos ajenos a temas administrativos de Rimac y después que se le haya pagado la comisión al colaborador, se evaluará su permanencia en el programa.</span></li>
                                        <li><span>De incumplirse algún lineamiento, pauta o encontrarse algún tipo de fraude, se aplicarán las medidas necesarias según el Reglamento Interno de Trabajo, el Código de Conducta y las normas laborales.</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}