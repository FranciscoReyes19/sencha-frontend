Ext.define('app.view.clientes.Form.ComboClientes',{
    extend: 'Ext.form.field.ComboBox',
    requires:['app.store.clientes.StoreClientes'],

    xtype: 'comboclientes',

    queryMode: 'remote', //by default
    displayField:'nombre',
    valueField:'cliente_k',

    pageSize:25,
    hideTrigger: true,

    initComponent: function(){
        Ext.apply(this,{
            store: Ext.create('app.store.clientes.StoreClientes'),
            tpl: Ext.create('Ext.XTemplate',
            '<ul class="x-list-plain"><tpl for=".">',
                '<li class= "x-boundlist-item">{nombre} {apellido_paterno}</li>',
            '</tpl></ul>'
            ),
            displayTpl: Ext.create('Ext.XTemplate',
            '<tpl for="." >{nombre} - {apellido_paterno}</tpl>')
        });
    
        this.callParent();
    }

})