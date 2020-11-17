Ext.define( 'app.view.clientes.PanelClientes',{
    extend: 'Ext.Panel',
    xtype: 'panelClientes',

    layout: 'border',
    tbar: [
        {
            //xtype:'button'
            text:'Agregar cliente',
            iconCls: 'x-fa fa-plus',
            closable:true,
            handler: function(){
                var window = Ext.create('Ext.Window',{
                    modal: true,
                    title: 'Agregar un nuevo cliente',
                    height: 300,
                    width: 400,
                    html: 'Este debe ser el cuerpo de un formulario',
                    buttons: [{
                        text: 'Cerrar',
                        handler: function(){
                            window.close();
                        }
                    }]
                });
                window.show();
            }
        },'->',
        {
            xtype: 'textfield',
            emptyText: 'Buscar cliente',
            width: 300
        }
    ],

    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'tabpanel',
            items: [
                {
                    title: 'Listado de clientes',
                    bodyPadding: 20,
                    html: 'tipicamente un listado de columnas',
                    bodyStyle: 'background-color:#FED; font-size: 30px, color: #fff'
                }
            ],
            bbar: ['Botton bar (Zona baja)','-',{
                text: 'Agregar un nuevo contenido',
                scale: 'large',
                handler: function(){
                    var num = Ext.id();
                    panel = Ext.create('Ext.Panel',{
                        //configuraciones
                        title: 'Detalle de cliente '+ num,
                        html: 'Info cliente '+ num,
                        closable: true,

                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items:[{
                            title: 'detalle del cliente '+ num,
                            xtype: 'panel',
                            flex: 3,
                            layout: 'card',
                            items:[
                                {
                                    bodyStyle: 'background-color: #ABC; font-size: 30px; color: #345',
                                    html: 'detalle 1'
                                },
                                {
                                    bodyStyle: 'background-color: #ABC; font-size: 30px; color: #345',
                                    html: 'detalle 2'
                                }
                            ]
                        },{
                            title: 'detalle del cliente '+ num,
                            html: 'al seleccionar panel 2',
                            flex: 1,
                            bodyStyle: 'background-color: #DEF; font-size:30px; color: #345'       
                        }]
                    });

                this.up('tabpanel').add(panel);
                this.up('tabpanel').setActiveItem(panel);
                }
            }]
        },
        {
            height: 100,
            region: 'south',
            html: 'border sur',
            bodyStyle: 'background-color:red; font-size:30px; color:#fff'
        }
    ]
});