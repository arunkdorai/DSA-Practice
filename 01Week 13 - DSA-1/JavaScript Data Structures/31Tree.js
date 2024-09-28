/* Tree

A tree is a hierarchical data structure that consists of nodes connected by edges.
Typically, each node stores a data value.

A tree is a non-linear data structure, compared to arrays, linked lists, stacks and
queues which are linear data structures.

In linear data structures, the time required to search is proportional to the size
of the data set. More the data, more the time needed to search.

Trees however, owing to the nonlinear nature allow quicker and easier access to the data.

A tree will not contain any loops or cycles.

Tree Visualization is there in the written notebook.

In the tree, we have the nodes represented as circles connected by edges represented as lines.

Tree Usage :

Trees find usage in a number of scenarios where hierarchical represenation is necessary.

-File systems for directory structure.
-A family tree
-An organisation tree
-DOM
-Chat bots
-Abstract syntax trees

Like linked list, trees are often asked during interviews.

Tree Terminology :

Apart from nodes and edges there are quite a few terms and properties of a tree that
we should be aware of.

Parent Node: A node that is an immediate predecessor of any node is called a parent node.
Child Node: A node that is an immediate successor of a node is called a child node.
Root Node: The node from which the tree originates is called the root node. It does not
have a parent node.
Leaf Node: Nodes that do not have any child nodes are called leaf nodes.
Siblings: Nodes with the same parent are called siblings.
Ancestor Node: Nodes may also have ancestor nodes such as parent's parent.
Path: Path is the sequence of nodes and edges from one node to another.
Distance: It is the number of edges along the shortest path between two nodes.

Properties that are specific to a node:

-Degree(node): The degree of a node is the total number of child nodes it has.
-Degree(tree): The degree of a tree is the maximum degree of a node in the tree.
-Depth(node): The depth of a node is the number of edges from the root to that node.
The depth of root node is always zero.
-Height(node): The number of edges from the deepest leaf to that node.
The height of the root node is considered the height of the tree.

*/