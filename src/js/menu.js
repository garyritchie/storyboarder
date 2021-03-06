const {Menu} = require('electron').remote
const {ipcRenderer} = require('electron')

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('openDialogue')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Export Treatment...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportTreatment')
        }
      },
      {
        label: 'Export to Fountain Screenplay...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportFountain')
        }
      },
      {
        label: 'Export to Outliner...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportOutliner')
        }
      },
      {
        label: 'Export to CSV file...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportCSV')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Export poster to PDF...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('exportPoster')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+P',
        label: 'Print current scene worksheet...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('printWorksheet')
        }
      },
      {
        accelerator: 'CmdOrCtrl+I',
        label: 'Import worksheets...',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('importWorksheets')
        }
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: 'Navigation',
    submenu: [
      {
        label: 'Play',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('togglePlayback')
        }
      },
      {
        type: 'separator'
      },
      {
        // accelerator: 'Left',
        label: 'Previous Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('goPreviousBoard')
        }
      },
      {
        // accelerator: 'Right',
        label: 'Next Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('goNextBoard')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Left',
        label: 'Previous Scene',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('previousScene')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Right',
        label: 'Next Scene',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('nextScene')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+S',
        label: 'Toggle speaking',
        type: 'checkbox',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('toggleSpeaking')
        }
      }
    ]
  },
  {
    label: 'Boards',
    submenu: [
      {
        accelerator: 'N',
        label: 'New Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('newBoard', 1)
        }
      },
      {
        accelerator: 'Shift+N',
        label: 'New Board Before',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('newBoard', -1)
        }
      },
      {
        accelerator: 'CmdOrCtrl+Backspace',
        label: 'Delete Board(s)',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('deleteBoards')
        }
      },
      {
        accelerator: 'CmdOrCtrl+Delete',
        label: 'Delete Board(s) - Go Forward',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('deleteBoards', 1)
        }
      },
      {
        accelerator: 'D',
        label: 'Duplicate Board',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('duplicateBoard')
        }
      },
      {
        accelerator: 'Alt+Left',
        label: 'Reorder Left',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('reorderBoardsLeft')
        }
      },
      {
        accelerator: 'Alt+Right',
        label: 'Reorder Right',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('reorderBoardsRight')
        }
      },
    ]
  },
  {
    label: 'Tools',
    submenu: [
      {
        accelerator: '1',
        label: 'Light Pencil',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'lightPencil')
        }
      },
      {
        accelerator: '2',
        label: 'Pencil',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'pencil')
        }
      },
      {
        accelerator: '3',
        label: 'Pen',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'pen')
        }
      },
      {
        accelerator: '4',
        label: 'Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'brush')
        }
      },
      {
        accelerator: '5',
        label: 'Note Pen',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'notePen')
        }
      },
      {
        accelerator: '6',
        label: 'Eraser',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('setTool', 'eraser')
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'Backspace',
        label: 'Clear All Layers',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('clear')
        }
      },
      {
        accelerator: 'Alt+Backspace',
        label: 'Clear Layer',
        click (item, focusedWindow, event) {
          ipcRenderer.send('clear', true)
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: '[',
        label: 'Smaller Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('brushSize', -1)
        }
      },
      {
        accelerator: ']',
        label: 'Larger Brush',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('brushSize', 1)
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: '8',
        label: 'Use Palette Color 1',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('useColor', 1)
        }
      },
      {
        accelerator: '9',
        label: 'Use Palette Color 2',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('useColor', 2)
        }
      },
      {
        accelerator: '0',
        label: 'Use Palette Color 3',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('useColor', 3)
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+F',
        label: 'Flip Horizontal',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('flipBoard')
        }
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Cycle View Mode',
        accelerator: 'Tab',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('cycleViewMode')
        }
      },
      {
        label: 'Toggle Captions',
        accelerator: 'c',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('toggleCaptions')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'F11',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://www.setpixel.com') }
      }
    ]
  }
]

const addDarwinFeatures = (template, includePreferences = false) => {
  const name = require('electron').remote.app.getName()

  let submenu = [
    {
      role: 'about'
    }
  ]

  if (includePreferences) {
    submenu.push(
      {
        type: 'separator'
      }
    )
    submenu.push(
      {
        label: 'Preferences',
        accelerator: 'Cmd+,',
        click: () => ipcRenderer.send('preferences')
      }
    )
  }

  submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Services',
      role: 'services',
      submenu: []
    },
    {
      type: 'separator'
    },
    {
      role: 'hide'
    },
    {
      role: 'hideothers'
    },
    {
      role: 'unhide'
    },
    {
      type: 'separator'
    },
    {
      role: 'quit'
    }
  )

  template.unshift({
    label: name,
    submenu
  })
}
if (process.platform === 'darwin') {
  addDarwinFeatures(template, true)
  // // Edit menu.
  // template[1].submenu.push(
  //   {
  //     type: 'separator'
  //   },
  //   {
  //     label: 'Speech',
  //     submenu: [
  //       {
  //         role: 'startspeaking'
  //       },
  //       {
  //         role: 'stopspeaking'
  //       }
  //     ]
  //   }
  // )
  // Window menu.
  template[7].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}


const welcomeTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open...',
        accelerator: 'CmdOrCtrl+O',
        click ( item, focusedWindow, event) {
          ipcRenderer.send('openFile')
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'copy'
      },
      {
        role: 'paste'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        accelerator: 'CmdOrCtrl+F',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('http://www.setpixel.com') }
      }
    ]
  }
]
if (process.platform === 'darwin') {
  addDarwinFeatures(welcomeTemplate, false)
}

// add Edit > Preferences on Windows
if (process.platform == 'win32') {
  template[1].submenu.push(
    {
      type: 'separator'
    }
  )
  template[1].submenu.push(
    {
      label: 'Preferences',
      accelerator: 'CmdOrCtrl+,',
      click: () => ipcRenderer.send('preferences')
    }
  )
}

const menuInstance = Menu.buildFromTemplate(template)
const welcomeMenuInstance = Menu.buildFromTemplate(welcomeTemplate)

const menu = {
  setWelcomeMenu: function() {
    Menu.setApplicationMenu(welcomeMenuInstance)
  },
  setMenu: function() {
    Menu.setApplicationMenu(menuInstance)
  }
}

module.exports = menu