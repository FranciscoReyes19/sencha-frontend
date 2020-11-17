Ext.define('app.view.login.WindowLoginController',{
    extend: 'Ext.app.ViewController',
  
    alias: 'controller.windowloginController',
    hacerLogin: function(){
        var formulario = this.lookupReference('formulario');

        formulario.getForm().submit({
            url: 'server/dologin.json',
            scope: this,
       
            success: function(response, opts) {
                //var obj = Ext.decode(response.responseText);
                console.log(opts.result);
                
                //this.getView().close();
                
                Ext.Msg.confirm(
                    "Hola",
                    "Bienvenido de nuevo usuario "+ opts.result.fullname, 
                    function(){ this.getView().close(); },
                    this );
            },
       
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });

    }
})