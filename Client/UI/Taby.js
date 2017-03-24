
Ext.define('S010.UI.Taby', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.Taby',
    // requires:['Ext.ux.TabCloseMenu'],

    plain: true,
    // style:'background-image: linear-gradient(180deg, #E0E0E0, #FFFFFF)',
    style: 'background: -webkit-radial-gradient(center, ellipse cover, #F5F5F5 30%, #E0E0E0 80%)',

    // stateful: true,
    // stateId: 'Taby',
    border: 0,
    autoDestroy: false,  



    // enableTabScroll: true,
    // autoScroll: true,
    // resizeTabs: true,
    // closable: true,


    // plugins: {
    //     ptype: 'tabreorderer'
    // },

    // tools: [{
    //     type: 'help',
    //     handler: function(event, toolEl, panel) {
    //         alert('Should I be rendered up here?');
    //     }
    // }] ,


    plugins: [

        Ext.create('Ext.ux.TabCloseMenu', {
            extraItemsTail: [
                '-', {
                    text: 'Open as Window',

                    disabled: true,
                    // checked: true,
                    hideOnClick: true,
                    handler: function(item) {
                        // currentItem.tab.setClosable(item.checked);


                        var tb = WebApp.UI.Viewport.down('[id="TabManager"]');
                        var OpenThisTab = tb.getActiveTab();
                        // var tabPanel = OpenThisTab.down('panel');
                        // var tabPanel = OpenThisTab.items.items[0];
                        // debugger;;

                        // var tabPanelItems = OpenThisTab.items;


                        function getAllChildren(panel) {
                            /*Get children of passed panel or an empty array if it doesn't have thems.*/
                            var children = panel.items ? panel.items.items : [];
                            /*For each child get their children and concatenate to result.*/
                            Ext.each(children, function(child) {
                                children = children.concat(getAllChildren(child));
                            })
                            return children;
                        }

                        var ChildItemsFromPanel = getAllChildren(OpenThisTab);
                        // debugger;

                        console.log(OpenThisTab);

                        var win = WebApp.UI.WindowManager.Window.New({
                            id: OpenThisTab.id,
                            title: OpenThisTab.title,
                            // icon: rootIconPath + 'REALVISTA/videoproduction/realvista_videoproduction_image_sequence_16.png',

                            bodyStyle: 'background:transparent;',
                            // bodyStyle: 'background:black;',
                            border: 0,
                            modal: false,

                            resizable: true,
                            draggable: true,
                            tabbable: true,

                            width: '80%',
                            height: '80%',
                            // x:(window.innerWidth) - 350,
                            y: 60,
                            autoScroll: true,
                            bodyPadding: 5,
                            layout: 'fit',
                            // items:ChildItemsFromPanel[1]

                        });
                        if (!win) {
                            debugger;
                        }

                        win.add({
                            title: 'inserted',
                            layout: 'fit',
                            items: OpenThisTab
                        });
                        win.show();
                        OpenThisTab.close();




                    }
                }
            ],
            listeners: {
                aftermenu: function() {
                    currentItem = null;
                },
                beforemenu: function(menu, item) {
                    var menuitem = menu.child('*[text="Open as Window"]');
                    currentItem = item;
                    // menuitem.setChecked(item.closable);
                }
            }
        }), {
            ptype: 'tabreorderer'
        },
    ],


    initComponent: function() {

        this.callParent();

    },


    listeners: {
        tabchange: function(tabPanel, newTab, oldTab, index) {
            // console.log('change tab');
        },
        beforeadd: function(tabpane, component, index) {
            // console.log('Adding new tab');
        },
      
    },


    AddTab: function(PanelTitle, PanelIcon, ChildItems) {
        // this.add(ChildItems);
        
        // return;
        debugger;
        var thisPanel = this;
        var newTab = thisPanel.add({
            title: PanelTitle,
            tabName:ChildItems.id,
            icon: PanelIcon,
            border: 0,
            closable: true,
            // autoDestroy: true, 
            layout: 'fit',
            listeners: {
                beforeclose: function(tabPanel) {
                    // debugger;
                    // event.preventDefault();
                    if(ChildItems.hideTab){
                        
                    }else{
                        tabPanel.destroy()
                    }
                    
                    // // Ext.getCmp('MessagesList')
                    // // console.log(tabPanel.id)
                    
                    // tabPanel.hide();
                    // tabPanel.setVisible(false)
                    // event.preventDefault();
                    // // return false;
                    // // console.log('closing tab');
                    // debugger;
                }
            }

        });


        newTab.add(ChildItems);


    }
});

