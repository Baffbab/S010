/*
    Main Statusbar...

*/
(function() {



    Ext.define('S010.UI.Toolbars.StatusBar', {
        extend: 'Ext.toolbar.Toolbar',
        alias: 'widget.StatusBar',

        defaults: {
            scale: 'small',
            iconAlign: 'left',
            arrowAlign: 'right',
        },
        border: 0,
        UpdateStatus: function(StatusText2Display) {
            var thisPanel = this;
            // debugger;

            // console.info('Set Status BAR--', StatusText2Display);
            thisPanel.StatusText.AddDate = new Date();
            thisPanel.StatusText.RawValue = StatusText2Display;
            // thisPanel.StatusText.update(StatusText2Display);
            thisPanel.StatusText.update('<span class="StatusbarText">' + StatusText2Display + '</span>');
            // setTimeout(function() {
            //     thisPanel.StatusText.update(StatusText2Display);

            // }, 6.66);
            // setTimeout(function() {
            //     if (thisPanel.StatusText.RawValue == StatusText2Display) {
            //         thisPanel.StatusText.update('&nbsp;');
            //     }
            // }, 6666);


        },
        // items: [{

        //     tooltip: 'FILE',
        //     icon: S010.IconPath + 'beta_general_gear_16.png',


        //     menu: [

        //         // //
        //         // {
        //         //     text: 'Open...',
        //         //     tooltip: 'Open a local file from your computer',
        //         //     // icon: S010.IconPath + 'beta_general_open_16.png',

        //         //     handler: function(btn) {
        //         //         // console.info('FILE OPEN');
        //         //         window.S010.AlertNA();
        //         //         // S010.ExternalURL('http://google.com');
        //         //     }
        //         // },

        //         // {
        //         //     tooltip: 'HELP',
        //         //     text: 'Help',
        //         //     icon: S010.IconPath + 'sigma_general_help_16.png',
        //         //     // text: '<span class="ToolbarText">FILE</span>',

        //         //     menu: [ //

        //         //     ]
        //         // },

        //         // '-',

        //         {
        //             text: 'About...',
        //             tooltip: 'Who/What/Where/Why...',
        //             icon: S010.IconPath + 'modern_general_help_16.png',
        //             handler: function(btn) {
        //                 console.info('about');
        //                 //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh



        //                 var aboutWin = S010.UI.WindowManager.Window.New({

        //                     id: 'AboutWIn',


        //                     //  // title: 'Edit Marker' + defaultData.title,
        //                     icon: S010.IconPath + 'modern_general_help_16.png',
        //                     //  iconCls: 'fa television',
        //                     bodyStyle: 'background:transparent;',
        //                     border: 0,
        //                     resizable: false,
        //                     draggable: false,
        //                     modal: true,
        //                     width: 200,
        //                     height: 300,
        //                     layout: 'fit',
        //                     title: '<center><i>John R Nelson</i></center>',


        //                 });

        //                 var fs = require("fs");


        //                 fs.readFile(S010.RootPath + '/HTML/about.html', 'utf8', function(err, data) {
        //                     // debugger;
        //                     if (err) {
        //                         console.error(err);
        //                     }
        //                     else {

        //                         // console.log(data);
        //                         aboutWin.update(data);
        //                     }
        //                     aboutWin.show();
        //                 });







        //                 //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh
        //             }
        //         },


        //         '-', {
        //             iconCls: 'fa fa-sign-out',

        //             text: 'Exit',
        //             handler: function(btn) {
        //                 window.close();
        //             }

        //         }
        //     ]
        // }],



        initComponent: function() {


            this.callParent();
            var thisPanel = this;


            // thisPanel.add();



            thisPanel.add('-');


            thisPanel.StatusText = thisPanel.add({
                xtype: 'label',
                text: '',
            });


            // // thisPanel.StatusText.update('<span class="StatusbarText">Ready to play around!</span>');
            thisPanel.UpdateStatus('Ready to play <u>around</u>!');

            thisPanel.add('->');

            thisPanel.MENU = thisPanel.add({

                // tooltip: 'FILE',
                icon: S010.IconPath + 'beta_general_gear_16.png',


                menu: [

                    // //
                    {
                        text: 'User Options...',
                        // tooltip: 'Open a local file from your computer',
                        // icon: S010.IconPath + 'beta_general_open_16.png',

                        handler: function(btn) {
                            // console.info('FILE OPEN');
                            
                            // UserPrefs
                            
                            window.S010.AlertNA();
                            // S010.ExternalURL('http://google.com');
                        }
                    },

                    // {
                    //     tooltip: 'HELP',
                    //     text: 'Help',
                    //     icon: S010.IconPath + 'sigma_general_help_16.png',
                    //     // text: '<span class="ToolbarText">FILE</span>',

                    //     menu: [ //

                    //     ]
                    // },

                    '-',

                    {
                        text: 'About...',
                        tooltip: 'Who/What/Where/Why...',
                        icon: S010.IconPath + 'modern_general_help_16.png',
                        handler: function(btn) {
                            console.info('about');
                            //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh



                            var aboutWin = S010.UI.WindowManager.Window.New({

                                id: 'AboutWIn',


                                //  // title: 'Edit Marker' + defaultData.title,
                                icon: S010.IconPath + 'modern_general_help_16.png',
                                //  iconCls: 'fa television',
                                bodyStyle: 'background:transparent;',
                                border: 0,
                                resizable: false,
                                draggable: false,
                                modal: true,
                                width: 200,
                                height: 300,
                                layout: 'fit',
                                title: '<center><i>John R Nelson</i></center>',


                            });

                            var fs = require("fs");


                            fs.readFile(S010.RootPath + '/HTML/about.html', 'utf8', function(err, data) {
                                // debugger;
                                if (err) {
                                    console.error(err);
                                }
                                else {

                                    // console.log(data);
                                    aboutWin.update(data);
                                }
                                aboutWin.show();
                            });







                            //HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh
                        }
                    },


                    '-', {
                        iconCls: 'fa fa-sign-out',

                        text: 'Exit',
                        handler: function(btn) {
                            window.close();
                        }

                    }
                ]
            });




        }
    });



})(); //