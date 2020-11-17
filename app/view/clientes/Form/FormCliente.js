Ext.define('app.view.clientes.form.FormCliente',{
    extend: 'Ext.form.Panel',

    xtype: 'formcliente',
    bodyPadding: 10,

    //layout:'anchor',   es default

    initComponent: function(){

        Ext.apply(this, {
        
          fieldDefaults:{
            labelAlign: 'right', //alineacion a la derecha
            labelWidth: 110,  //mas ancho en la etiqueta
            msgTarget:'uder', //mensaje de error por debajo
            anchor:'100%', //100% de ancho
            allowBlanck: false //obligatorio
          },

          defaultType: 'textfield',
            
          items:[{
                fieldLabel: '* Nombre',
                emptyText: 'Exte campo es obligatorio...',
                name: 'txt_nombre',
                allowBlank: false
            },{
                fieldLabel: '* Correo',
                emptyText: 'ejemplo@company.com',
                vtype: 'email',
                name: 'txt_correo',
                allowBlank: false
            },{
                xtype: 'displayfield',
                fieldLabel: 'Apodo',
                name: 'home_score',
                value: 'Por asignar...'
            },{
                fieldLabel: '* Edad',
                xtype: 'numberfield',
                maxValue:99,
                minValue: 0,
                allowDecimals: false,
                name: 'txt_edad',
                allowBlank: false
            },{
                fieldLabel: 'Fecha nacimiento',
                xtype: 'datefield',
                minValue: new Date(),
                format: "d-m-Y",
                name: 'txt_fnacimiento'
            },{
                xtype: 'radiogroup',
                fieldLabel: 'Género',
                vertical:true,
                items:[
                    { boxLabel: 'Hombre', name: 'txt_genero', inputValue: '1' },
                    { boxLabel: 'Mujer', name: 'txt_genero', inputValue: '2', checked:true },
                ]
            },{
                xtype: 'checkboxgroup',
                fieldLabel: 'Idiomas',
                columns: 2,
                vertical:true,
                items:[
                    { boxLabel: 'Francés', name: 'txt_idioma', inputValue: '1' },
                    { boxLabel: 'Portugués', name: 'txt_idioma', inputValue: '2', checked:true },
                    { boxLabel: 'Alemán', name: 'txt_idioma', inputValue: '3'},
                    { boxLabel: 'Inglés', name: 'txt_idioma', inputValue: '4'},
                ]
            }
            ]
        
        });


        this.callParent();
    },
    doSubmit: function(){
        this.getForm().submit({
            url: 'server/doformpost.json',
            success: function(form, result){
                console.log('result');
            },
            failure: function(form, result){
                console.log('result',result);
            }
        });
    },
    doLoad: function(){
        this.getForm().load({
            url: 'server/doformload.json',
            success: function(form, result){
                console.log('result', result);
            }
        });
    }
});