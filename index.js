
// Helper variables
var closedNodeColor = "steelblue";
var openedNodeColor = "#def";
var nodeStartRadius = 15;
var nodeEndRadius = 10;
var depthSeparation = 160;



var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

// Create a D3 tree.
// Keep in mind, ._children is the list of hidden child nodes 
// and .children is the list of shown child nodes
var tree = d3.layout.tree()
    .size([height, width]);

// Create a D3 diagonal function for drawing the links
var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

// Grap the svg canvas and apply attributes to it.
// Then add a graphics element to it. 
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load the json data in
d3.json("data.json", function(error, CS_Foundamentals) {
  if (error) throw error;

  // Set the root node and its position
  root = CS_Foundamentals;
  root.x0 = height / 2;
  root.y0 = 0;

  // Collapse function for collapsing subtrees of a node
  function collapse(d) {
    // If the node has open children
    if (d.children) {
      // "hide" the shown children by 
      // setting _children to children
      d._children = d.children;

      // Collapse each node in _children list
      d._children.forEach(collapse);

      // And set the shown children list to null 
      d.children = null;
    }
  }

  // Collapse each child node of root and update it
  root.children.forEach(collapse);
  update(root);
});

d3.select(self.frameElement).style("height", "800px");



function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * depthSeparation; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  // Create the svg circle for the newly entered nodes
  nodeEnter.append("circle")
      .attr("r", nodeStartRadius)
      .style("fill", function(d) { return d._children ? closedNodeColor : openedNodeColor; });

  // Add the text to each newly added node
  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -nodeStartRadius : nodeStartRadius; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", nodeStartRadius);
      
  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  // Set the radius and fill for the circles on the nodes
  nodeUpdate.select("circle")
      .attr("r", nodeEndRadius)
      .style("fill", function(d) { return d._children ? closedNodeColor : openedNodeColor; });

  // Show the text for the updated nodes
  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  // Set the radius for the exit node(s)
  nodeExit.select("circle")
      .attr("r", nodeStartRadius);

  // And show the text
  nodeExit.select("text")
      .style("fill-opacity", 1);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}



// Toggle children on click.
function click(d) {
  // If clicked on an opened node (close that node)
  if (d.children) {
    // Set hidden children to shown children ("closing" the subtree)
    d._children = d.children;

    // Set shown children list to null 
    d.children = null;
  } else if (d._children == null) {
      // If clicked on end node, open the node's url in a new tab
      window.open(d.url, '_blank');
  } else { // otherwise, clicked on an unopened node so open it
    // Set shown children to hidden children ("opening" the subtree)
    d.children = d._children;

    // Set hidden children list to null
    d._children = null;
  }

  update(d);
}
     
