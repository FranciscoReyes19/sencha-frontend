Ext.define('app.view.login.WindowLoginController',{
    extend: 'Ext.app.ViewController',
  
    alias: 'controller.windowloginController',
    hacerLogin: function(){

        var datos = this.lookupReference('formulario').getValues();

        Ext.Msg.alert('Aviso', 'Bienvenido de nuevo ' + datos.usuario , Ext.emptyFn);
        this.getView().close();
    }
})