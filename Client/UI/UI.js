/*

*/
// debugger;

//Store it in the browser and not the cookie!!!!
Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());


Ext.QuickTips.init();
Ext.Loader.setPath('Ext.ux', './ExtJS/ux');
Ext.Loader.setPath('S010.UI', './UI');
 

Ext.application({
    name: 'S010',
    autoCreateViewport: false,
    stores: [
        // 'S010.DATA.Messages',

    ],
    launch: function() {
        Ext.QuickTips.init();
        Ext.onReady(function() {

            Ext.require('S010.UI.DisplayPort', function() {
                S010.UI.DisplayPort = Ext.create('S010.UI.DisplayPort', {


                });
                // S010.HeartBeat.Start();
                // console.clear();
                console.info('DisplayPort has finished so console is ready!');
            });
        });
    }
});
