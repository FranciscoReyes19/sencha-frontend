Ext.define('app.view.login.WindowLogin',{
    extend: 'Ext.window.Window',
    requires:['app.view.login.WindowLoginController'],
    controller: 'windowloginController',
    title: 'Bienvenido usuario',
    width: 300,
    height: 190,
    draggable: false,
    closable: false,
    modal: true,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        bodyPadding : 10,
        reference: 'formulario',
        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [
            {
                fieldLabel: 'Usuario',
                name: 'usuario',
                vtype: 'email'        
            },
            {
                inputType: 'password',
                fieldLabel: 'Password',
                name: 'pass'
            }
        ]
    }],
    buttons: [
        {
            iconCls: 'x-fa fa-user',
            text: 'ingresar',
            handler: 'hacerLogin'
        }]
});