import React, {Component} from 'react';
import TreeView from 'react-easy-jstree';

export class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {
    selectNode: ['node'],
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: [
              {text: 'Child node 1'},
              {text: 'Child node 2'}
              ]
            }
          ]
        }
      },
      selected: [],
    };
  }

  handleClick() {
    const newData = this.state.data.core.data[0].children.slice();
    newData.push({text: 'New child node'});
    this.setState({
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: newData
            }
          ]
        }
      }
    });
  }

  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <button onClick={() => this.handleClick()}>Add node</button>
        <br/><br/>
        <TreeView treeData={data} selectNode={this.state.selectNode} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.state.selected.join(', ')}</p>
      </div>
    );
  }
}


/////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import TreeView from 'react-easy-jstree';

// export class Tree extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: {
//                 core: {
//                     "check_callback": true,
//                     data: {
//                         "url": "http://localhost/json",
//                         "dataType": "json" // needed only if you do not supply JSON headers
//                     },
//                     themes: {
//                         'name': 'proton',
//                         'responsive': true
//                     }
//                 },

//                 "plugins": ["contextmenu", "types", "sort", "state", "search", "adv_search"],
//                 "contextmenu": {
//                     "items": function ($node) {
//                         //var tree = $("#SimpleJSTree").jstree(true);
//                         return {
//                             // "Create": {
//                             //     "separator_before": false,
//                             //     "separator_after": true,
//                             //     "label": "Create",
//                             //     "action": false,
//                             //     "submenu": {
//                             //         "New prefix": {
//                             //             "seperator_before": false,
//                             //             "seperator_after": false,
//                             //             "label": "Create new prefix",
//                             //             "action": function () {
//                             //                 console.log($node);
//                             //                 //$node = tree.create_node($node, { text: 'New File', type: 'file', icon: 'glyphicon glyphicon-file' });
//                             //                 //tree.deselect_all();
//                             //                 //tree.select_node($node);
//                             //                 document.location.href = "http://ip.regnumtuum.com:3000/prefix/new";
//                             //             }
//                             //         }
//                             //     }
//                             // },
//                             "Show details": {
//                                 "separator_before": false,
//                                 "separator_after": false,
//                                 "label": "Show details",
//                                 "action": function () {
//                                     //console.log($node);
//                                     //showDetailsPrefix($node)

//                                 }
//                             },

//                             "Edit": {
//                                 "separator_before": false,
//                                 "separator_after": false,
//                                 "label": "Edit",
//                                 "action": function () {
//                                     //console.log($node);
//                                     //editPrefix($node);

//                                 }
//                             },
//                             "Delete": {
//                                 "separator_before": false,
//                                 "separator_after": false,
//                                 "label": "Delete",
//                                 "action": function () {

//                                     //deletePrefix($node);
//                                     //tree.delete_node($node);
//                                 }
//                             }
//                         };
//                     }
//                 },
//                 "types": {
//                     "default": {
//                         "icon": false
//                     },
//                     "demo": {
//                         "icon": "glyphicon glyphicon-ok"
//                     }
//                 },
//                 "sort": (a, b) => {

//                     a = a.split(".").join(",").split("/").join(",").split(",");
//                     b = b.split(".").join(",").split("/").join(",").split(",");


//                     return (a[0] - b[0]) || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]
//                 },
//                 "state": { "key": "state_demo" },
//                 "search": {
//                     "show_only_matches": true,
//                     "show_only_matches_children": true
//                 }
//             },

//             selected: [],
//         };
//     }

//     handleClick() {
//         const newData = this.state.data.core.data[0].children.slice();
//         newData.push({ text: 'New child node' });
//         this.setState({
//             data: {
//                 core: {
//                     data: [
//                         {
//                             text: 'Root node', children: newData
//                         }
//                     ]
//                 }
//             }
//         });
//     }

//     handleChange(e, data) {
//         this.setState({
//             selected: data.selected,
//         })
//     }

//     render() {
//         const data = this.state.data;

//         return (
//             <div>
//                 {/* <button onClick={() => this.handleClick()}>Add node</button> */}
//                 <br /><br />
//                 <TreeView treeData={data} /*onChange={(e, data) => this.handleChange(e, data)}*/ />
//                 <br />
//                 <p>Selected nodes: {this.state.selected.join(', ')}</p>
//             </div>
//         );
//     }
// }