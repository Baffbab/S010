

Ext.define('S010.UI.Windows', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.WindowPanel',
    layt:'fit',
    html:'works'
    
    
});




    /*
        Window Manger...

    */
    (function() {
      
 
 


        // console.clear();
        S010.UI.WindowManager = {
            // hoooook: 1,
            Windows: [],
            // World: null,
            Window: {
                CloseAll: function() {
                    // WebApp.ViewPort.WindowManager.TabPanel.WindowList.removeAll();
                    // WebApp.ViewPort.World.removeAll();
                },
                New: function(Config) {
                    // debugger;
                    if (!Config.listeners) {
                        Config.listeners = [];
                    }
                    if (!Config.id) {
                        Config.id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    }

                    // var winHndle = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

                    // debugger;
                    Config.constrain = true;
                    
                    if (!Config.closable) {
                        // console.info('closeable win...')
                    }
                    if (!Config.modal) {
                        // Config.minimizable = false;
                        // Config.maximizable = false,
 

                        if (!Config.tools) {
                            Config.tools = [

                                // {
                                //     type: 'gear',
                                //     tooltip: 'Configure options for this window',
                                //     handler: function() {
                                //         var win = this.up('window');
                                //         console.info('Gear is not working!!!');
                                //     }
                                // }, 

                                {
                                    type: 'print',
                                    tooltip: 'Print window region',
                                    handler: function() {
                                        console.info('Print is not working!!!');
                                    }
                                }, {
                                    type: 'minimize',
                                    tooltip: 'Minimize the window to take less space',
                                    // hidden: false,
                                    handler: function() {
                                        var win = this.up('window');
                                        // debugger;
                                        if (!win.height) {
                                            return;
                                        }
                                        win.minimize();
                                        win.collapse();
                                        // return;
                                        win.wasWidth = win.getWidth();
                                        win.wasHeight = win.getHeight();
                                        // debugger;
                                        win.setWidth(200);

                                    }
                                },

                                {
                                    type: 'restore',
                                    tooltip: 'Restore the window to the original space',
                                    handler: function() {
                                        // debugger;
                                        var win = this.up('window');
                                        if (win.height) {
                                            return;
                                        }


                                        if (!win.wasWidth) {
                                            // win.wasWidth = 300;
                                            win.wasHeight = 300;
                                        };
                                        win.expand('', false);
                                        win.setWidth(win.wasWidth);
                                        win.setHeight(win.wasHeight);

                                        // win.center();
                                        win.doLayout();
                                    }
                                },
                            ];
                            // debugger;;
                            if (Config.tabbable == 'NotWorking') {
                                // return;

                                Config.tools.unshift({

                                    type: 'pin',
                                    tooltip: 'Configure options for this window',
                                    handler: function(Key, view, ctrl, grrr) {
                                        var win = this.up('window');
                                        var winPanel = win.down('panel');
                                        // winPanel.tabbable = true;
                                        console.log(winPanel);


                                        var tb = WebApp.UI.Viewport.down('[id="TabManager"]');
                                        // if (winPanel.)
                                        // debugger;

                                        var newPanel = tb.add({
                                            title: Config.title,
                                            border: 0,
                                            closable: true,
                                            autoDestroy: true,
                                            layout: 'fit',
                                            items: winPanel
                                        });
                                        newPanel.show();
                                        win.close();

                                    }

                                })
                            }
                        }



                    }

                    var childWindow = new Ext.window.Window(Config);

                    return childWindow;
                },
            },
            Dialogs: {
                //Generic alert to tell or ask the user something....
                Alert: function(WindowConfig, OnSomething) {
                    var pnlConfig = {

                        // title: WindowConfig.title,
                        closable: false,

                        bodyStyle: 'background:transparent;',
                        // cls: 'PanelBkGrndEllipseSilver',

                        // bodyStyle: 'background:black;',
                        border: 0,
                        modal: true,
                        resizable: false,
                        draggable: false,
                        width: WindowConfig.width,
                        height: WindowConfig.height,
                        bodyPadding: 5,

                        //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                    };
                    if (WindowConfig.url) {
                        pnlConfig.loader = {
                            autoLoad: true,
                            url: WindowConfig.url
                        };
                    }
                    if (WindowConfig.html) {
                        pnlConfig.html = WindowConfig.html;
                    }

                    var dlgButtons = [];

                    if (WindowConfig.buttons) {
                        // setup our buttons...
                        for (var b = 0; b < WindowConfig.buttons.length; b++) {
                            var bnt = WindowConfig.buttons[b];

                            function CallClientFN(win, btnClicked) {
                                win.close();
                                OnSomething(btnClicked);
                            }
                            switch (bnt) {
                                case "OK":
                                    dlgButtons.push({
                                        text: 'OK',
                                        icon: S010.IconPath + 'dialogs/plasticxp_general_check_mark_24.png',
                                        // icon: iconPath + '/PLASTICXP/general/plasticxp_general_check_mark_24.png',
                                        handler: function() {
                                            // CallClientFN(this.up('window','OK')); 
                                            CallClientFN(this.up('window'), 'OK');

                                        }
                                    });
                                    break;
                                case "CANCEL":
                                    dlgButtons.push({
                                        text: 'CANCEL',
                                        icon: S010.IconPath + 'dialogs/plasticxp_general_button_cancel_24.png',

                                        handler: function() {
                                            CallClientFN(this.up('window'), 'CANCEL');
                                        }
                                    });
                                    break;
                                case "HELP":
                                    dlgButtons.push('->');
                                    dlgButtons.push({
                                        text: 'HELP',
                                        icon: S010.IconPath + 'dialogs/plasticxp_general_help_16.png',
                                        handler: function() {
                                            CallClientFN(this.up('window'), 'HELP');
                                        }
                                    });
                                    break;
                                default:
                                    console.warn('Hey what wat that button?  ', bnt);
                                    break;


                            };
                        }

                        pnlConfig.bbar = {
                            id: 'myDialogBAR',

                            defaults: {
                                scale: 'medium',
                                iconAlign: 'left',
                                arrowAlign: 'right',
                                // width: 100
                            },
                            items: dlgButtons
                        };
                    };
                    var newWIN = S010.UI.WindowManager.Window.New(pnlConfig).show();
                    return newWIN;
                }
            },

        };

        /*
          
        */

        // // debugger;;
        // S010.UI.WindowManager.Dialogs.Alert({
        //       buttons: ['OK','CANCEL','HELP'],
        //       // title: 'Test Alert!!!!',
        //       // url: '/app/html/dialogs/dialog.html',
        //       url: '/app/html/dialogs/AreYouSure.html',

        //       // width: '50%',
        //       width: '350px',
        //       height: '300px',

        // }, function(CLICKED) {
        //       console.log(CLICKED)
        //       debugger;;
        // });
        // debugger;;
        // S010.UI.WindowManager.Dialogs.Alert({
        //       title: 'Test Alert!!!!',
        //       html: 'just a test',

        //       width: '250px',
        //       height: '150px'
        // },function (CLICKED) {
        //       console.log(CLICKED)
        //       debugger;;
        // });








        //
    })(); //

