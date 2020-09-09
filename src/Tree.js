import React, {Component} from 'react';
import TreeView from 'react-easy-jstree';
import './Tree.css';


export class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {
    selectNode: ['node'],
      data: {
        core: {
          data:  {
            "url": "http://ip.regnumtuum.com/json",
            "dataType": "json" // needed only if you do not supply JSON headers
        },
          themes: {
            'name': 'proton',
            'responsive': true
        }
        },
        plugins: ["contextmenu","sort","types"],
        "contextmenu": {

            "items": function ($node) {
                //var tree = $("#SimpleJSTree").jstree(true);
                return {
                    // "Create": {
                    //     "separator_before": false,
                    //     "separator_after": true,
                    //     "label": "Create",
                    //     "action": false,
                    //     "submenu": {
                    //         "New prefix": {
                    //             "seperator_before": false,
                    //             "seperator_after": false,
                    //             "label": "Create new prefix",
                    //             "action": function () {
                    //                 console.log($node);
                    //                 //$node = tree.create_node($node, { text: 'New File', type: 'file', icon: 'glyphicon glyphicon-file' });
                    //                 //tree.deselect_all();
                    //                 //tree.select_node($node);
                    //                 document.location.href = "http://ip.regnumtuum.com:3000/prefix/new";
                    //             }
                    //         }
                    //     }
                    // },
                    "Show details": {
                        "separator_before": false,
                        "separator_after": false,
                        "label": "Show details",
                        "action": function () {
                            //console.log($node);
                            //showDetailsPrefix($node)

                        }
                    },

                    "Edit": {
                        "separator_before": false,
                        "separator_after": false,
                        "label": "Edit",
                        "action": function () {
                            //console.log($node);
                            //editPrefix($node);

                        }
                    },
                    "Delete": {
                        "separator_before": false,
                        "separator_after": false,
                        "label": "Delete",
                        "action": function () {

                            //deletePrefix($node);
                            //tree.delete_node($node);
                        }
                    }
                };
            }

        },
        "sort": (a, b) => {

            return b.localeCompare(a)
        },
        types: {
          "default": {
              "icon": false
          }
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
        <br/><br/>
        <TreeView treeData={data} selectNode={this.state.selectNode} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.state.selected.join(', ')}</p>
      </div>
    );
  }
}


