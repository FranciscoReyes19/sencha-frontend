Ext.define('app.store.clientes.StoreClientes',{
    extend: 'Ext.data.Store',

    fields:[
        {name: "client_k", type: 'int'},
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        {name:"fecha_nacimiento", type: 'date'},
        "email",
        {name:"genero", type:'int'},
        {name:"limite_credito",type:'float'},
        "rolnombre",
        "colorfavorito",
        {name:"estatus", type: 'int'},
    ],
    proxy:{
        type: 'ajax',
        url: 'server/listcustomers.json',
        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty:'numFilas'
        }
    }

});