# Conway's Game of Life [![Circle CI](https://circleci.com/gh/minifast-winston/conway.svg?style=svg)](https://circleci.com/gh/minifast-winston/conway)

A programming puzzle for the ages.

Wikipedia provides a good description of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).


## Setup

1. Clone this repository to your local machine
2. Install dependencies by running `bundle install` in the terminal
3. Serve index.html by running `python -m SimpleHTTPServer` in one tab
4. Run the tests by running `rake jasmine` in another tab


## Rules

The world of Game of Life is played on a never-ending board of boxes.
Each box is home to a little creature, which can be either alive or dead.
Each creature might have 8 next-door neighbors.
The Game of Life takes place over steps in time.

At each step, these things can happen to the creature:

1. **Being Alone**: a creature does not have neighbors, or has one neighbor, and dies.

2. **Being Happy**: a creature has two or three neighbors, and keeps living.

3. **Being Crowded**: a creature has more than three neighbors, and dies.

4. **Making a Home**: if a box does not have a creature in it, and that box has three neighbor-creatures, then a new creature is born in that box.
