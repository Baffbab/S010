var fs = require("fs");



Ext.define('S010.UI.DisplayPort', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.DisplayPort',
    requires: [
        // 'Ext.ux.TabCloseMenu',
        'Ext.ux.TabReorderer',
        'S010.UI.Taby',
        'S010.UI.Windows',
        'S010.UI.Toolbars.MenuBar',
        'S010.UI.Toolbars.StatusBar'
        // 'Ext.menu.Menu'

    ],
    //   uses: ['Ext.picker.Date', 'Ext.menu.Menu']
    // stateful: true,
    // stateId: 'DisplayPort',

    layout: {
        type: 'border'
    },

    border: 0,
 

    items: [
        //
        {
            region: 'south',
            xtype: 'StatusBar'
        },
        //
        {
            region: 'center',
            xtype: 'Taby',
            id: 'TabManager',
            flex: 4,
            border: 0,
            autoDestroy: false,
            plain: true,

            items: [
                //
                {
                    title: 'News and Updates',
                    // icon: S010.IconPath + 'modern_general_help_16.png',
                    icon: S010.IconPath + 'stroke_communications_news_16.png',


                    // cls: 'PanelBlackBack',
                    // cls: 'PanelSmoothGrayBack',
                    // cls: 'PanelBkGrndGradientFLATBack',
                    // cls: 'PanelBkGrndEllipseToWhite', 
                    cls: 'PanelDarkBack',
                    bodyPadding: 15,
                    overflowY: 'auto',
                    closable: true,



                    listeners: {
                        render: function(view, other, andsome) {
                            // fs = require('fs')
                            // var fs = require('fs');


                            fs.readFile(S010.RootPath + '/HTML/welcome.html', 'utf8', function(err, data) {

                                if (err) {
                                    debugger;
                                }
                                else {
                                    view.update(data);

                                }
                            });

                        }
                    },

                },

            ]
        }
    ],
    listeners: {
        render: function(view, other, andsome) {
            /*

                        if (!S010.version.isValid) {

                            S010.UI.WindowManager.Dialogs.Alert({
                                buttons: ['OK'],

                                html: '<b><center>Please update your client</center></b><br>' +
                                    '<p>Build Date : ' + S010.ServerInfo.version.build + '</p>' +
                                    '<p>Server Version : ' + S010.ServerInfo.version.major + '.' + S010.ServerInfo.version.minor + '.' + S010.ServerInfo.version.revision + '</p>' +
                                    '<p>Your Version : ' + S010.version.major + '.' + S010.version.minor + '.' + S010.version.revision + '</p>' +
                                    '',
                                width: '350px',
                                height: '300px',

                            }, function(CLICKED) {
                                // console.log(CLICKED)
                                window.close();
                                // debugger;

                            });

                        }
                        else {

                            //?All loaded....
                        }
            */



        }
    },
    initComponent: function() {
        this.callParent();
    },
});
