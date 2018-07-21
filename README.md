========== Toy Robot Simulator ===========

Description:

The application is a simulation of a toy robot moving on a square tabletop, of
dimensions 5 units x 5 units.
There are no other obstructions on the table surface.
The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

The application should be able to read in any one of the following commands:

1. PLACE is the 1st valid command will put toy robot on the table in position X, Y and facing NORTH, SOUTH, EAST, WEST depend on user input.

2. MOVE will move the toy robot one unit forward in the direction it is currently facing.

3. LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

4. REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.