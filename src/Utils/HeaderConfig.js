import React from 'react';

// bellow (import)functions or components are needed to header handle
import addFile from '../Utils/headerActions/addFile';
import newFile from '../Utils/headerActions/newFile';
import NewProject from '../Utils/headerActions/newProject';
import OpenProject from '../Utils/headerActions/openProject';
import SaveAs from '../Utils/headerActions/saveAs';
/**How does it work?
 * if handleWindow object is defined we use function that showed window in difrent case we use predefine (in handleAction area) function
 */
function tempAction(shortcut)
{
    console.log(shortcut);
}
export default [
{
    parentItem: 'File',
    childItems: [
        {
            childItem: 'New File',
            handleAction: newFile,
            handleWindow: null,
            shortcut: 'dodac ikonke obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: false,
        },
        {
            childItem: 'New Project',
            handleAction: null,
            handleWindow: <NewProject/>,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: true,
        },
        {
            childItem: 'Import File',
            handleAction: addFile,
            handleWindow: null,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: false,
        },
        {
            childItem: 'Open Project',
            handleAction: null,
            handleWindow: <OpenProject/>,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: true,
        },
        {
            childItem: 'Save',
            handleAction: tempAction,
            handleWindow: null,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: false,
        },
        {
            childItem: 'Save as',
            handleAction: null,
            handleWindow: <SaveAs/>,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: true,
        },
        {
            childItem: 'Preferences',
            handleAction: null,
            handleWindow: <SaveAs/>,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
            devider: false,
        },
    ]
},



{
    parentItem: 'Edit',
    childItems: [
        {
            childItem: 'New File',
            handleAction: tempAction,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
        },
    ]
},

{
    parentItem: 'Help',
    childItems: [
        {
            childItem: 'Tips',
            handleAction: tempAction,
            shortcut: 'obmyslic sposob przekazywania skrotow, moze byc np. ctrl_b',
        },
    ]
},


]





