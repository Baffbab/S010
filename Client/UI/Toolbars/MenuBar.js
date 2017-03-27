/*
    Main Toolbar...
    
    not used anymore????

*/
(function() {



    Ext.define('S010.UI.Toolbars.MenuBar', {
        extend: 'Ext.toolbar.Toolbar',
        alias: 'widget.MenuBar',


        defaults: {
            scale: 'small',
            // scale: 'medium',
            iconAlign: 'left',
            arrowAlign: 'right',
        },
        border: 0,



        constructor: function(config) {
            var thisPanel = this;
            var MenuItems = [];

            //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm
            MenuItems.push({
                tooltip: 'FILE',


                icon: S010.IconPath + 'beta_general_gear_16.png',
                // text: '<span class="ToolbarText">FILE</span>',

                menu: [{
                    text: 'Open...',
                    tooltip: 'Open a local file from your computer',
                    // icon: S010.IconPath + 'beta_general_open_16.png',

                    handler: function(btn) {
                        // console.info('FILE OPEN');
                        // window.S010.AlertNA();
                        S010.ExternalURL('http://google.com');
                    }
                }, '-', {
                    text: 'Open Console',
                    iconCls: 'fa fa-map-o',
                    handler: function() {
                        S010.OpenDevTools();
                    }
                }, '-', {
                    iconCls: 'fa fa-sign-out',
                    text: 'Exit',
                    handler: function(btn) {
                        window.close();
                    }

                }, ]
            });


            thisPanel.items = MenuItems

            this.callParent([config]);

        }






    });



})(); //
